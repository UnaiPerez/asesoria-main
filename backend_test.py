#!/usr/bin/env python3
import requests
import json
import sys
from datetime import datetime
import uuid

class APITester:
    def __init__(self, base_url="https://expertos-tributarios.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_base = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, timeout=10):
        """Run a single API test"""
        url = f"{self.api_base}{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=timeout)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=timeout)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=timeout)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers, timeout=timeout)

            print(f"   Status: {response.status_code}")
            success = response.status_code == expected_status
            
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Expected {expected_status}, got {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'endpoint': endpoint
                })

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except requests.exceptions.RequestException as e:
            print(f"❌ FAILED - Network Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e),
                'endpoint': endpoint
            })
            return False, {}
        except Exception as e:
            print(f"❌ FAILED - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e),
                'endpoint': endpoint
            })
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root Endpoint",
            "GET", 
            "/",
            200
        )

    def test_get_articles(self):
        """Test getting blog articles"""
        return self.run_test(
            "Get Blog Articles",
            "GET",
            "/blog/articles",
            200
        )

    def test_create_article(self):
        """Test creating a blog article"""
        test_article = {
            "title": f"Test Article {uuid.uuid4().hex[:8]}",
            "slug": f"test-article-{uuid.uuid4().hex[:8]}",
            "summary": "This is a test article summary for testing purposes",
            "content": "This is the full content of the test article. It contains detailed information for testing.",
            "category": "Test",
            "readTime": 3
        }
        
        success, response = self.run_test(
            "Create Blog Article",
            "POST",
            "/blog/articles",
            200,  # Based on the FastAPI response_model, it should return 200
            data=test_article
        )
        
        if success:
            return True, response.get('id'), response.get('slug')
        return False, None, None

    def test_get_article_by_slug(self, slug):
        """Test getting a specific article by slug"""
        return self.run_test(
            f"Get Article by Slug ({slug})",
            "GET",
            f"/blog/articles/{slug}",
            200
        )

    def test_delete_article(self, article_id):
        """Test deleting a blog article"""
        return self.run_test(
            f"Delete Article ({article_id})",
            "DELETE",
            f"/blog/articles/{article_id}",
            200
        )

    def test_get_contact_messages(self):
        """Test getting contact messages"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "/contact/messages",
            200
        )

    def test_create_contact_message(self):
        """Test creating a contact message"""
        test_message = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "123456789",
            "subject": "Test Message",
            "message": "This is a test contact message"
        }
        
        success, response = self.run_test(
            "Create Contact Message",
            "POST",
            "/contact/messages",
            200,
            data=test_message
        )
        
        if success:
            return True, response.get('id')
        return False, None

    def test_mark_message_as_read(self, message_id):
        """Test marking a contact message as read"""
        return self.run_test(
            f"Mark Message as Read ({message_id})",
            "PATCH",
            f"/contact/messages/{message_id}/read",
            200
        )

    def run_all_tests(self):
        """Run all tests in sequence"""
        print("🚀 Starting API Tests for Argomaniz y Garcia Asesores Website")
        print(f"Testing API at: {self.api_base}")
        print("=" * 80)

        # Test basic connectivity
        success, _ = self.test_root_endpoint()
        if not success:
            print("❌ API root endpoint failed - stopping tests")
            return self.generate_report()

        # Test blog endpoints
        print("\n📚 Testing Blog Endpoints...")
        self.test_get_articles()
        
        # Test creating and managing articles
        success, article_id, slug = self.test_create_article()
        if success and slug:
            self.test_get_article_by_slug(slug)
            if article_id:
                self.test_delete_article(article_id)

        # Test contact endpoints
        print("\n📧 Testing Contact Endpoints...")
        self.test_get_contact_messages()
        
        success, message_id = self.test_create_contact_message()
        if success and message_id:
            self.test_mark_message_as_read(message_id)

        return self.generate_report()

    def generate_report(self):
        """Generate test report"""
        print("\n" + "=" * 80)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 80)
        print(f"Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed / self.tests_run * 100):.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in self.failed_tests:
                error_msg = test.get('error', f"Expected {test.get('expected')}, got {test.get('actual')}")
                print(f"   - {test['name']}: {error_msg}")
        
        return self.tests_passed == self.tests_run

if __name__ == "__main__":
    tester = APITester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)
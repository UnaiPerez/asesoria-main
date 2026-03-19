from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class BlogArticle(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    summary: str
    content: str
    category: str
    image: Optional[str] = None
    publishDate: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    readTime: int = 5
    author: str = "Argomaniz y Garcia Asesores"
    published: bool = True

class BlogArticleCreate(BaseModel):
    title: str
    slug: str
    summary: str
    content: str
    category: str
    image: Optional[str] = None
    readTime: int = 5

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    message: str
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    read: bool = False

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    message: str


# Blog routes
@api_router.get("/")
async def root():
    return {"message": "Argomaniz y Garcia Asesores API"}

@api_router.post("/blog/articles", response_model=BlogArticle)
async def create_article(article: BlogArticleCreate):
    """Create a new blog article"""
    article_dict = article.model_dump()
    article_obj = BlogArticle(**article_dict)
    article_data = article_obj.model_dump()
    article_data['publishDate'] = article_data['publishDate'].isoformat()
    await db.blog_articles.insert_one(article_data)
    return article_obj

@api_router.get("/blog/articles", response_model=List[BlogArticle])
async def get_articles(published: bool = True):
    """Get all published blog articles"""
    query = {"published": published}
    articles = await db.blog_articles.find(query).sort("publishDate", -1).to_list(100)
    return [BlogArticle(**article) for article in articles]

@api_router.get("/blog/articles/{slug}", response_model=BlogArticle)
async def get_article_by_slug(slug: str):
    """Get a specific blog article by slug"""
    article = await db.blog_articles.find_one({"slug": slug})
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return BlogArticle(**article)

@api_router.delete("/blog/articles/{article_id}")
async def delete_article(article_id: str):
    """Delete a blog article"""
    result = await db.blog_articles.delete_one({"id": article_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "Article deleted successfully"}

# Contact routes
@api_router.post("/contact/messages", response_model=ContactMessage)
async def create_contact_message(message: ContactMessageCreate):
    """Create a new contact message"""
    message_dict = message.model_dump()
    message_obj = ContactMessage(**message_dict)
    message_data = message_obj.model_dump()
    message_data['createdAt'] = message_data['createdAt'].isoformat()
    await db.contact_messages.insert_one(message_data)
    return message_obj

@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages(read: Optional[bool] = None):
    """Get all contact messages"""
    query = {}
    if read is not None:
        query["read"] = read
    messages = await db.contact_messages.find(query).sort("createdAt", -1).to_list(100)
    return [ContactMessage(**message) for message in messages]

@api_router.patch("/contact/messages/{message_id}/read")
async def mark_message_as_read(message_id: str):
    """Mark a contact message as read"""
    result = await db.contact_messages.update_one(
        {"id": message_id},
        {"$set": {"read": True}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    return {"message": "Message marked as read"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

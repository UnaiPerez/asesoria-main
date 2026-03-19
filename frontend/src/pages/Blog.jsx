import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${API}/blog/articles`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d" 
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blog y Actualidad
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Noticias, guías y consejos fiscales, laborales y contables
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-600">Cargando artículos...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-700 mb-2">Próximamente</h3>
              <p className="text-slate-600">
                Estamos preparando contenido interesante para ti. Vuelve pronto.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                    {article.image && (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center text-amber-600 font-semibold hover:gap-3 gap-2 transition-all"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Mantente Informado
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Síguenos para estar al día de las últimas novedades fiscales, laborales y contables que puedan afectar a tu negocio.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              Contacta con Nosotros
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

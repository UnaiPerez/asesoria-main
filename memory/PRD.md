# PRD - Argomaniz y Garcia Asesores Website

## Información del Negocio
**Nombre:** Argomaniz y Garcia Asesores Sociedad Limitada  
**Actividad:** Intermediación en asesoramiento fiscal, laboral, legal y contable, y gestoría administrativa  
**Ubicación:** Calle Mayor 55, 1º, 01300 Laguardia, Álava  
**Teléfono:** 945 600 676  
**Email:** info@ayg-asesores.com  
**Fundación:** 2013

## Arquitectura Técnica
- **Frontend:** React 19 con React Router v7, Tailwind CSS, Shadcn UI components
- **Backend:** FastAPI (Python) con MongoDB
- **Base de Datos:** MongoDB (Motor async driver)
- **Hosting:** Emergent Agent Platform

## Estructura de Páginas Implementadas
1. **Inicio (Home)** - Hero section, servicios destacados, estadísticas, CTA
2. **Quiénes Somos** - Historia, valores, equipo, misión
3. **Servicios** - Áreas de especialización con acordeón de servicios detallados
4. **Clientes** - Sectores atendidos, testimoniales
5. **Blog** - Sistema de artículos (próximamente con contenido)
6. **Contacto** - Información de contacto, mapa de ubicación

## APIs Backend Implementadas

### Blog APIs
- `POST /api/blog/articles` - Crear artículo
- `GET /api/blog/articles` - Obtener todos los artículos
- `GET /api/blog/articles/{slug}` - Obtener artículo por slug
- `DELETE /api/blog/articles/{article_id}` - Eliminar artículo

### Contact APIs
- `POST /api/contact/messages` - Crear mensaje de contacto
- `GET /api/contact/messages` - Obtener mensajes
- `PATCH /api/contact/messages/{message_id}/read` - Marcar como leído

## Modelos de Datos (MongoDB)

### BlogArticle
```python
{
  "id": str,
  "title": str,
  "slug": str,
  "summary": str,
  "content": str,
  "category": str,
  "image": Optional[str],
  "publishDate": datetime,
  "readTime": int,
  "author": str,
  "published": bool
}
```

### ContactMessage
```python
{
  "id": str,
  "name": str,
  "email": str,
  "phone": Optional[str],
  "subject": str,
  "message": str,
  "createdAt": datetime,
  "read": bool
}
```

## Diseño y Estilo
- **Paleta de Colores:** Azul marino (#0a1128, #1e3a5f), Plateado/gris claro, Dorado/champagne (#d4af37)
- **Tipografía:** Sistema nativa optimizada para legibilidad
- **Componentes:** Shadcn UI components con animaciones suaves
- **Efectos:** Glassmorphism, hover states, transiciones fluidas
- **Responsive:** Diseño adaptativo mobile-first

## Implementado (Fecha: 15 Enero 2025)
✅ Full-stack completo con React + FastAPI + MongoDB  
✅ 6 páginas completamente diseñadas y funcionales  
✅ Sistema de navegación con header y footer  
✅ Integración de logo personalizado  
✅ Backend APIs para blog y mensajes de contacto  
✅ Diseño profesional y moderno  
✅ Imágenes profesionales de Laguardia y oficina  
✅ Responsive design  
✅ Testing completo (100% backend, 95% frontend)

## Próximas Funcionalidades (Backlog Priorizado)

### P0 (Alta Prioridad)
- [ ] Formulario de contacto funcional con envío de emails
- [ ] Sistema de administración de artículos del blog
- [ ] Página de aviso legal y política de privacidad
- [ ] Optimización SEO (meta tags, sitemap, robots.txt)

### P1 (Media Prioridad)
- [ ] Panel de administración para gestionar contenido
- [ ] Sistema de newsletter/suscripción
- [ ] Integración con Google Analytics
- [ ] Mejoras en accesibilidad (WCAG 2.1)
- [ ] Testimonios reales de clientes

### P2 (Baja Prioridad)
- [ ] Versión en euskera del sitio
- [ ] Chat en vivo o chatbot
- [ ] Sistema de citas online
- [ ] Calculadoras fiscales interactivas
- [ ] Blog con contenido real sobre novedades fiscales

## Issues Conocidos
- Menú móvil (RESUELTO): El menú móvil se ha ajustado con z-index y posicionamiento absoluto

## Notas Técnicas
- El backend usa Motor para operaciones async con MongoDB
- Las imágenes se obtienen de Unsplash (profesionales y de Laguardia)
- El logo está almacenado localmente en `/app/frontend/public/logo.png`
- Hot reload habilitado en frontend y backend

# Requisitos — Landing Page Veterinaria "Como Perro y Gato"
**Ciudad:** Córdoba, Argentina

---

## Requisitos Funcionales

### RF-01 — Navegación
- Menú de navegación fijo con enlaces a cada sección de la página.
- Scroll suave al hacer clic en los enlaces del menú.
- Menú colapsable (hamburguesa) en dispositivos móviles.

### RF-02 — Hero / Portada
- Sección principal con nombre de la veterinaria y slogan.
- Llamada a la acción (CTA) principal visible: "Pedir turno".
- Imagen o ilustración representativa de fondo.

### RF-03 — Servicios
- Listado de servicios ofrecidos con título, descripción breve e ícono.
- Servicios a incluir (ajustable): consulta clínica, vacunación, cirugía, peluquería, urgencias.

### RF-04 — Sobre nosotros
- Presentación de la veterinaria: historia, misión o valores.
- Foto del equipo o de las instalaciones.

### RF-05 — Contacto y turnos
- Botón de acceso directo a WhatsApp para solicitar turno.
- Formulario de contacto con campos: nombre, email, mensaje.
- Datos de contacto visibles: teléfono, email, dirección.

### RF-06 — Ubicación
- Mapa embebido de Google Maps con la dirección de la veterinaria.

### RF-07 — Horarios de atención
- Tabla o listado con días y horarios de atención al público.

### RF-08 — Reseñas de Google Maps
- Sección que muestra las calificaciones y reseñas dejadas por clientes en Google Maps.
- Mostrar puntuación promedio (estrellas) y cantidad total de reseñas.
- Tarjetas individuales con: nombre del cliente, calificación en estrellas, texto de la reseña y fecha.
- Enlace directo al perfil de Google Maps para ver todas las reseñas o dejar una nueva.
- **Implementación:** reseñas estáticas curadas — selección manual de las mejores reseñas, sin dependencia de API ni costos adicionales.

---

## Requisitos No Funcionales

### RNF-01 — Diseño responsive
- La página debe adaptarse correctamente a dispositivos móviles, tablets y escritorios.
- Breakpoints mínimos: 375px (móvil), 768px (tablet), 1280px (escritorio).

### RNF-02 — Performance
- Tiempo de carga objetivo: menos de 3 segundos en conexión 4G.
- Imágenes optimizadas (formato WebP, lazy loading).
- Mínimo JavaScript bloqueante en el renderizado inicial.

### RNF-03 — Accesibilidad
- Contraste de color conforme a WCAG 2.1 nivel AA.
- Textos alternativos (`alt`) en todas las imágenes.
- Navegación funcional con teclado.

### RNF-04 — SEO básico
- Meta tags: título, descripción, keywords.
- Open Graph para previsualización en redes sociales.
- Estructura semántica HTML5 (header, main, section, footer).

### RNF-05 — Stack tecnológico
- **Astro** con **Tailwind CSS**.
  - Genera HTML estático por defecto: máxima performance y SEO sin configuración extra.
  - Estructura de componentes limpia y mantenible sin la complejidad de un SPA.
  - Tailwind permite construir el diseño rápido y consistente con tokens de utilidad.

### RNF-06 — Compatibilidad de navegadores
- Soporte para las últimas 2 versiones de Chrome, Firefox, Safari y Edge.

### RNF-07 — Mantenibilidad
- Código organizado por secciones o componentes.
- Variables CSS o tokens de diseño para colores y tipografía.

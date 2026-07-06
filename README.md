# Los Paletilla · Reformas y Albañilería en Plasencia

Web estática de la empresa **Los Paletilla** (reformas y albañilería en general, Plasencia, Cáceres).

- 📞 Teléfono: **639 417 692** (botón de llamada directa)
- 💬 Botón flotante de **WhatsApp** con mensaje precargado
- ✅ Formulario que envía el presupuesto directamente por WhatsApp (sin servidor)
- 🔍 SEO local: meta tags + datos estructurados Schema.org (LocalBusiness)
- 📱 100% responsive, con barra fija de Llamar/WhatsApp en móvil

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Toda la página (secciones: servicios, proceso, trabajos, opiniones, zona, FAQ, contacto) |
| `styles.css` | Estilos |
| `script.js` | Menú móvil, contadores, formulario → WhatsApp |

## Cómo desplegar

### Opción A: Vercel (recomendada)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opción B: GitHub Pages
```bash
git remote add origin https://github.com/TU_USUARIO/los-paletilla.git
git push -u origin main
```
Luego en GitHub: **Settings → Pages → Source: main branch** y la web queda en `https://TU_USUARIO.github.io/los-paletilla/`.

## Personalizar

- **Fotos reales**: sustituye los bloques `.work-img` de la sección "Trabajos" por `<img>` con tus fotos de obras (antes/después convierte mucho).
- **Teléfono**: buscar y reemplazar `639417692` / `639 417 692` en `index.html` y `script.js`.
- **Opiniones**: sustituye las de ejemplo por reseñas reales de tus clientes (idealmente enlazando a Google Maps).

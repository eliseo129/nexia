# Nexia — Landing de agentes de IA

Landing page estática para promocionar la creación de agentes de IA (atención,
ventas y agendamiento por WhatsApp). HTML + CSS + un JS mínimo: **sin build, sin
dependencias, sin framework**.

## Ver en local

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Sitio estático: no hay hot-reload. Recarga con `Ctrl+Shift+R` para saltar la
caché del CSS.

## Estructura

| Archivo | Qué contiene |
|---|---|
| `index.html` | Todas las secciones de la página |
| `styles.css` | Estilos y tema (variables en `:root`) |
| `script.js` | Envío del formulario de demo |
| `favicon.svg` | Ícono de marca (gradiente naranja + letra) |
| `robots.txt` | Indexación abierta para buscadores |

### Secciones de `index.html`

1. **Hero** — propuesta de valor + mock animado de chat de WhatsApp
2. **Métricas** — 4 cifras de impacto
3. **`#agentes`** — 6 tipos de agente (ventas, agenda, soporte, calificador, integrador, panel)
4. **`#como`** — proceso de implementación en 6 pasos
5. **`#planes`** — 3 planes con uno destacado
6. **`#faq`** — 5 preguntas con `<details>` nativo
7. **`#contacto`** — CTA final con captura de correo

## Personalizar

**Colores.** Todo el tema sale de las variables en `:root` de `styles.css`:

```css
--brand:#ff7a1a;   /* naranja principal */
--brand2:#ffb020;  /* ámbar de acento */
--bg:#07090f;      /* fondo */
--surface:#0e1220; /* tarjetas */
```

El mock de chat usa aparte el verde de WhatsApp (`#25d366`, `#128c7e`,
`#005c4b`) y es intencional: no hereda `--brand`.

**Textos, planes y FAQ.** Se editan directo en `index.html`; no hay CMS ni
plantillas.

## Formulario de demo

`script.js` hoy solo limpia el campo y muestra el mensaje de confirmación —
**no envía nada a ningún lado**. Para conectarlo, reemplaza el handler por un
`fetch` a tu endpoint o apunta el `<form>` a un servicio tipo Formspree.

## Publicar

Al ser estático, sirve cualquier hosting de archivos: GitHub Pages, Netlify,
Vercel o un `nginx` apuntando a esta carpeta. No hay paso de compilación.

## Pendientes

- [ ] Conectar `#demo-form` a un backend real
- [ ] Reemplazar marca, textos y precios de ejemplo
- [ ] Agregar `og:image` y metadatos para compartir en redes

# Latam Agregador - Landing

Landing mínima lista para desplegar en **Vercel** usando **Next.js 14 (pages router)**.

## Estructura
```
pages/
  |_ _app.jsx
  |_ index.jsx
styles/
  |_ globals.css
```

## Scripts
- `npm run dev` – desarrollo
- `npm run build` – build de producción
- `npm start` – servir build

## Despliegue (Vercel)
1. Sube esta carpeta a un repo nuevo en GitHub (o súbela directa en Vercel).
2. En Vercel, _Import Project_ → conecta el repo.
3. Variables por defecto (no requiere nada extra).
4. Build command: `npm run build` – Output: `.next` (por defecto).

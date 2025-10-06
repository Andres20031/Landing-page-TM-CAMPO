# Tool Manager React App

## Requisitos
- Node.js 18+

## Ejecutar en desarrollo
```bash
cd react-app
npm install
npm run dev
```
Abre `http://localhost:5173`.

## Build de producción
```bash
npm run build
npm run preview
```

## Estructura
- `public/` contiene `css/` y `img2/` copiados desde la landing original.
- `src/sections/` tiene `Navbar`, `HeroCarousel`, `IntroVideo`, `Indicators`.
- Los estilos de Bootstrap y del proyecto se cargan desde `public/index.html`.

## Notas
- La gráfica usa `react-chartjs-2` + `chart.js` y colores del tema.
- El carrusel usa Bootstrap 5.

# Software Seguro · CUC 2026

Dos clases introductorias de Software Seguro, para una audiencia heterogénea con conocimientos generales de informática. La progresión prioriza conceptos intuitivos antes de la terminología especializada.

## Decks

- [`slides-clase-1.md`](./slides-clase-1.md) — **Software seguro desde el diseño**: entender → modelar → pensar amenazas → diseñar. Toda la clase se organiza alrededor de un único caso de estudio: una app de banca digital.
- [`slides-clase-2.md`](./slides-clase-2.md) — **Shift Left or Get Hacked**: construir → verificar → automatizar → operar.

Las 56 diapositivas de `tmp/Shift left or get hacked.pptx` (archivo local no versionado) se descompusieron e intercalaron por tema en ambos decks: 6 en la clase 1 y 50 en la clase 2, sin cambiar el orden ni el contenido de las diapositivas que ya existían. Cada diapositiva incorporada tiene en sus notas el número y el texto íntegro del PowerPoint original. Se reutilizaron las imágenes pertinentes en [`public/pptx-images/`](./public/pptx-images/), sin copiar el tema ni sus elementos decorativos.

Los decks están hechos con Slidev. Para mantener la compatibilidad con el proyecto original, `slides.md` sigue siendo la presentación de inicio del comando `npm run dev`.

## Desarrollo

```sh
npm install
npm run dev:clase-1
npm run dev:clase-2
```

## Build y exportación

```sh
npm run build                 # índice + ambas clases, listo para Pages
npm run build:clase-1
npm run build:clase-2
npm run export:clase-1        # genera PDF
npm run export:clase-2
```

`npm run build` deja el sitio en `dist/`: un índice y cada deck en `dist/clase-1/` y `dist/clase-2/`. Para previsualizarlo, `BASE_PATH=/slides-cuc-2026 npm run build` usa la misma base que GitHub Pages.

## Publicación

En cada push a `master`, [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) construye el sitio y lo publica en GitHub Pages. En el repositorio hay que elegir **GitHub Actions** como origen: Settings → Pages → Build and deployment.

El sitio queda en `https://carlosmgc2003.github.io/slides-cuc-2026/`. La raíz es un índice con el tema del deck; las clases están en `/clase-1/` y `/clase-2/`.

Cada slide está separado por `---`. Las notas para quien presenta pueden agregarse como comentarios HTML dentro del slide. El detalle de estándares y conceptos avanzados se mantiene fuera del recorrido principal para no sobrecargar el nivel introductorio.

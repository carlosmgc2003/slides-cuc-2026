# Razorfish slides

Slidev presentation project. The source of truth for the deck is [`slides.md`](./slides.md).

## Requirements

- Node.js 20+
- npm 10+

## Development lifecycle

```sh
npm install          # install dependencies
npm run dev          # live preview at http://localhost:3030
npm run build        # build the static deck into dist/
npm run export       # export slides.md to PDF
```

Commit `package-lock.json` after installing to keep installs reproducible. Review the deck in the browser before merging; the CI workflow verifies that it builds. PDF export requires the browser dependencies used by Playwright/Slidev.

## Project conventions

- Keep slide content in `slides.md`; separate slides with `---`.
- Add presenter notes in HTML comments within the relevant slide.
- Put reusable Vue components in `components/`, global styles in `style.css`, and static media in `public/`.
- Reference public files with root-relative paths (for example `/logo.svg`).
- Keep generated output (`dist/`, PDF files) out of version control.

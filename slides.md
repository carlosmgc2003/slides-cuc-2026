---
theme: default
title: Ciberseguridad Institucional y Ciberdefensa
info: Facultad de Ingeniería del Ejército · UNDEF
author: FIE-UNDEF
colorSchema: dark
highlighter: shiki
mdc: true
transition: fade
layout: default
fonts:
  sans: IBM Plex Sans
  mono: JetBrains Mono
  weights: '400,500,600,700'
  provider: google
themeConfig:
  primary: '#3EC8D8'
  background: '#0B100E'
  secondary: '#151E1A'
  success: '#5CFF8A'
  alert: '#FF5A3A'
  foreground: '#E7E9E6'
  muted: '#9AA39C'
htmlAttrs:
  lang: es
---

<header>FIE · UNDEF · CUC 2026</header>

# Ciberdefensa
## Protección de la misión en el ciberespacio

<div class="grid grid-cols-2 gap-4 mt-8">

<div class="cyber-card">

### Postura

La misión exige **confidencialidad**, **integridad** y **disponibilidad** como requisitos operativos, no como capas posteriores.

```bash
$ posture --check cia
[ok] confidencialidad
[ok] integridad
[ok] disponibilidad
```

</div>

<div class="cyber-card-alert">

### Alerta

Una vulnerabilidad conocida sin mitigar expone la operación. El perímetro digital es parte del teatro de operaciones.

`status: VULN-OPEN` · superficie de ataque en expansión

</div>

</div>

<footer class="absolute bottom-3 left-10">Facultad de Ingeniería del Ejército</footer>
<footer class="absolute bottom-3 right-10">Ciberdefensa · UNDEF</footer>

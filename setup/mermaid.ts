import { defineMermaidSetup } from '@slidev/types'

// Tema Mermaid alineado con el deck oscuro.
// Sin esto, los diagramas usan el esquema claro por defecto y contrastan
// con el fondo. Los colores salen de style.css / uno.config.ts.
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    darkMode: true,
    background: 'transparent',
    fontFamily: 'JetBrains Mono, ui-monospace, monospace',
    fontSize: '15px',
    // Nodos
    primaryColor: '#151E1A',
    primaryTextColor: '#E7E9E6',
    primaryBorderColor: '#3EC8D8',
    // Subgrafos / clusters (fronteras y alcance)
    clusterBkg: '#0B100E',
    clusterBorder: '#3EC8D8',
    // Aristas y etiquetas
    lineColor: '#9AA39C',
    textColor: '#E7E9E6',
    edgeLabelBackground: '#0B100E',
    // Notas (por si se usan más adelante)
    noteBkgColor: '#151E1A',
    noteTextColor: '#E7E9E6',
    noteBorderColor: '#3EC8D8',
  },
}))

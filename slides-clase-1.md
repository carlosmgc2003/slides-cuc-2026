---
theme: default
title: Software seguro desde el diseño
info: CUC · Software Seguro · Clase 1
transition: slide
mdc: true
---

# Software seguro desde el diseño
## Construyendo sistemas antes de defenderlos

> La seguridad empieza antes del código.

<!-- Notas: abrir con la tesis y anticipar que vamos a razonar sobre sistemas, no aprender una herramienta. -->

---

# ¿Dónde nace una vulnerabilidad?

¿En el código? ¿En una decisión de diseño? ¿En una configuración? ¿En una necesidad mal entendida?

**Pregunta:** ¿en qué momento todavía es barato cambiar el rumbo?

---
layout: section
---

# Panorama de amenazas

<!--
PowerPoint original · diapositiva 5

Panorama de Amenazas
-->

---

# Cada sistema tiene algo que proteger

- Personas y sus datos
- Dinero y operaciones
- Disponibilidad y confianza

Primero identifiquemos el valor; después, qué lo pone en riesgo.

---

# El software moderno está conectado

```mermaid
flowchart LR
  U[Personas] --> A[Aplicación] --> S[Servicios] --> D[(Datos)]
  A --> X[Servicios externos]
  S --> C[Cloud]
```

Cada conexión es una oportunidad de intercambio y una pregunta de seguridad.

---

# Defender solo el perímetro no alcanza

Una muralla puede proteger una entrada, pero no corrige una puerta abierta dentro.

- Usuarios legítimos también pueden equivocarse
- Un servicio conectado puede ser comprometido
- La seguridad tiene que acompañar a cada componente

---

# El límite de la seguridad reactiva

<div class="grid grid-cols-[3fr_2fr] gap-6 items-center">
<div>

El modelo de **fortaleza y foso** confía en firewall e IDS y deja la seguridad de aplicaciones para un pentest antes del lanzamiento.

Con ciclos Agile y DevOps cortos, esa revisión tardía se convierte en cuello de botella o se sacrifica por velocidad.

</div>
<img src="/pptx-images/image21.png" alt="El costo del cambio crece cuanto más tarde se detecta un problema" class="w-full" />
</div>

<!--
PowerPoint original · diapositiva 8

Modelo tradicional (fortaleza y foso):
Seguridad perimetral (firewall e IDS).
Seguridad de aplicaciones relegada al final del SDLC (pentesting pre lanzamiento).
Insuficiente para el desarrollo moderno:
Metodologías Agile y DevOps: ciclos cortos, cambios frecuentes.
Seguridad se vuelve un cuello de botella o se sacrifica por velocidad.
Limitaciones de la seguridad tradicional reactiva
-->

---

# Seguridad es una propiedad del sistema

Agregar una herramienta no convierte automáticamente un sistema en seguro.

La seguridad resulta de decisiones coordinadas sobre diseño, implementación, configuración y operación.

---

# ¿Qué queremos proteger?

**Activos:** aquello cuyo valor importa para alguien.

Información · personas · operaciones · dinero · disponibilidad · reputación

---

# ¿Qué podría pasarle?

Una amenaza es una situación o acción capaz de afectar un activo.

Ejemplos: alguien accede sin permiso, se alteran datos, el servicio deja de estar disponible.

---

# Amenazas en el sector financiero

**Tácticas:** ransomware dirigido, phishing a empleados o clientes, explotación de APIs y ataques a la cadena de suministro.

**Impacto:** IBM estimó en alrededor de USD 6 millones el costo promedio de una brecha de datos en el sector financiero en 2024.

[Fuente: IBM, Cost of a Data Breach](https://www.ibm.com/reports/data-breach)

<!--
PowerPoint original · diapositiva 6

La transformación digital acelerada nos expone a ciberamenazas sofisticadas:
Tácticas comunes contra la banca
Ransomware dirigido.
Phising avanzado a empleados o clientes.
Explotación de vulnerabilidades en APIs.
Ataques a la cadena de suministro de software.
Impacto real: el costo promedio de una brecha de dato en el sector financiero fue de $6 millones en 2024.
Servicios financieros: consistentemente entre las 3 industrias mas atacadas.
Panorama de amenazas en el sector financiero
https://www.ibm.com/reports/data-breach
-->

---

# ¿Qué consecuencias tendría?

El impacto describe qué consecuencias tendría un problema.

El riesgo nos ayuda a priorizar: combina la posibilidad de que ocurra con el impacto que tendría.

---

# Vulnerabilidad, amenaza y riesgo no son lo mismo

| Concepto | Pregunta | Ejemplo |
|---|---|---|
| Vulnerabilidad | ¿Qué debilidad existe? | Contraseña fácil de adivinar |
| Amenaza | ¿Qué podría ocurrir? | Alguien intenta adivinarla |
| Riesgo | ¿Qué tan preocupante es? | Acceso a datos sensibles |

---

# No podemos proteger lo que no entendemos

Antes de elegir controles, necesitamos saber qué partes tiene el sistema y cómo se relacionan.

**Primero el mapa; después, las defensas.**

---

# Dibujemos el sistema

```mermaid
flowchart LR
  P[Persona] --> A[Aplicación] --> S[Servicio] --> D[(Datos)]
  S --> E[Sistema externo]
```

Un mapa simple alcanza para empezar a hacer mejores preguntas.

---

# La información se mueve

¿De dónde viene esta información? ¿A dónde va? ¿Quién puede verla o cambiarla?

```text
Persona → Aplicación → Servicio → Datos → Sistema externo
```

---

# ¿En quién confiamos?

No todo componente, usuario o dato merece el mismo nivel de confianza.

Preguntemos qué sabemos del origen y qué validaciones hacen falta antes de actuar.

---

# Fronteras de confianza

Una frontera de confianza marca el paso entre contextos con distintos niveles de confianza.

**Trust Boundary** es el nombre técnico. Al cruzarla, validamos identidad, permisos y datos.

---

# Superficie de ataque

Son los lugares donde alguien puede interactuar con el sistema o influir en él.

Entradas · cuentas · APIs · archivos · interfaces · servicios externos

Reducir entradas innecesarias reduce oportunidades de abuso.

---

# ¿De dónde vienen las brechas?

- Phishing y amenazas internas, intencionadas o accidentales.
- Software de terceros vulnerable o sin parches.
- Configuraciones incorrectas en la nube.
- Superficie expandida: home banking, onboarding, pagos instantáneos y banca móvil.
- Microservicios, contenedores y nube introducen nuevas dependencias y riesgos.

[Ejemplo: análisis de la brecha de Snowflake (CSA)](https://cloudsecurityalliance.org/blog/2025/05/07/unpacking-the-2024-snowflake-data-breach)

<!--
PowerPoint original · diapositiva 7

Panorama de amenazas en el sector financiero
Causas comunes de brechas:
Phishing
Amenazas internas (intencionadas o accidentales).
Vulnerabilidades en software de terceros.
Software sin parches.
Configuraciones incorrectas en la nube.
Superficie de ataque expandida:
Homebanking, onboard digital, pagos instantaneos, banca movil.
Cada nueva funcionalidad, API o línea de código es un vector potencial.
Arquitecturas modernas (microservicios, contenedores, nube) introducen nuevos riesgos.
https://cloudsecurityalliance.org/blog/2025/05/07/unpacking-the-2024-snowflake-data-breach
-->

---

# Principios de diseño seguro

No hace falta memorizar una lista extensa. Empecemos con preguntas útiles:

- ¿Quién necesita este acceso?
- ¿Qué pasa si una defensa falla?
- ¿Cómo limitamos el daño?

---

# Confiar lo mínimo necesario

Cada persona y componente debería tener solo los permisos que necesita, durante el tiempo que los necesita.

Menos confianza implícita; menos oportunidades para que un error se convierta en incidente.

---

# No depender de una única defensa

La defensa en profundidad combina controles complementarios.

Si una barrera falla, otras todavía pueden prevenir, detectar o limitar el impacto.

---

# Diseñar también para cuando algo falle

Un fallo no debería abrir el sistema ni exponer más información.

- Fallar de forma segura
- Recuperarse de manera controlada
- Hacer visible lo que requiere atención

---

# Limitar el impacto de un compromiso

Separar permisos y componentes ayuda a contener un problema.

**Limitar el impacto (blast radius):** que una cuenta o servicio comprometido no dé acceso a todo.

---

# ¿Cómo podría abusarse de nuestro sistema?

Cambiemos la pregunta de “¿funciona?” por “¿cómo podría usarse de una manera que no queremos?”.

---

# Threat Modeling

Pensar sistemáticamente qué podría salir mal antes de construir.

Es una conversación estructurada sobre activos, flujos, confianza, amenazas y posibles respuestas; no requiere una herramienta especial.

---

# Una forma de ordenar las amenazas: STRIDE

Una ayuda para explorar seis tipos de abuso: suplantación, manipulación, repudio, exposición de información, denegación de servicio y elevación de privilegios.

No hace falta memorizar categorías: usemos la lista como disparador de preguntas.

---

# Encontrar una amenaza no alcanza

Una observación solo ayuda si produce una decisión: cambiar el diseño, agregar un control o aceptar conscientemente el riesgo.

---

# Del uso esperado al abuso

**Uso esperado:** una persona consulta su saldo.

**Evil User Story:** como atacante, quiero consultar el saldo de otra persona para acceder a información ajena.

La perspectiva de abuso revela requisitos que el camino feliz no muestra.

---

# Del abuso a un requisito de seguridad

**Amenaza:** consultar información ajena.

**Requisito:** cada consulta debe verificar que la persona autenticada puede acceder a esa cuenta.

Después elegimos un control concreto y una forma de comprobarlo.

---

# Integración temprana

- Considerar seguridad desde el día uno, incluso en las **historias de usuario**.
- Definir requisitos de seguridad junto con los funcionales.
- Elegir tecnologías, modelos de confianza y controles de acceso desde la arquitectura y el diseño.

<img src="/pptx-images/image8.png" alt="Ejemplos de historias de usuario y de seguridad para un proyecto" class="h-40 mx-auto mt-4" />

<!--
PowerPoint original · diapositiva 12

La seguridad es una consideración primordial desde el día uno (Secure user stories).
Requisitos de seguridad se definen y documentan junto con los funcionales.
Decisiones de arquitectura y diseño incorporan activamente la seguridad: selección de tecnologías seguras, modelos de confianza, controles de acceso.
Integracion temprana (Early Integration):
-->

---

# Amenaza → Requisito → Control → Prueba

```mermaid
flowchart LR
  A[Amenaza] --> R[Requisito] --> C[Control] --> P[Prueba]
```

Una cadena trazable: sabemos qué problema atendemos y cómo verificar que la respuesta funciona.

---

# Secure Software Development Lifecycle

**SSDLC:** integrar decisiones y verificaciones de seguridad en el ciclo de vida del software.

No es una etapa separada ni una revisión que ocurre solamente al final.

---

# Seguridad durante todo el ciclo de vida

```text
Pensar → Diseñar → Construir → Probar → Desplegar → Operar
```

En el trabajo profesional también veremos estos nombres: Requirements → Design → Code → Build → Test → Deploy → Operate.

---

# Seguridad en todo el SDLC

| Fase | Actividad de seguridad |
|---|---|
| Requisitos | Definir requisitos funcionales y no funcionales |
| Diseño | Modelar amenazas y revisar arquitectura |
| Desarrollo | Codificación segura, SAST y code reviews |
| Pruebas | SAST, DAST, SCA y fuzzing en CI/CD |
| Despliegue y operación | Monitoreo, gestión de vulnerabilidades y respuesta |

<!--
PowerPoint original · diapositiva 16

El enfoque Shift Left integra la seguridad a lo largo de todo el Ciclo de Vida de Desarrollo de Software (SDLC), asegurando que se aborde desde las primeras etapas.
Fases clave:
Requisitos: Definición de requisitos de seguridad, tanto funcionales como no funcionales.
Diseño: Implementación de modelado de amenazas, diseño de arquitecturas seguras y revisiones de diseño con un enfoque en la seguridad.
Desarrollo: Aplicación de prácticas de codificación segura, uso de SAST (Static Application Security Testing) en los IDEs, y revisiones de código centradas en la seguridad.
Pruebas: Integración de herramientas como SAST, DAST (Dynamic Application Security Testing), SCA (Software Composition Analysis) y Fuzzing directamente en el pipeline de CI/CD (Integración Continua/Entrega Continua).
Despliegue y Mantenimiento: Monitoreo continuo de la seguridad en producción, gestión proactiva de vulnerabilidades y una sólida respuesta a incidentes.
SDLC: Enfoque Shift Left
-->

---

# Diseñamos seguridad. Ahora hay que conservarla.

¿Qué pasa cuando cambian el código, las dependencias, la configuración y la infraestructura?

**En la próxima clase:** cómo verificar seguridad mientras el software evoluciona.

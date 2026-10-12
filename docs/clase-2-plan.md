# Clase 2 — Plan maestro para aprobación

> **Revisión editorial del 12-10-2026:** el usuario pidió fusionar las antiguas S11 y S12 en un cierre de la introducción. El recorrido vigente tiene 43 placas principales, sin anexos; Shift Left pasa a S12 y las siguientes se renumeran. La nueva S11 dura 3 minutos; S08 y S09 pasan a 4 minutos cada una, manteniendo 112 + 8 = 120. Las placas S12–S14 se reformularon para introducir Shift Left en pruebas y código, mostrar la distribución cualitativa del esfuerzo, ubicar herramientas en CI y explicar autonomía, cambios, beneficios y retos. Las placas S15–S28 se reescribieron como un recorrido práctico de controles de calidad y seguridad por tramo del pipeline, con feedback, acción e impacto en la entrega. Las placas S29–S30 se ajustaron para presentar la cultura DevSecOps, la tensión entre silos y un Venn de incumbencias compartidas. La S31 presenta el rol de Security Champion en desarrollo, cómo identificarlo y cómo sostenerlo con apoyo organizacional. Las S32–S33 presentan un mismo fallo de permisos en CI y la respuesta cultural y operativa del equipo bajo presión por entregar. Las S34–S35 concretan las métricas con cifras ilustrativas y recuperan control, respuesta y decisión para preparar la actividad. Las S36–S41 reemplazan actividad y piloto por el aporte DevSecOps al cumplimiento, con ISO/IEC 27001, PCI DSS y SOC 2 y un registro de evidencia. El OA5 vigente pasa a explicar controles, alcance y evidencia para cumplimiento; S02 y Q9–Q10 se alinean. El cierre conserva 16 minutos distribuidos 3/2/3/3/3/2 y mantiene 112 + 8 = 120. Los anexos iniciales se redujeron primero a management y contenedores; luego el usuario pidió eliminar ambos (placas 44 y 45). El deck vigente termina en S43 y tiene 43 placas en total. Se agregaron S42 (recap y saludo) y S43 (evaluación con el diseño de clase 1). S40–S43 distribuyen 2/1/1/1 minutos, manteniendo 112 + 8. La ventana confirmada es 16-10-2026 08:00 GMT-3 a 17-10-2026 08:00 GMT-3; enlaces y QR pendientes. Este plan conserva el diseño inicial; el contenido y la numeración vigentes están en `slides-clase-2.md` y `guion-clase-2.md`.

**DevSecOps Unlocked · FIE · Clase 2: Shift Left or Get Hacked!**
**Estado:** aprobado explícitamente por el usuario («si apruebo, lancemos»). Implementación iniciada mediante Orca; se conserva este documento como contrato de alcance.
**Base:** [auditoría del material existente](clase-2-auditoria.md), commit `e977099`.

## 1. Decisión de arquitectura

**Tesis:** al acortar el ciclo de cambios, también necesitamos acortar el ciclo de aprendizaje sobre seguridad; adelantar comprobaciones ayuda, pero solo una organización con responsabilidades, capacidad de respuesta y aprendizaje compartido convierte señales en protección efectiva.

**Hilo argumental:**

1. Diseñamos una regla de seguridad en clase 1; una función nueva puede romperla.
2. Los lotes grandes demoran el feedback. Agile propone aprender con incrementos y adaptación, no simplemente trabajar más rápido.
3. CI y Continuous Delivery hacen viable integrar y preparar cambios frecuentes. DevOps conecta desarrollo y operación; no es sinónimo de Agile ni de una herramienta.
4. Una revisión de seguridad concentrada al final puede convertirse en una cola y perder contexto.
5. Shift Left acerca comprobaciones a decisiones y cambios; Shift Left Security aplica ese principio a seguridad, sin eliminar pruebas posteriores ni operación.
6. Los controles aportan evidencia parcial. Un hallazgo sin contexto, responsable o capacidad para corregir no reduce el riesgo por sí solo.
7. DevSecOps organiza esa respuesta y el aprendizaje. Empezar con un piloto permite comprobar utilidad antes de escalar.

**Tamaño propuesto:** 42 diapositivas principales y 6 anexos de consulta, frente a las 76 actuales. La reducción proviene principalmente de fusiones; los buenos ejemplos y matices se conservan. Los anexos van después del cierre, rotulados «Consulta · fuera del recorrido de 120 minutos» y excluidos de la evaluación obligatoria. No se crea un nuevo tema, generador YAML ni estructura global del repositorio.

### Cinco resultados de aprendizaje

| ID | Nivel | Al terminar, la persona podrá… | Evidencia observable |
|---|---|---|---|
| OA1 | Recordar y comprender | Distinguir Agile, CI, Continuous Delivery, Continuous Deployment y DevOps, y explicar por qué cambios frecuentes requieren feedback oportuno. | Clasificar dos escenarios y explicar el límite de la revisión final. |
| OA2 | Comprender y analizar | Explicar Shift Left y Shift Left Security, sus beneficios condicionados y lo que no reemplazan. | Reconocer una práctica temprana y justificar un control posterior. |
| OA3 | Aplicar | Elegir una comprobación apropiada para un riesgo concreto e interpretar su alcance, sin confundir herramienta con garantía. | Relacionar autorización, dependencia o secreto con control, momento y evidencia. |
| OA4 | Analizar | Distribuir tareas y autoridad ante un hallazgo mediante prácticas culturales DevSecOps. | Identificar quién corrige, quién asesora, quién opera y quién decide una excepción. |
| OA5 | Aplicar y analizar | Proponer un piloto de mejora con responsable, criterio de decisión, evidencia y métrica contextualizada. | Completar una ficha de adopción y reconocer indicadores engañosos. |

### Caso transversal y vocabulario canónico

Se conserva **la app de banca digital de clase 1**: cliente, app, servicios de autenticación/extractos/pagos, cuentas y movimientos, proveedor de notificaciones. No exige conocimientos financieros ni usa datos reales.

**Historia de esta clase:** el equipo agrega la descarga del extracto mensual. La persona solo debería obtener movimientos de una cuenta sobre la que tiene permiso. El caso conecta el diseño previo con una ruta nueva, una biblioteca incorporada y la publicación del servicio.

- **Regla estable:** en cada consulta/descarga, el servidor verifica autorización sobre la cuenta; si falta permiso, rechaza sin entregar saldo ni movimientos. No equiparar autenticación con autorización.
- **Escenario A, principal:** una identidad válida solicita el extracto de otra cuenta. Contrastar caso permitido y caso denegado, sin hacer demostraciones contra sistemas reales.
- **Escenario B, apoyo:** aparece un aviso de vulnerabilidad sobre una biblioteca del servicio de extractos. Inventario y versión ayudan a localizarla; el aviso no demuestra explotación ni riesgo idéntico en todos los servicios.
- **Escenario C, apoyo:** se expone un token de despliegue en un cambio. Borrarlo no lo invalida: revocar/rotar y revisar uso según el caso.
- Son tres situaciones del **mismo sistema**, no tres casos de negocio. Versiones y avisos usados en ejercicios se rotulan como ficticios.

El rótulo visible es el nombre de industria, según `estilo_orador.md`: commit, PR/MR, build, pipeline, CI, Continuous Delivery, Continuous Deployment, DevOps, Shift Left, gate y Security Champion. El castellano explica una vez y queda subordinado; no reemplaza al nombre. CD solo no separa Continuous Delivery de Continuous Deployment. SAST, DAST, SCA y SBOM se acompañan siempre de función; IAST, IaC, RASP y catálogos quedan para consulta. Autorización, secreto, inventario y riesgo se nombran en castellano. Los títulos nombran el tema o la distinción; no son moralejas. No se exige programar, instalar nada ni conocer Scrum.

## 2. Cronograma de 120 minutos

Los tiempos de cada slide incluyen explicación, transición y participación prevista; **no se agregan otra vez las actividades**. Los ocho minutos de reserva no son contenido adicional.

| Horario | Bloque | Slides | Minutos | Punto de control |
|---|---|---|---:|---|
| 19:00–19:08 | A · Apertura y caso | S01–S04 | 8 | Identificar qué regla debe sobrevivir al cambio. |
| 19:08–19:30 | B · Por qué cambió el desarrollo | S05–S12 | 22 | Distinguir Agile, CI/CD y DevOps; detectar cola de seguridad. |
| 19:30–19:52 | C · Adelantar sin abandonar el resto | S13–S20 | 22 | Elegir una práctica temprana y una posterior. |
| 19:52–20:15 | D · Del control a la decisión | S21–S28 | 23 | Hallazgo ≠ decisión ≠ remediación. |
| 20:15–20:36 | E · Cultura que permite actuar | S29–S36 | 21 | Responsabilidad compartida con dueño y capacidad. |
| 20:36–20:50 | F · Aplicación y adopción realista | S37–S40 | 14 | Consigna, solución razonada y ficha de piloto. |
| 20:50–20:51 | G · Síntesis | S41 | 1 | Reconstruir la cadena causal. |
| 20:51–20:59 | Preguntas / reserva de demoras | Sobre S41 | 8 | Dos o tres preguntas agrupadas, o absorber demora previa. |
| 20:59–21:00 | Cierre y evaluación | S42 | 1 | Canal y condiciones docentes, sin inventar calendario. |
| **Total** | | | **120** | **112 programados + 8 flexibles.** |

### Participación para más de 400 personas

- S04: diagnóstico breve, 30 segundos para pensar y hasta dos respuestas por chat/mano. El docente lee la idea antes de responder para que quede en la grabación.
- S12/S20/S28/S36: recuperación de 30–45 segundos dentro del tiempo asignado; el docente publica o lee una respuesta modelo. No esperar a que respondan todos.
- S37: ejercicio individual, opción de conversar con alguien cercano; 1 minuto de lectura, 2 de decisión y 1 para dos aportes. No depende de salas pequeñas, pizarrón, encuesta externa o moderador disponible.
- S38: devolución explícita, con respuesta visible. Quien ve la grabación puede pausar S37 y contrastar con S38.
- S20 incluye una pausa breve de respiración/estiramiento durante la recuperación, no un recreo adicional no presupuestado.

**Si hay demora:** consumir primero la reserva; reducir la cantidad de intervenciones, no eliminar las respuestas modelo ni los tres temas obligatorios. Si la demora supera ocho minutos, abreviar ejemplos opcionales de S22/S24/S32 y registrarlo en el guion. No omitir contenidos evaluables sin ajustar el cuestionario. Si sobra tiempo, profundizar una pregunta del caso; no empezar automáticamente todo el anexo.

## 3. Sistema visual preservado

### Invariantes

Conservar `theme: default`, `colorSchema: dark`, IBM Plex Sans/JetBrains Mono, paleta `cyber`, fondo y línea superior existentes, tarjetas con bordes discretos. No modificar `slides-clase-1.md`, `style.css`, `uno.config.ts` ni `setup/mermaid.ts` para resolver un problema local. Cabecera de clase 2: DevSecOps Unlocked · FIE; no cambiar la identidad compartida del sitio.

### Catálogo reducido de patrones

| Patrón | Función didáctica y composición | Uso propuesto |
|---|---|---|
| V1 · Afirmación + evidencia | Título-idea, frase central y ejemplo corto; sin tarjetas obligatorias. | S01, S07, S19, S29, S42. |
| V2 · Dos carriles comparables | Mismo objeto/etapas arriba y abajo, diferencia resaltada con texto además de color. | S05–S06, S09, S11, S14, S33. |
| V3 · Flujo con retorno | Hasta cinco nodos principales; flecha de feedback realmente conectada. SVG/HTML local, o Mermaid ya configurado. | S08, S10, S18, S24–S27, S39–S41. |
| V4 · Caso y evidencia | Solicitud a la izquierda, decisión/resultado a la derecha; `two-cols-header`. | S03–S04, S15–S17, S22–S23, S37–S38. |
| V5 · Interacción entre roles | Hallazgo en el centro; aportes bidireccionales; dueño de acción y autoridad rotulados. | S30–S32, S34. |
| V6 · Matriz breve / recuperación | Máximo 4 filas o 2×2; consigna y respuesta legibles; evitar encadenar matrices idénticas. | S02, S12, S20–S21, S28, S35–S36. |

No más de dos diapositivas consecutivas con la misma composición, salvo continuidad intencional antes/después. Objetivo de una idea principal y, como guía editorial, 35–65 palabras proyectadas (excepto casos/anexos justificados). No achicar para satisfacer un conteo.

**Legibilidad verificable:** texto principal objetivo ≥22 px en canvas de 980 px; etiquetas esenciales ≥18 px; referencias auxiliares ≥14 px. Son umbrales de diseño, no una medición de los slides actuales. Títulos breves, como máximo dos líneas, sin `zoom` global para esconder densidad. Contraste objetivo ≥4,5:1 para texto normal y ≥3:1 para texto grande; comprobar sobre el fondo efectivo con opacidades. Color nunca es el único portador de significado.

**Animación:** por defecto contenido completo. Solo S06 (iteración), S14 (distribución de controles) y S25 (retorno de feedback) podrán usar hasta dos pasos discretos; se justifica cada paso. Consignas y soluciones importantes van en slides separados, no ocultas detrás de un click. Exportación sin clicks debe conservar el significado completo. No GIF nuevos ni transiciones globales nuevas.

**Componentes opcionales:** un `Clase2Lifecycle.vue` para flujos repetidos y, solo si simplifica mantenimiento, `Clase2Roles.vue`. Props mínimas, CSS scoped y nombres específicos; no biblioteca genérica. Si el componente cuesta más que dos diagramas locales, usar HTML/SVG. `StrideGrid.vue` queda intacto. No incorporar dependencias.

## 4. Fuentes previstas y política de validación

Los códigos siguientes son **candidatos de consulta**, no certifican que los enlaces o cada afirmación hayan sido verificados en esta fase. Antes de implementar, contrastar contenido y versión; registrar autor, título, año/versión, sección, URL, fecha de consulta, afirmación y slides en `fuentes-clase-2.md`.

| Código | Referencia candidata | Qué debe respaldar |
|---|---|---|
| F1 | Manifiesto Ágil y principios, 2001: https://agilemanifesto.org/iso/es/manifesto.html y https://agilemanifesto.org/iso/es/principles.html | Valores, entrega frecuente, adaptación, colaboración; también se valora lo situado a la derecha. |
| F2 | Martin Fowler, Continuous Integration: https://martinfowler.com/articles/continuousIntegration.html ; Continuous Delivery: https://martinfowler.com/bliki/ContinuousDelivery.html | Integración frecuente con comprobación; distinción entrega/despliegue. Verificar formulación exacta. |
| F3 | DORA, capacidades DevOps: https://dora.dev/capabilities/ ; NIST SP 800-204C: https://csrc.nist.gov/pubs/sp/800/204/c/final | Colaboración, cultura y entrega. Distinguir guía general del alcance cloud-native de 204C. |
| F4 | NIST SSDF SP 800-218: https://csrc.nist.gov/pubs/sp/800/218/final | Integración de seguridad en todo SDLC, preparación, producción y respuesta. No atribuirle cifras de costo ni una definición literal de Shift Left no comprobada. |
| F5 | OWASP Authorization y Threat Modeling Cheat Sheets: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html y https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html | Permisos por solicitud y análisis temprano; continuidad con clase 1. |
| F6 | OWASP WSTG y recursos SAST/SCA: https://owasp.org/www-project-web-security-testing-guide/ ; https://owasp.org/www-community/Source_Code_Analysis_Tools ; https://owasp.org/www-community/Component_Analysis | Alcance y límites de pruebas y análisis. Confirmar cobertura por fuente antes de citar. |
| F7 | NIST SP 800-204D: https://csrc.nist.gov/pubs/sp/800/204/d/final ; OWASP CI/CD: https://owasp.org/www-project-top-10-ci-cd-security-risks/ | Proteger cadena, identidades, runners y artefactos; confirmar URL canónica frente a la usada en notas actuales. |
| F8 | CISA SBOM: https://www.cisa.gov/sbom ; documento de elementos mínimos enlazado actualmente; SPDX/CycloneDX si se conservan formatos | Inventario, componentes/versiones y límites; verificar si el PDF de agosto de 2025 es borrador o final, no presentarlo como norma obligatoria. |
| F9 | OWASP Secrets Management: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html | Custodia, mínimo privilegio, revocación/rotación y seguimiento. |
| F10 | NIST SP 800-30 Rev.1: https://csrc.nist.gov/pubs/sp/800/30/r1/final ; SSDF | Riesgo situado, decisiones y revisión; el procedimiento de excepciones será ejemplo, no mandato universal atribuido. |
| F11 | OWASP Security Champions Guide: https://owasp.org/www-project-security-champions-guide/ | Rol puente, formación y soporte; verificar contenido y límites. |
| F12 | ISO/IEC 27001:2022: https://www.iso.org/standard/27001 ; guía pública de auditoría enlazada en el deck | Alcance de SGSI y aplicabilidad. No inventar texto normativo si no se dispone de la edición autorizada. |
| F13 | SLSA: https://slsa.dev/spec/ ; SPDX: https://spdx.dev/use/specifications/ ; CycloneDX: https://cyclonedx.org/specification/overview/ | Solo anexos: procedencia no equivale a ausencia de vulnerabilidades; fijar versión consultada. |

No se necesitan nuevas estadísticas, fechas de incidentes ni marcas comerciales para defender la tesis. Los diagramas de evolución no llevan escalas de productividad o costo ni fechas no verificadas. Los ejemplos del piloto y las métricas son propuestas didácticas explícitas, no hallazgos empíricos ni umbrales normativos.

## 5. Plan detallado diapositiva por diapositiva

**Convenciones:** S = recorrido principal; A = anexo; O = slide actual según auditoría. «Visual» remite al catálogo, pero cada ficha especifica la relación que debe verse. Los tiempos suman 112 minutos antes de la reserva. Cada ficha es contrato editorial, no texto definitivo para pegar.

### A · Apertura y caso — 8 minutos

#### S01 · Shift Left or Get Hacked!
- **Objetivo / tiempo:** OA2; 1 min.
- **Mensaje y conceptos:** seguridad que acompaña cambios, no garantía de inmunidad ni amenaza sensacionalista. Subtítulo: «Feedback de seguridad junto al cambio».
- **Visual / layout:** V1; `default`, conservar portada oscura y pequeño ciclo diseño–cambio–operación.
- **Oral / transición:** «La vez pasada acordamos una regla. Hoy vamos a ver cómo sostenerla cuando entregamos cambios». Abrir curiosidad sobre frecuencia, no lista de herramientas → resultados.
- **Fuentes / acción:** F4 para contexto; transformar O01, conservar identidad.

#### S02 · Decisiones de esta clase
- **Objetivo / tiempo:** OA1–OA5; 1 min.
- **Mensaje y conceptos:** cinco resultados en verbos breves: distinguir, explicar, elegir, coordinar, proponer. Ruta causal visible.
- **Visual / layout:** V6; `default`, cinco verbos en lista breve con tres hitos del recorrido; evitar cinco párrafos.
- **Oral / transición:** señalar que el cuestionario usa escenarios enseñados; no leer una rúbrica completa → recuperar una decisión de clase 1.
- **Fuentes / acción:** diseño docente, sin fuente externa; transformar O02 y crear objetivos.

#### S03 · Cada cuenta, con permiso
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** identidad válida no autoriza una cuenta ajena; requisito, control servidor y evidencia deben corresponder.
- **Visual / layout:** V4; `two-cols-header`, solicitud propia/ajena y respuesta esperada, sin código.
- **Oral / transición:** retomar consulta de movimientos de clase 1 y dar contexto a quien faltó. Pregunta: «¿Qué debe pasar si cambio el identificador?» → una función nueva pone a prueba la regla.
- **Fuentes / acción:** F5 y clase 1 S30/S32; conservar núcleo O03, sin copiar todo el repaso.

#### S04 · La descarga nueva y la autorización
- **Objetivo / tiempo:** OA2/OA3; 3 min.
- **Mensaje y conceptos:** descarga del extracto mensual; nueva ruta, biblioteca y configuración pueden afectar autorización; cambio no equivale a vulnerabilidad.
- **Visual / layout:** V4; `default`, recorrido cliente → extractos → movimientos, con cambio destacado y requisito fijo.
- **Oral / transición:** 30 segundos de diagnóstico; aceptar dos respuestas y explicitar el requisito en la grabación. Analogía: nueva puerta, misma regla de acceso → cómo organizamos esos cambios.
- **Fuentes / acción:** F4/F5; fusionar O04/O05, crear el episodio transversal.

### B · Por qué cambió el desarrollo — 22 minutos

#### S05 · Lotes grandes y feedback
- **Objetivo / tiempo:** OA1; 3 min.
- **Mensaje y conceptos:** desarrollo predominantemente por etapas, entregas grandes, feedback tardío y retrabajo potencial. No caricaturizar todo proceso tradicional como inseguro.
- **Visual / layout:** V2; `default`, línea de requisitos–construcción–pruebas–entrega y retorno largo desde un hallazgo.
- **Oral / transición:** equipo que descubre al final que el extracto permite consultar otra cuenta. Se demora conocimiento, no necesariamente por mala intención → lotes pequeños.
- **Fuentes / acción:** F1/F2 para contraste; crear. Modelo cualitativo, sin atribuir una cronología universal.

#### S06 · Iteración e incremento
- **Objetivo / tiempo:** OA1; 3 min.
- **Mensaje y conceptos:** iteración = revisar y adaptar; incremento = porción utilizable que agrega valor. Las prácticas pueden coexistir.
- **Visual / layout:** V2 con tres ciclos pequeños de construir–comprobar–aprender; `default`; hasta dos revelados opcionales, versión estática completa.
- **Oral / transición:** primero consultar movimientos, luego descargar extracto, después mejorar formato; cada incremento conserva garantías. No afirmar que Agile exige desplegar cada iteración → qué valores orientan esto.
- **Fuentes / acción:** F1; crear.

#### S07 · Agile: valores y límites
- **Objetivo / tiempo:** OA1; 2 min.
- **Mensaje y conceptos:** colaboración, software funcionando, respuesta al cambio; documentos, procesos y planes siguen teniendo valor. Agile no es Scrum ni velocidad a cualquier precio.
- **Visual / layout:** V1; `default`, una afirmación y contraste «adaptar con evidencia / improvisar sin acuerdos».
- **Oral / transición:** requisito de autorización permanece aunque cambie la forma de descargar; traducir valores a una decisión → integrar el trabajo de varias personas.
- **Fuentes / acción:** F1, citar 2001 solo al verificar; crear.

#### S08 · CI · Continuous Integration
- **Objetivo / tiempo:** OA1; 3 min.
- **Mensaje y conceptos:** CI · Continuous Integration = integrar cambios frecuentemente y comprobarlos. El rótulo visible es commit, PR/MR, CI, build y pipeline; el castellano es la glosa, no el nombre.
- **Visual / layout:** V3; `default`, cambio → revisión → integración/construcción → pruebas, con resultado de vuelta al equipo. No equiparar abrir PR con hacer CI.
- **Oral / transición:** dos personas cambian extractos; integrar descubre incompatibilidad pronto. Build puede empaquetar, no siempre compilar → versión lista o publicada.
- **Fuentes / acción:** F2/F7; mover/fusionar O18–O20, conservar precisión.

#### S09 · Continuous Delivery y Continuous Deployment
- **Objetivo / tiempo:** OA1; 3 min.
- **Mensaje y conceptos:** Continuous Delivery mantiene una versión lista para publicar; Continuous Deployment automatiza también el paso a producción bajo condiciones. No usar el calco ni CD solo. No prometer validación exhaustiva.
- **Visual / layout:** V2; `two-cols-header`, mismo flujo con decisión humana vs decisión automatizada al final.
- **Oral / transición:** app lista cada día, publicación aprobada cuando corresponde. Pregunta: «Si alguien autoriza el último paso, ¿dejó de ser Continuous Delivery?» Responder no → la operación también participa.
- **Fuentes / acción:** F2/F7; conservar núcleo O19, separar de CI.

#### S10 · DevOps: desarrollo y operación
- **Objetivo / tiempo:** OA1; 3 min.
- **Mensaje y conceptos:** colaboración desarrollo–operación, automatización y feedback; no sinónimo de CI/CD ni ausencia previa de seguridad.
- **Visual / layout:** V3; `default`, construir ↔ operar con dato de producción que modifica el próximo cambio.
- **Oral / transición:** operaciones observa falla al descargar extractos y devuelve contexto al equipo. Herramientas habilitan la relación, no la crean por sí solas → dónde queda seguridad.
- **Fuentes / acción:** F3; crear, prepara O50 sin presentar una escalera inevitable de madurez.

#### S11 · Revisión tardía y feedback cercano
- **Objetivo / tiempo:** OA1/OA2; 3 min.
- **Mensaje y conceptos:** más cambios frente a una única revisión tardía pueden generar cola y pérdida de contexto; problema de distribución del feedback, no inutilidad del pentest.
- **Visual / layout:** V2; `default`, varios cambios esperando una revisión vs comprobaciones próximas al cambio; sin números de capacidad inventados.
- **Oral / transición:** caso hipotético de extracto listo que vuelve por autorización. Pregunta qué información conservaba quien lo escribió → resumir causa antes de proponer solución.
- **Fuentes / acción:** F4; mover/transformar O06 y recuperar límite de clase 1 O09 sin repetir exposición.

#### S12 · Clasificación del flujo
- **Objetivo / tiempo:** OA1; 2 min.
- **Mensaje y conceptos:** Agile orienta adaptación; CI comprueba integración; entrega/despliegue describen disponibilidad/publicación; DevOps conecta equipos.
- **Visual / layout:** V6; `default`, cuatro frases cortas asociadas a un escenario y una pregunta de clasificación.
- **Oral / transición:** recuperación breve: «Integramos cambios con pruebas pero aprobamos publicar: ¿qué prácticas reconocés?» Respuesta visible: CI + Continuous Delivery, no Continuous Deployment → sumar seguridad temprano.
- **Fuentes / acción:** F1–F3; crear síntesis evaluable.

### C · Adelantar sin abandonar el resto — 22 minutos

#### S13 · Shift Left y Shift Left Security
- **Objetivo / tiempo:** OA2; 3 min.
- **Mensaje y conceptos:** Shift Left adelanta actividades y feedback respecto de prácticas tardías; Shift Left Security incorpora análisis/requisitos/verificaciones de seguridad desde etapas tempranas. Es relativo al flujo, no un producto.
- **Visual / layout:** V1 + eje simple; `default`, izquierda = antes en decisiones, no «todo a código».
- **Oral / transición:** analogía de revisar una regla antes de construir todas sus rutas; distinguir principio y aplicación → comparar distribución.
- **Fuentes / acción:** F4 respalda integración; definición didáctica sintetizada, no cita textual inventada; transformar O07/O08.

#### S14 · Comprobaciones tempranas y posteriores
- **Objetivo / tiempo:** OA2; 3 min.
- **Mensaje y conceptos:** controles tempranos más controles posteriores; no curvas de costo/intensidad ni promesa de reducir esfuerzo total.
- **Visual / layout:** V2; `default`, mismos cinco hitos con controles rotulados en ambos carriles y operación presente. Hasta dos clicks opcionales.
- **Oral / transición:** señalar dónde se discute autorización y dónde se observa en ejecución; el pentest sigue → primer control puede ser una conversación de requisitos.
- **Fuentes / acción:** F4/F5; fusionar O09/O10, reemplazar imágenes de curvas por diagrama original.

#### S15 · Requisito antes del código
- **Objetivo / tiempo:** OA2/OA3; 2 min.
- **Mensaje y conceptos:** escenario de abuso → requisito → criterio de aceptación; evitar saltar directamente a un escáner.
- **Visual / layout:** V4; `two-cols-header`, historia de descarga y regla de autorización, con evidencia prevista.
- **Oral / transición:** «Si no acordamos qué cuenta puede consultar, la herramienta no lo inventa». Reutilizar concepto de modelado de amenazas sin repetir STRIDE → qué observa cada control.
- **Fuentes / acción:** F4/F5; transformar O13/O71, sostener misma operación en toda la cadena.

#### S16 · SAST, DAST, SCA y revisión
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** revisión humana aporta intención; SAST examina código sin ejecutarlo; DAST prueba aplicación en ejecución; SCA analiza componentes. Cada uno tiene cobertura y límites.
- **Visual / layout:** V6; `default`, cuatro pares pregunta–evidencia; sin marcas comerciales.
- **Oral / transición:** una prueba dinámica diseñada para autorización no equivale a esperar que un escáner genérico entienda la regla de negocio → mostrar el resultado que realmente esperamos.
- **Fuentes / acción:** F5/F6; fusionar O25/O27/O34/O35; detalle IAST/fuzzing → A02.

#### S17 · Acceso permitido y denegado
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** cuenta propia devuelve extracto; cuenta sin permiso devuelve rechazo y no datos; revisar respuesta servidor, no solo pantalla. Dos casos no demuestran cobertura total.
- **Visual / layout:** V4; `two-cols-header`, dos solicitudes y dos resultados; evidencia escrita sin necesitar código.
- **Oral / transición:** autenticarse como cliente A y pedir cuenta B. Pregunta qué faltaría si solo probamos la propia → límites y producción.
- **Fuentes / acción:** F5/F6; transformar O33 y ejemplos O25/O35.

#### S18 · Señales de producción
- **Objetivo / tiempo:** OA2; 3 min.
- **Mensaje y conceptos:** pruebas de ejecución, pentest, configuración, monitoreo y respuesta siguen siendo necesarios según riesgo; nuevas vulnerabilidades pueden conocerse sin cambio propio.
- **Visual / layout:** V3; `default`, diseño/cambio → verificación → operación → aprendizaje con retorno explícito; no siete columnas para ocho nodos.
- **Oral / transición:** consultas anómalas y aviso nuevo de biblioteca. Rollback no deshace una exposición de datos; despliegue gradual no prueba seguridad → beneficios reales y condicionados.
- **Fuentes / acción:** F4/F7; conservar O11/O39 y fusionar O38/O40.

#### S19 · Feedback cercano y retrabajo
- **Objetivo / tiempo:** OA2; 3 min.
- **Mensaje y conceptos:** corregir cerca del cambio conserva contexto y puede evitar coordinación/repruebas tardías; no costo fijo 10×/100× ni garantía.
- **Visual / layout:** V1 con antes/después de tareas del mismo defecto; `default`, sin gráfico numérico ni candado.
- **Oral / transición:** corregir autorización antes de publicar versus investigar datos expuestos y coordinar respuesta. Separar beneficio esperado de resultado medido → comprobar comprensión.
- **Fuentes / acción:** F4; fusionar O14–O16 y matiz O17.

#### S20 · Temprano y continuo
- **Objetivo / tiempo:** OA2/OA3; 2 min.
- **Mensaje y conceptos:** definir requisito antes, probar cada cambio pertinente y mantener observación posterior son complementarios.
- **Visual / layout:** V6; `default`, tres decisiones y una afirmación para juzgar: «Pasaron los escaneos; podemos quitar el monitoreo». Respuesta visible: no, cobertura parcial y cambios de contexto.
- **Oral / transición:** 30–45 segundos para pensar y pausa breve; razonar la respuesta, no solo decir falsa → organizar controles sin convertirlos en catálogo.
- **Fuentes / acción:** F4/F6; fusionar O12/O13; crear recuperación con solución documentada.

### D · Del control a la decisión — 23 minutos

#### S21 · Evidencia por etapa
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** diseño/cambio: regla e intención; construcción: entradas; pruebas: comportamiento; despliegue/operación: entorno y actividad. No casilleros exclusivos.
- **Visual / layout:** V6; `default`, cuatro filas pregunta–evidencia, con nota de controles que cruzan etapas.
- **Oral / transición:** recorrer solo el cambio de extractos. No decir que DAST solo puede ir al final o SCA solo en build → software de terceros.
- **Fuentes / acción:** F4/F6/F7; fusionar O23/O24/O37, detalle → A02.

#### S22 · Inventario, SBOM y SCA
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** dependencias directas/transitivas; SBOM identifica componentes/versiones, no garantiza seguridad/procedencia/completitud. SCA aporta análisis, no es el inventario mismo.
- **Visual / layout:** V4; `two-cols-header`, árbol de tres nodos y ficha de biblioteca ficticia enlazada a servicio de extractos.
- **Oral / transición:** aviso afecta una versión; localizar uso y revisar condiciones antes de decidir. Evitar detalle de licencias/formatos en vivo → otra entrada sensible, las credenciales.
- **Fuentes / acción:** F8/F6; conservar O30/O31, fusionar O28/O29/O32; ampliar en A03.

#### S23 · Borrar un secreto no lo invalida
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** token de despliegue expuesto puede seguir funcionando y estar copiado; invalidar/revocar o rotar, revisar uso, prevenir con almacenamiento y permisos adecuados.
- **Visual / layout:** V4; `default`, línea exposición → copias posibles → invalidación y revisión; sin mostrar credenciales reales.
- **Oral / transición:** analogía de cambiar una cerradura cuando copiaron una llave; borrar la foto no cambia la llave. No considerar una excepción al gate sustituto de respuesta → proteger proceso de publicación.
- **Fuentes / acción:** F9; conservar O46 y fusionar O47/O48; tabla extensa → A03.

#### S24 · Seguridad del pipeline
- **Objetivo / tiempo:** OA3; 3 min.
- **Mensaje y conceptos:** repositorio, ejecutor/runner, artefacto y despliegue; permisos mínimos, revisión del flujo e integridad. Pruebas de aplicación no cubren manipulación del pipeline.
- **Visual / layout:** V3; `default`, cuatro nodos con un token que habilita publicación y límite de permisos rotulado.
- **Oral / transición:** mismo extracto, artefacto reemplazado después de las pruebas. No afirmar que procedencia demuestra código seguro → automatizar sin perder el retorno.
- **Fuentes / acción:** F7/F13; fusionar O21/O22/O27/O44.

#### S25 · De la señal a la corrección
- **Objetivo / tiempo:** OA3/OA4; 2 min.
- **Mensaje y conceptos:** comprobación repetible, feedback oportuno y corrección; automatización no significa despliegue irrestricto.
- **Visual / layout:** V3; `default`, cambio → prueba → señal → responsable → corrección, flecha de retorno; hasta dos pasos opcionales.
- **Oral / transición:** escaneo que detecta token y avisa al dueño del cambio. Contrastar ejecutar una tarea con cerrar el problema → cuándo pausar.
- **Fuentes / acción:** F4/F7; fusionar O20/O41/O42.

#### S26 · Gate y política
- **Objetivo / tiempo:** OA3/OA4; 3 min.
- **Mensaje y conceptos:** criterio previo para continuar, pausar o revisar; señal confiable, dueño, plazo y excepción autorizada. No bloquear todo ni aceptar todo.
- **Visual / layout:** V3; `default`, señal → criterio → dos salidas rotuladas; nota sobre excepción registrada, responsable y revisión.
- **Oral / transición:** secreto confirmado detiene; hallazgo incierto requiere análisis, no descarte automático. Eliminar un bloqueo no revoca una credencial → evaluar contexto.
- **Fuentes / acción:** F7/F10, política explícitamente de ejemplo; conservar O43 y fusionar O17.

#### S27 · La severidad orienta; el contexto prioriza
- **Objetivo / tiempo:** OA3/OA4; 3 min.
- **Mensaje y conceptos:** validar hallazgo, versión/uso, exposición, consecuencias y controles; corregir o escalar; excepción con autoridad y revisión. No afirmar menor riesgo solo por uso interno.
- **Visual / layout:** V3; `default`, aviso de biblioteca → evidencia del servicio → decisión documentada → verificación.
- **Oral / transición:** no alcanza una puntuación; explicitar qué información falta, sin inventar que el paquete es explotable → recuperar el proceso completo.
- **Fuentes / acción:** F10; conservar O45.

#### S28 · Detectado no significa resuelto
- **Objetivo / tiempo:** OA3/OA4; 3 min.
- **Mensaje y conceptos:** señal → validación → decisión → acción → evidencia de cierre. Distinguir hallar y remediar.
- **Visual / layout:** V6; `default`, ticket de token «archivo borrado» frente a condición de cierre «credencial invalidada y uso revisado».
- **Oral / transición:** breve elección razonada; solución visible. No pedir detalles operativos no enseñados → ¿por qué a veces nadie completa la cadena?
- **Fuentes / acción:** F9/F10; crear síntesis a partir de O43/O45/O46.

### E · Cultura que permite actuar — 21 minutos

#### S29 · Alerta sin responsable
- **Objetivo / tiempo:** OA4; 2 min.
- **Mensaje y conceptos:** tener herramientas no aporta respuesta automática; faltan contexto, capacidad y acuerdos.
- **Visual / layout:** V1; `default`, alerta central y respuestas breves «no es mío / no hay tiempo / falta contexto», sin culpabilizar roles.
- **Oral / transición:** dejar el escáner en verde no es el objetivo del equipo; un hallazgo puede circular sin dueño → definición DevSecOps.
- **Fuentes / acción:** F3/F4; transformar O49, fusionar dimensión organizacional O08.

#### S30 · DevSecOps: trabajo compartido
- **Objetivo / tiempo:** OA4; 3 min.
- **Mensaje y conceptos:** cultura y prácticas que integran seguridad con desarrollo y operación durante el ciclo. Personas, procesos, tecnología y gobernanza como lentes didácticos, no estándar universal.
- **Visual / layout:** V5; `default`, cambio de extractos en el centro y aportes conectados; definición visible.
- **Oral / transición:** Agile orienta adaptación; DevOps colaboración/flujo; Shift Left timing; DevSecOps integración de seguridad y responsabilidades. No son sinónimos ni productos → quién hace qué.
- **Fuentes / acción:** F3/F4; conservar O50 y fusionar O52/O54.

#### S31 · Responsabilidad compartida y autoridad
- **Objetivo / tiempo:** OA4; 3 min.
- **Mensaje y conceptos:** desarrollo corrige; seguridad asesora sobre riesgo; operaciones despliega/observa; responsable autorizado decide aceptación de riesgo según gobierno local. No diluir dueño.
- **Visual / layout:** V5; `default`, hallazgo central con cuatro aportes bidireccionales y dueño del seguimiento destacado por texto.
- **Oral / transición:** biblioteca de extractos afectada; no pasar un ticket linealmente hasta olvidarlo. La autoridad no se asigna automáticamente al champion → rol puente.
- **Fuentes / acción:** F3/F4/F10; transformar O51/O53/O55; no copiar imágenes ni imponer organigrama universal.

#### S32 · Security Champion y especialistas
- **Objetivo / tiempo:** OA4; 2 min.
- **Mensaje y conceptos:** referente del equipo con formación y tiempo; facilita consultas y feedback, no aprueba todo ni acepta riesgo por defecto.
- **Visual / layout:** V5; `default`, equipo ↔ referente ↔ especialistas, con límites explícitos.
- **Oral / transición:** quien desarrolla extractos tiene una duda de autorización; el champion ayuda a ubicarla y llevarla a especialistas → hacer que pedir ayuda y atender alertas sea viable.
- **Fuentes / acción:** F11; fusionar O56/O57, conservar diagrama puente.

#### S33 · Alerta accionable
- **Objetivo / tiempo:** OA4; 3 min.
- **Mensaje y conceptos:** formación, documentación, soporte y alertas accionables; componente, contexto, prioridad, dueño y remediación. No basta comprar herramienta.
- **Visual / layout:** V2; `two-cols-header`, «vulnerabilidad encontrada» vs alerta contextualizada del servicio de extractos.
- **Oral / transición:** público elige qué información permite actuar; ruido puede causar fatiga, sin porcentajes inventados → incentivos para no ocultar problemas.
- **Fuentes / acción:** F4/F11; mover O26 y transformar O58/O70.

#### S34 · Reportar a tiempo
- **Objetivo / tiempo:** OA4/OA5; 3 min.
- **Mensaje y conceptos:** objetivos compartidos, tiempo para corregir, liderazgo, aprendizaje sin culpabilización y rendición de cuentas. No «sin culpa» = sin responsables.
- **Visual / layout:** V5; `default`, conversación de release: presión por entregar frente a acuerdo de pausar/revisar y aprender.
- **Oral / transición:** alguien informa un token expuesto; premiar ocultar alertas contradice DevSecOps. Cerrar con una acción de mejora posterior al incidente → cómo observar resultados.
- **Fuentes / acción:** F3/F4; transformar O52/O59/O69/O70; crear escena cultural.

#### S35 · Cobertura y tiempo de respuesta
- **Objetivo / tiempo:** OA5; 3 min.
- **Mensaje y conceptos:** ejemplo de cobertura = cambios elegibles comprobados / cambios elegibles; tiempo desde validación hasta corrección verificada, segmentado por prioridad; revisar ruido y excepciones vencidas. Ninguna métrica equivale a riesgo total.
- **Visual / layout:** V6; `default`, dos indicadores con denominador/inicio-fin y una advertencia «más alertas puede ser más cobertura»; sin dashboard de datos inventados.
- **Oral / transición:** acordar período y alcance del piloto; no comparar equipos por conteos brutos → síntesis de las condiciones para actuar.
- **Fuentes / acción:** F3/F4 como contexto; métricas propuestas de la clase, no cita atribuida; ampliar O54/O55/O67/O69.

#### S36 · Herramienta, hábito y decisión
- **Objetivo / tiempo:** OA4/OA5; 2 min.
- **Mensaje y conceptos:** herramienta detecta; práctica organiza revisión; acuerdo asigna responsable/autoridad; evidencia permite aprender.
- **Visual / layout:** V6; `default`, clasificar tres enunciados del caso y respuesta visible en frase, no nuevas definiciones.
- **Oral / transición:** «Instalamos SCA, ¿ya tenemos DevSecOps?» No; explicar el eslabón ausente. Recuperar pilares como lentes → aplicar sin ayuda del nombre de una herramienta.
- **Fuentes / acción:** F3/F4; crear recuperación, fusionar O54.

### F · Aplicación y adopción realista — 14 minutos

#### S37 · Elegí una comprobación y quién actuará
- **Objetivo / tiempo:** OA3/OA4/OA5; 4 min.
- **Mensaje y conceptos:** caso integrado: nueva descarga, pruebas solo del caso permitido y sin responsable para hallazgos. Consigna: elegir control temprano, evidencia esperada, responsable de acción y control posterior.
- **Visual / layout:** V4; `two-cols-header`, escenario breve y cuatro campos de respuesta; no revelar solución por animación.
- **Oral / transición:** 1 minuto lectura, 2 decisión individual/pareja opcional, 1 para dos aportes. Sin herramientas externas ni código → comparar razonamientos.
- **Fuentes / acción:** F4/F5; crear ejercicio usando O35/O73.

#### S38 · Regla, evidencia y responsabilidad
- **Objetivo / tiempo:** OA3/OA4/OA5; 4 min.
- **Mensaje y conceptos:** acordar autorización al diseñar; revisión y prueba de cuenta ajena antes de integrar; rechazo sin datos; desarrollo corrige con apoyo de seguridad; operaciones observa; responsables acuerdan bloqueo/revisión. No única herramienta válida.
- **Visual / layout:** V4; `default`, ficha resuelta con cadena causal y un control posterior explícito.
- **Oral / transición:** justificar por qué un escaneo sin hallazgos no basta; distinguir respuestas alternativas razonables y la información necesaria para elegir. Leer aportes en voz alta → llevarlo a un piloto realizable.
- **Fuentes / acción:** F4/F5/F10; crear solución visible, no clave de examen ni dependencia de chat.

#### S39 · Piloto acotado
- **Objetivo / tiempo:** OA5; 3 min.
- **Mensaje y conceptos:** alcance servicio de extractos; riesgo elegido; responsable; comprobación; criterio de decisión; métrica y fecha de revisión acordada. Escalar por utilidad, no instalar todo.
- **Visual / layout:** V3; `default`, elegir → probar → medir → ajustar, con ficha mínima de ejemplo.
- **Oral / transición:** elegir autorización o secretos según evidencia, no regla universal «siempre SAST primero». Reservar capacidad y apoyo directivo → qué evidencia deja el piloto.
- **Fuentes / acción:** F4, propuesta didáctica; fusionar O63/O64/O66/O67/O69/O74. Detalles → A05.

#### S40 · Evidencia de la decisión
- **Objetivo / tiempo:** OA5; 3 min.
- **Mensaje y conceptos:** requisito/PR → versión/control ejecutado → resultado → decisión/responsable → corrección verificada. Trazabilidad no demuestra automáticamente cumplimiento o ausencia de vulnerabilidades.
- **Visual / layout:** V3; `default`, una ficha enlazada en cinco pasos; sin códigos ISO en el núcleo.
- **Oral / transición:** auditor o equipo necesita saber qué versión se comprobó; ejecución verde aislada no alcanza. No incluir secretos/datos de clientes en evidencia → reconstruir la tesis.
- **Fuentes / acción:** F4/F7; transformar O60 y vincular O63; ISO → A04.

### G · Síntesis, preguntas y cierre — 10 minutos con reserva

#### S41 · Cambio, comprobación y aprendizaje
- **Objetivo / tiempo:** OA1–OA5; 1 min de síntesis + hasta 8 min de preguntas/reserva.
- **Mensaje y conceptos:** Agile/adaptación → integración y entrega → feedback de seguridad temprano y posterior → responsabilidad compartida → mejora con evidencia.
- **Visual / layout:** V3; `default`, máximo cinco nodos y retorno; no repetir el mapa completo de riesgo de clase 1.
- **Oral / transición:** volver a la regla de consulta y pedir que la clase conecte una decisión con su evidencia. Agrupar dos o tres preguntas; repetirlas para la grabación → cómo estudiar y evaluación.
- **Fuentes / acción:** F1–F4; fusionar O71–O73/O75, eliminar cierres redundantes.

#### S42 · Decisión y comprobación
- **Objetivo / tiempo:** OA5 y logística; 1 min.
- **Mensaje y conceptos:** invitación a aplicar al próximo cambio; diapositivas + grabación + guía como estudio; evaluación Google Forms según indicaciones docentes y la instancia vinculada a 48 horas.
- **Visual / layout:** V1; `default`, tres líneas: qué repasar, dónde recibir instrucciones, próximo paso. Enlace/QR solo si el docente proporciona el destino correcto.
- **Oral / transición:** agradecer, aclarar que se evalúa comprensión del caso, no productos. Cierre definitivo; anexos disponibles sin recorrerlos.
- **Fuentes / acción:** información docente por confirmar; transformar O76 y fusionar O74. No copiar URLs, fechas ni QR de clase 1; no publicar Form.

### Anexos — 0 minutos programados

Son slides de estudio opcional y apoyo a preguntas. Si no caben sin letra pequeña, dejar tabla abreviada y enlazar al material complementario, no aumentar el recorrido sin aprobación.

#### A01 · Herramientas: cobertura y contexto
- **Objetivo:** ampliación OA3; no evaluable obligatoria. **Mensaje/conceptos:** SAST/DAST/SCA/imágenes, criterios de lenguaje, integración, alcance y soporte; nombres de productos solo ilustrativos y verificados.
- **Visual/layout:** tabla breve V6, `default`. **Oral/transición:** consultar ante preguntas de productos, no recomendar compra → alcance de controles.
- **Fuentes/acción/tiempo:** F6 + documentación oficial de cada producto conservado; mover O36; 0 min, opcional ~2 min fuera de cronograma.

#### A02 · Controles que cruzan etapas
- **Objetivo:** ampliación OA3. **Mensaje/conceptos:** mapa por pregunta/etapa; IAST, fuzzing, IaC, imágenes, staging, WAF/RASP con sus límites; glosario extendido en guion, no nueve siglas diminutas en pantalla.
- **Visual/layout:** V6, `two-cols-header`, mapa de cuatro grupos y referencia al glosario. **Oral/transición:** responder una categoría por vez → cadena de suministro.
- **Fuentes/acción/tiempo:** F6/F7; fusionar O24/O27/O29/O34/O37/O38/O40; 0 min, consulta ~3 min.

#### A03 · Inventario, procedencia y secretos
- **Objetivo:** ampliación OA3. **Mensaje/conceptos:** SBOM = qué incluye; procedencia = cómo se produjo; secretos = quién puede actuar. Formatos, registros privados y checklist extenso van al guion/fuentes.
- **Visual/layout:** tres fichas V6, `default`. **Oral/transición:** no confundir inventario con integridad o autorización → evidencia y normativa.
- **Fuentes/acción/tiempo:** F8/F9/F13; fusionar O32/O44/O48; 0 min, consulta ~3 min.

#### A04 · SGSI · ISO/IEC 27001
- **Objetivo:** ampliación OA5. **Mensaje/conceptos:** ISO/IEC 27001:2022, SGSI, selección de controles y declaración de aplicabilidad. Hasta tres ejemplos de controles verificados; lista completa al material complementario.
- **Visual/layout:** V3 breve, `default`, riesgo → control pertinente → evidencia. **Oral/transición:** no asumir aplicabilidad automática ni obligación argentina genérica → adopción gradual.
- **Fuentes/acción/tiempo:** F12; mover/fusionar O61/O62; 0 min, consulta ~2 min. Si no se verifica numeración autorizada, omitir códigos en lugar de inventarlos.

#### A05 · Lista para revisar un piloto
- **Objetivo:** ampliación OA5. **Mensaje/conceptos:** evaluar, planificar, pilotar, escalar; recursos, capacitación, criterios de éxito y excepciones; checklist extenso en guion.
- **Visual/layout:** V6, `default`, cuatro pasos con una pregunta cada uno. **Oral/transición:** seleccionar un paso según duda, no leer todo → lecturas.
- **Fuentes/acción/tiempo:** F4; fusionar O64–O70; 0 min, consulta ~3 min. Es propuesta adaptable, no receta certificada.

#### A06 · Lecturas para profundizar
- **Objetivo:** apoyo OA1–OA5. **Mensaje/conceptos:** índice público por bloque hacia fuentes primarias y materiales de estudio; separar esenciales y profundización.
- **Visual/layout:** `default`, lista breve legible con títulos y enlaces, sin catálogo de URLs largas. **Oral/transición:** orientar lectura; no introducir conceptos evaluables nuevos; fin del anexo.
- **Fuentes/acción/tiempo:** F1–F13 con enlaces comprobados; crear; 0 min, orientación opcional ~1 min.

## 6. Diseño de evaluación

Se propone conservar el formato de clase 1: **10 preguntas, opción múltiple, una respuesta correcta, 1 punto cada una, obligatorias**, ordenadas por progresión; distractores sobre errores conceptuales, sin trampas. El archivo docente incluirá justificación y referencia Sxx para cada opción correcta. No evaluar datos solo en notas o anexos. Las siguientes son especificaciones de ítems, no el cuestionario implementado.

| Ítem | Objetivo → sección → slides | Concepto evaluable | Pregunta sugerida / respuesta esperada | Confusión a usar en distractores |
|---|---|---|---|---|
| Q1 | OA1 → B → S05–S07/S12 | Adaptación e incrementos | Equipo incorpora feedback sobre extractos: ¿qué expresa enfoque ágil? **Entregar valor en incrementos y adaptar con evidencia, manteniendo acuerdos.** | Agile elimina planificar/documentar; equivale a Scrum; garantiza seguridad. |
| Q2 | OA1 → B → S08–S10/S12 | CI vs delivery/deployment y DevOps | Integra seguido, prueba y mantiene versión lista, pero aprueba producción manualmente: ¿qué practica? **CI y Continuous Delivery, no Continuous Deployment.** | Todo es Continuous Deployment; aprobación elimina CI; instalar pipeline prueba cultura. |
| Q3 | OA2 → B/C → S11/S13–S15/S19 | Shift Left y aplicación a seguridad | Discute autorización antes de programar y la verifica con cada cambio pertinente: ¿qué logra? **Acerca feedback y puede reducir retrabajo/exposición, sin garantizar ausencia de fallas.** | Adelantar pentest es toda la estrategia; elimina pruebas tardías; costo universal. |
| Q4 | OA2 → C → S18/S20 | Límite y operación | Pasaron controles tempranos: ¿se puede eliminar monitoreo? **No: cobertura limitada y condiciones/hallazgos nuevos requieren observación y respuesta.** | Escaneo prueba seguridad total; monitoreo corrige automáticamente código. |
| Q5 | OA3 → C/D → S15–S17/S21 | Control alineado al requisito | ¿Qué evidencia comprueba autorización de descarga? **Identidad sin permiso recibe rechazo del servidor sin datos, además del caso permitido.** | Pantalla oculta datos; solo SAST/SCA sin hallazgos; sesión válida basta. |
| Q6 | OA3 → D → S23/S26/S28 | Credencial expuesta | Token llegó al repositorio y luego se borró: ¿qué falta? **Invalidarlo/revocarlo o rotarlo y revisar uso; borrar no invalida copias.** | Borrar resuelve; esperar incidente; SBOM revoca credenciales. |
| Q7 | OA4 → D/E → S27/S30–S32 | Roles y autoridad | Alerta de biblioteca: ¿qué organización es DevSecOps? **Dueño de corrección, asesoramiento de seguridad, coordinación operativa y decisión autorizada/documentada si hay excepción.** | Champion acepta todo riesgo; seguridad arregla sola; responsabilidad sin dueño. |
| Q8 | OA4 → E → S29/S33–S34/S36 | Cultura observable | Se ocultan alertas para cumplir fecha: ¿qué cambio ayuda? **Acordar objetivos, capacidad de remediación y comunicación/aprendizaje sin culpabilización.** | Más escáneres sin responsables; castigar reportes; premiar conteo cero. |
| Q9 | OA5 → E/F → S35/S39 | Piloto y métricas | ¿Cómo iniciar mejora realista? **Elegir riesgo/servicio, responsable, criterio y métrica con alcance; revisar utilidad antes de escalar.** | Instalar todos los productos; éxito = cantidad bruta de alertas; no reservar tiempo. |
| Q10 | OA5 → F → S37–S40 | Evidencia y decisión | ¿Qué registro permite revisar la decisión? **Vincular versión, control, resultado, responsable, decisión y verificación de corrección.** | Pipeline verde certifica cumplimiento; conservar datos sensibles innecesarios; ticket sin contexto. |

**Cobertura:** dos ítems por objetivo. OA3 no exige memorizar las cuatro siglas; el estudiante debe reconocer el propósito. La corrección del piloto se evalúa seleccionando una propuesta razonada, no fingiendo que un múltiple-choice mide toda la capacidad de diseñarlo. El ejercicio S37–S38 aporta una evidencia formativa adicional de aplicación.

**Material de estudio:** slides contienen definiciones, respuestas modelo y límites imprescindibles; grabación desarrolla el razonamiento; `guion-clase-2.md` amplía ejemplos/glosario y enlaza fuentes. La clave del cuestionario es material docente y **no se incorpora al build, a notas públicas ni a un enlace desde A06**. No publicar un Google Form automáticamente.

**Por confirmar con el docente:** significado preciso de «48 horas», fechas/horas y zona horaria, canal de distribución, URL final y si hay comisiones diferentes. No afirmar apertura inmediata ni cierre a las 48 horas sin confirmación. El contenido puede aprobarse con logística pendiente; no se declara completo el cierre docente hasta resolverla.

## 7. Notas y guion: una sola explicación coherente

Notas nativas al final de cada slide, en un único comentario Markdown/HTML final. Patrón propuesto:

1. Primera línea breve: `Sxx · Idea central · Tiempo: n min` (metadato, no parlamento).
2. Dos a cuatro párrafos en primera persona, listos para leer: razonamiento más ejemplo del caso, qué señalar, aclaración del error común y transición.
3. Cuando corresponda, pregunta y respuesta esperada integradas al parlamento. No copiar las tarjetas ni poner tres preguntas simultáneas.
4. Referencia breve a fuente; URLs completas y desarrollo extendido en `fuentes-clase-2.md` y guion.

Objetivo de 900–1.800 caracteres cuando el contenido lo justifique, techo de referencia 2.558 tomado de clase 1; no rellenar notas para llegar a una longitud. Un tiempo de tres minutos puede incluir silencio/actividad, no exige tres minutos de texto leído.

`guion-clase-2.md` sigue el orden de slides con sección «Diapositiva N · Sxx · título», cronograma al inicio, puntos de corte, facilitación en voseo, ejemplos extendidos, respuestas y enlaces por ID. **Notas = parlamento canónico; guion = conducción y ampliación**, no segunda versión divergente. Mantener IDs al integrar y comprobar que tiempo, requisito y solución coincidan en ambos. Un cambio conceptual obliga a revisar slide, nota, guion y pregunta relacionada.

## 8. Implementación delegada — solo después de aprobar

### Capacidad confirmada y criterio de costo

Orca está operativo. La sesión coordinadora usa Astra; se probó un único worker Codex para inventario estático. Orca no reportó un modelo efectivo para ese worker, por lo que no se presupone costo/modelo. Pi y OpenCode están presentes como ejecutables; OpenCode Go, autenticación y catálogos no están verificados. No lanzar agentes por marca supuesta.

En fase 3, comprobar configuración/catálogo efectivo antes de asignar. Para redacción acotada, usar el modelo económico disponible que cumpla una muestra de calidad; Codex o equivalente para componentes e integración; Astra solo para decisiones globales, escalaciones y revisión. Si solo hay un ejecutor operativo, serializar. No afirmar ahorro sin telemetría.

### Contrato común de cada paquete

Cada despacho debe incluir el tramo exacto de este plan y:

- **Lecturas obligatorias:** plan completo (tesis, caso, invariantes, objetivos), fichas asignadas, filas Oxx de auditoría; `estilo_orador.md`; slides originales asignadas; clase 1 como referencia de voz/visual; fuentes verificadas pertinentes.
- **Autorización:** escribir solo su fragmento/reportes bajo `tmp/clase-2/<paquete>/`; ningún worker editorial toca `slides-clase-2.md`, estilos globales o la clase 1. Componentes solo con lista explícita de archivos exclusivos.
- **Formato esperado:** fragmento Markdown Slidev con Sxx en metadatos/notas, títulos y orden aprobados; contenido visible, comentario final con notas, recursos locales; propuesta de guion en fragmento separado y evidencia de fuentes.
- **Aceptación:** todos los mensajes y conceptos de fichas cubiertos, ninguna nueva obligación/estadística no validada, términos introducidos, mismo caso/requisito, tiempo conservado, una idea visual por slide, versión estática comprensible, fuentes por afirmación.
- **Pruebas requeridas:** análisis del fragmento con parser Slidev local; conteo y orden de IDs; nota no vacía por slide; recursos existentes o explícitamente propuestos; chequeo de alcance Git. El integrador ejecuta build/render del conjunto; un fragmento aislado no acredita composición final.
- **Restricciones:** sin dependencias, scripts, configuración común, commits, publicación ni cambios de arquitectura. Escalar ambigüedad; no inventar solución ni modificar otras unidades para hacer encajar su parte.
- **Reporte:** resumen, archivos modificados, IDs entregados, fuentes contrastadas/no contrastadas, pruebas con comando/resultado, riesgos y preguntas. No «todo probado» sin evidencia.

### Paquetes y ownership

| Paquete / responsable preferente | Alcance y objetivo | Archivos exclusivos autorizados | Aceptación particular |
|---|---|---|---|
| P0 · fuentes, ejecutor documental | Verificar F1–F13 y límites antes de afirmar. | `tmp/clase-2/fuentes/` | Registro afirmación→fuente→sección→estado; no transformar ausencia de acceso en verificación. |
| P1 · editorial económico | S01–S08, 8 slides: puente y evolución ágil. | `tmp/clase-2/p1/` | Agile no equivale a CI/seguridad; definir vocabulario y mantener caso. |
| P2 · editorial económico | S09–S16, 8 slides: CI/CD → Shift Left. | `tmp/clase-2/p2/` | Delivery distinto de deployment; seguridad no nace ni termina en pipeline. |
| P3 · editorial técnico | S17–S24, 8 slides: evidencia y controles. | `tmp/clase-2/p3/` | Prueba de autorización coherente; SBOM/secretos/pipeline con límites. |
| P4 · editorial organizacional | S25–S32, 8 slides: decisiones y roles. | `tmp/clase-2/p4/` | Gates, autoridad y champion sin ambigüedad ni organigrama impuesto. |
| P5 · editorial económico | S33–S42, 10 slides: cultura, aplicación y cierre. | `tmp/clase-2/p5/` | Actividad con solución, tiempos exactos, métricas definidas, logística no inventada. |
| P6 · documental | A01–A06, glosario y preguntas sugeridas. | `tmp/clase-2/p6/` | Anexos no introducen contenido obligatorio; Q1–Q10 alineadas a núcleo visible, clave separada. |
| PV · Codex o equivalente | Recursos originales V3/V5 solo si reutilización lo justifica. | Lista previa de nuevos `components/Clase2*.vue` y `public/clase-2/*` | Sin tocar StrideGrid/globales; SVG accesible, sin recorte ni licencias inciertas. |
| PI · **único integrador** | Integrar fragmentos revisados; ensamblar notas/guion/fuentes/cuestionario. | `slides-clase-2.md`, `guion-clase-2.md`, `fuentes-clase-2.md`, `cuestionario-clase-2.md` | Orden S/A y tiempos, conceptos únicos, referencias coherentes; no reemplazar mecánicamente sin comparar originales. |
| PT · técnico independiente | Validación explícita y regresión; no rediseñar. | `docs/clase-2-validacion.md`, directorio temporal único de evidencia | Comandos reales, capturas y estados; reportar limitaciones. |
| PR · Astra | Revisión integral contra plan aprobado. | Reporte de revisión; correcciones delegadas | Sin defectos críticos conocidos; cambios arquitectónicos vuelven al usuario. |

**Secuencia de coordinación:** aprobación → P0 y especificación de diagramas → P1–P6 (como máximo dos o tres simultáneos si el modelo/costo lo justifican), PV independiente con contrato estable → revisión del coordinador → PI solo → PT → PR → correcciones acotadas con un único editor → repetir pruebas afectadas. No se necesitan worktrees nuevos para fragmentos exclusivos. Nunca dos agentes editando el deck compartido, aun si prometen tocar secciones diferentes.

## 9. Validación objetiva prevista (no ejecutada aún)

Antes de implementar, guardar estado/hash de archivos protegidos y comprobar cambios de usuario. No sobrescribir `dist/` ni exportaciones previas. Comandos previstos, ajustados solo tras consultar `--help` local:

```sh
node node_modules/@slidev/cli/bin/slidev.mjs build --help
node node_modules/@slidev/cli/bin/slidev.mjs export --help
# Crear una carpeta única de evidencia; ejemplo de nombre, no reutilizar si existe.
# Sustituir <sesion> por un identificador nuevo en cada ejecución.
npm run build:clase-2 -- --out tmp/clase-2/validacion-<sesion>/build-2
npm run build:clase-1 -- --out tmp/clase-2/validacion-<sesion>/build-1
npm run export:clase-2 -- --output tmp/clase-2/validacion-<sesion>/clase-2.pdf
npm run dev:clase-2 -- --port <puerto-libre>
```

No ejecutar literalmente los marcadores `<...>`. Elegir puerto libre, gestionar solo procesos iniciados por la validación. Exportar con navegador existente si es compatible; si falta, registrar bloqueo y pedir autorización antes de instalar dependencias o navegadores. No usar `npm run build` para estas pruebas porque su script elimina `dist/`.

### Criterios de salida

| Área | Aceptación observable |
|---|---|
| Estructura | Parser reconoce 42 slides principales + 6 anexos, IDs únicos y orden aprobado; 48 notas finales no vacías; sin errores de frontmatter/componentes. |
| Recursos | Referencias locales resuelven; no nuevos enlaces de imágenes remotas; licencia/procedencia registrada si se usa recurso externo. |
| Build | Compila explícitamente `slides-clase-2.md` a salida temporal; guardar comando, código de salida y log. |
| Visual | Capturar/revisar todas las slides, no solo portada; contact sheet más vista completa de casos/diagramas/tablas. Revisar canvas nativo y pantalla 1920×1080 con mismo aspecto. |
| Desborde | Inspección DOM de límites como señal, más revisión humana de textos/SVG; cero texto imprescindible recortado o superpuesto. No basta `scrollHeight` para SVG o transformaciones. |
| Legibilidad | Comprobar tamaños/contraste definidos; referencias secundarias no compiten con conceptos; no depender del color. |
| Movimiento | Inicio y estado final de las tres animaciones candidatas; no ocultar conceptos, soluciones o flechas en PDF. Probar preferencia de movimiento reducido si se agregan animaciones. |
| Notas y estudio | Revisar vista presentador (portada, flujo, actividad, cierre) y conteo integral; definiciones y claves conceptuales evaluables están en contenido visible. |
| Exportación | Si entorno lo permite, PDF de todas las slides con fondo correcto, enlaces y estado final completo; comprobar también anexos. Si no, declarar pendiente, no aprobado por build. |
| Regresión | Hash/diff sin cambios en clase 1, estilos/configuración compartida y recursos existentes; build clase 1 temporal y comparación visual representativa portada/diagrama/tarjetas/examen. |
| Pedagogía | OA1–OA5 trazables a slides y 2 ítems cada uno; cada concepto evaluado aparece antes de actividad/evaluación; cero siglas esenciales sin función. |
| Tiempo | Suma mecánica 112+8=120; ensayo cronometrado por bloques, registrando duración real y ajustes, no afirmar que sumar prueba ritmo. |
| Rigor | Fuentes verificadas para afirmaciones pertinentes; cero estadísticas sin población/fecha; cero garantías absolutas o exigencias normativas inventadas. |
| Cultura | Escena con conflicto, responsable, autoridad, capacidad y aprendizaje; no reducir DevSecOps a escáneres. |
| Seguridad editorial | Sin claves del cuestionario, tokens o datos reales en notas exportadas/públicas; Google Forms no creado ni publicado. |

`docs/clase-2-validacion.md` se crea en fase 4 con evidencia real, no ahora como lista de resultados supuestos. Severidad alta: concepto falso, falta de tema obligatorio, referencia evaluable ausente, recorte de contenido esencial, build roto o regresión; bloquea cierre. Media: densidad, transición débil, tiempo excesivo; corregir o acordar mitigación. Baja: detalles cosméticos sin impacto, se registran.

## 10. Aprobación solicitada

Se solicita aprobar:

1. **42 slides principales + 6 anexos**, con fusiones y movimientos de la auditoría, conservando el material aprovechable.
2. **Caso de descarga de extractos** y requisito de autorización como hilo, en continuidad con la app de clase 1.
3. **Distribución 112 + 8 minutos**, cinco objetivos y evaluación propuesta de 10 ítems.
4. **Identidad visual intacta**, diagramas locales y notas/guion coherentes; sin cambios globales ni nuevas dependencias previstas.
5. Implementación posterior con **fragmentos separados y un único integrador**, seguida de validación técnica/visual y revisión integral.

Pendientes que no deben resolverse por suposición: sentido/calendario de las 48 horas, enlaces/comisiones del examen y eventual PowerPoint si el docente desea aportarlo. Si no aparece, se continúa con el material local y se conserva la limitación documentada.

**Punto de control cumplido:** el usuario aprobó explícitamente el plan antes de comenzar la implementación. Se mantiene la prohibición de cambios incompatibles en recursos compartidos y de ampliar la arquitectura sin nueva aprobación.

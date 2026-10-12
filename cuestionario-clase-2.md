# Cuestionario Clase 2 · Carga en Google Forms

> **Material docente con clave.** Usar este Markdown como especificación para cargar el formulario; no publicar ni compartir este archivo con estudiantes. Cada pregunta es de selección única, obligatoria y vale 1 punto. Cargar la respuesta correcta y la justificación como retroalimentación para respuestas incorrectas (y, si se desea, también para las correctas). No incluir la clave en el enunciado ni en las opciones.
>
> **Criterio de alineación:** 10 preguntas en orden Q1–Q10, dos por cada objetivo de aprendizaje (OA1–OA5). Cada ítem evalúa contenido visible en el recorrido principal del deck (S01–S43), no contenido exclusivo de las notas. La respuesta correcta y su justificación quedan indicadas debajo de cada pregunta.

---

## Q1 · Agile y adaptación

**OA1 · 1 punto · Referencia:** S05–S07, S11

El equipo recibe feedback sobre la nueva descarga de extractos y acuerda cambiar el alcance para entregar primero una versión útil y revisar luego qué mejorar. ¿Qué expresa mejor una forma de trabajo ágil?

- A. Adoptar Scrum, porque Agile y Scrum significan lo mismo.
- B. Garantizar que los cambios no introduzcan vulnerabilidades.
- C. Evitar toda planificación y documentación para poder cambiar sin acuerdos.
- D. Entregar valor en incrementos y adaptar el trabajo con evidencia, manteniendo acuerdos útiles.

**Correcta: D.** El enfoque ágil valora software funcional, colaboración y respuesta al cambio; no elimina planificación ni documentación, no equivale a Scrum ni garantiza seguridad. **Fuentes:** F1.

---

## Q2 · CI, Continuous Delivery y Continuous Deployment

**OA1 · 1 punto · Referencia:** S08–S10, S11

Cada cambio se integra con frecuencia y activa una compilación y pruebas automatizadas. El equipo mantiene la versión en estado **lista para publicar**, y una persona autoriza cada puesta en producción. ¿Qué describe mejor esta práctica?

- A. CI y Continuous Delivery; la aprobación manual significa que no hay Continuous Deployment.
- B. DevSecOps por sí solo: instalar un pipeline demuestra una cultura compartida.
- C. Continuous Deployment: toda versión se publica automáticamente apenas pasan las pruebas.
- D. Solo Agile: la aprobación manual impide que exista CI.

**Correcta: A.** CI integra y comprueba cambios frecuentemente; Continuous Delivery mantiene una versión lista para publicar. No es Continuous Deployment porque el paso final depende de una aprobación humana; una prueba verde no basta para sostener una cultura compartida. **Fuentes:** F2 y F3.

---

## Q3 · Feedback temprano

**OA2 · 1 punto · Referencia:** S05, S12–S14, S16, S19

Antes de programar la descarga, el equipo acuerda cómo autorizar el acceso y agrega comprobaciones a lo largo del cambio. ¿Qué beneficio razonable busca?

- A. Reemplazar cualquier prueba en ejecución por una revisión en diseño.
- B. Asegurar que una vulnerabilidad nunca llegue a producción.
- C. Acercar feedback para detectar decisiones débiles antes y poder corregirlas, sin eliminar comprobaciones posteriores.
- D. Reducir siempre el costo de corrección por un factor fijo, sin importar el proyecto.

**Correcta: C.** Adelantar feedback ofrece oportunidades de revisar antes; no reemplaza la operación, no garantiza ausencia de fallas ni implica un multiplicador de costo. **Fuentes:** F4 y F5.

---

## Q4 · Límite de controles tempranos

**OA2 · 1 punto · Referencia:** S12, S27

Pasaron controles de diseño, código y pipeline antes de publicar la función. ¿Eso permite dejar de observar la aplicación?

- A. Sí; los controles previos prueban que la versión no tiene vulnerabilidades.
- B. No; la cobertura es limitada y operación puede revelar cambios, exposición o señales que requieran respuesta.
- C. Sí; el monitoreo solo es útil después de que ocurre un incidente.
- D. Sí; la automatización corrige por sí misma todo hallazgo futuro.

**Correcta: B.** Los controles tienen alcance y momento específicos; la operación aporta señales y no sustituye los controles previos ni el monitoreo. **Fuentes:** F4, F6 y F7.

---

## Q5 · Evidencia de autorización

**OA3 · 1 punto · Referencia:** S13, S16, S24

¿Qué evidencia comprueba directamente que la descarga respeta la autorización por cuenta?

- A. El servidor permite la cuenta autorizada y rechaza sin datos la solicitud de una identidad sin permiso, incluso si cambia el identificador.
- B. La pantalla oculta el botón cuando el cliente no es titular.
- C. El análisis SAST y SCA no reporta alertas.
- D. La persona está autenticada, por lo tanto puede consultar cualquier cuenta.

**Correcta: A.** La regla se valida en el servidor por solicitud y por recurso; la interfaz, la autenticación y los escaneos sin alertas no demuestran esa autorización. La respuesta explícita incluye el caso permitido **y** el denegado (visible en S24 y S32). **Fuentes:** F5 y F6.

---

## Q6 · Token publicado

**OA3 · 1 punto · Referencia:** S17, S26, S28

Un token de despliegue apareció en un commit y luego se eliminó el archivo del repositorio. ¿Qué paso sigue?

- A. Cerrar el incidente: el historial visible ya no muestra el valor.
- B. Esperar a que se confirme uso malicioso antes de invalidarlo.
- C. Generar una SBOM para invalidar la credencial automáticamente.
- D. Revocar o rotar la credencial, revisar su uso y dejar evidencia de la remediación.

**Correcta: D.** Borrar una copia visible no invalida otras copias ni la credencial vigente; hay que invalidarla y evaluar el alcance. Una excepción al flujo no sustituye esa respuesta (S17 y S26). **Fuentes:** F9 y F10.

---

## Q7 · Responsabilidad y autoridad

**OA4 · 1 punto · Referencia:** S28–S31

Una alerta de dependencia afecta el servicio de extractos. ¿Qué respuesta refleja mejor trabajo compartido con responsabilidades claras?

- A. El Security Champion acepta automáticamente cualquier riesgo para que el equipo no se demore.
- B. Seguridad arregla en soledad el servicio y desarrollo deja de ser responsable.
- C. Desarrollo corrige la dependencia; seguridad asesora sobre el riesgo; operaciones aporta contexto de despliegue/observación; una autoridad definida decide y documenta una eventual excepción.
- D. La responsabilidad se comparte sin asignar persona dueña ni autoridad, así el equipo entero responde.

**Correcta: C.** Colaborar no elimina responsables ni autoridad; el champion facilita consulta desde su contexto y su mandato se delimita localmente. **Fuentes:** F3, F4, F10 y F11.

---

## Q8 · Cultura observable

**OA4 · 1 punto · Referencia:** S28, S32–S33, S35

Para cumplir la fecha, el equipo deja de reportar alertas que no puede atender. ¿Qué cambio favorece una respuesta sostenible?

- A. Medir éxito por llegar a cero alertas aunque no se investiguen.
- B. Acordar objetivos, capacidad para corregir, comunicación temprana y revisión con rendición de cuentas.
- C. Agregar más escáneres sin definir responsables ni tiempo de remediación.
- D. Castigar a quien comunica un problema para evitar demoras futuras.

**Correcta: B.** Una cultura que permite informar a tiempo necesita capacidad y acuerdos; aprender sin culpabilizar no significa quitar la responsabilidad. **Fuentes:** F30, F4 y F11.

---

## Q9 · Alcance y requisitos aplicables

**OA5 · 1 punto · Referencia:** S36–S39

El equipo quiere usar evidencia del pipeline para apoyar una evaluación de cumplimiento. ¿Qué debe definir primero?

- A. Que cualquier pipeline verde demuestra cumplimiento de todas las normas.
- B. Que toda app bancaria entra automáticamente completa en alcance PCI DSS.
- C. Que un informe SOC 2 y una certificación ISO/IEC 27001 son lo mismo.
- D. El servicio y los datos dentro del alcance, los requisitos aplicables, los controles y responsables y la evidencia necesaria.

**Correcta: D.** El aporte se interpreta según el alcance y los requisitos correspondientes. Los marcos tienen naturaleza y objetivos diferentes; los resultados CI son parte de la evidencia de evaluación. **Fuentes:** F12, F31 y F32; ejemplos de contribución propuestos para la clase.

---

## Q10 · Evidencia de una decisión

**OA5 · 1 punto · Referencia:** S36, S41

¿Qué registro permite reconstruir qué ocurrió y revisar una decisión de seguridad?

- A. La versión y el control ejecutado, el resultado, la persona responsable, la decisión y la verificación de la corrección.
- B. Un indicador verde del pipeline, que certifica cumplimiento y ausencia de vulnerabilidades.
- C. Una copia de datos de clientes junto a la captura de pantalla para probar la consulta.
- D. Un ticket que diga «resuelto» sin contexto ni evidencia posterior.

**Correcta: A.** La trazabilidad conecta lo acordado con lo ejecutado y revisado; no equivale por sí sola a conformidad ni requiere incluir datos sensibles. **Fuentes:** F4, F12, F31 y F32.

---

## Clave y alineación docente

| Q | Clave | OA | Concepto | Referencias Sxx |
|---|---|---|---|---:|
| Q1 | D | OA1 | adaptación e incrementos | S05–S07, S11 |
| Q2 | A | OA1 | CI vs Continuous Delivery / Deployment | S08–S10, S11 |
| Q3 | C | OA2 | feedback temprano | S05, S12–S14, S16, S19 |
| Q4 | B | OA2 | límite y operación | S12, S27 |
| Q5 | A | OA3 | prueba de autorización (caso permitido y denegado) | S13, S16, S24, S32 |
| Q6 | D | OA3 | credencial expuesta | S17, S26, S28 |
| Q7 | C | OA4 | roles y autoridad | S28–S31 |
| Q8 | B | OA4 | cultura y respuesta | S28, S32–S33, S35 |
| Q9 | D | OA5 | alcance y requisitos aplicables | S36–S39 |
| Q10 | A | OA5 | evidencia y decisión | S36, S41 |

- **Cobertura:** 2 ítems por objetivo (OA1 ×2, OA2 ×2, OA3 ×2, OA4 ×2, OA5 ×2). Todo concepto evaluado aparece en contenido visible del recorrido principal antes de la evaluación.
- **Distractores:** errores conceptuales enseñados (Agile = Scrum, prueba verde = seguro, autenticación = autorización, borrar = invalidar, el champion acepta todo, conteo bruto = riesgo, pipeline verde = cumplimiento).
- **Carga en Forms:** mantener el orden Q1–Q10, marcar cada ítem obligatorio y asignar 1 punto. Configurar cada pregunta como selección única y registrar la clave indicada; usar la justificación como retroalimentación. Verificar la puntuación total (10 puntos) y no mostrar la clave en el enunciado. La ventana, publicación y accesos por comisión se configuran por separado en el formulario.

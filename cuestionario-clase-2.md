# Cuestionario Clase 2 · Versión docente

> **MATERIAL DOCENTE — NO PUBLICAR.** Este archivo contiene la clave y las justificaciones. No se copia a `slides-clase-2.md` (notas), a `guion-clase-2.md` ni a ningún enlace. No se crea ni publica un Google Form automáticamente; la carga y la logística dependen de las indicaciones docentes.
>
> **Configuración propuesta:** 10 preguntas obligatorias, selección única, una respuesta correcta, 1 punto por pregunta. Orden Q1–Q10. Revisiones del cuestionario contra el texto visible del deck: cada ítem cubre contenido que aparece en el recorrido principal (S01–S43), nunca contenido exclusivo de notas. Dos ítems por objetivo de aprendizaje (OA1–OA5).

---

## Q1 · Agile y adaptación

**OA1 · 1 punto · Referencia:** S05–S07, S11

El equipo recibe feedback sobre la nueva descarga de extractos y acuerda cambiar el alcance para entregar primero una versión útil y revisar luego qué mejorar. ¿Qué expresa mejor una forma de trabajo ágil?

- A. Evitar toda planificación y documentación para poder cambiar sin acuerdos.
- B. Entregar valor en incrementos y adaptar el trabajo con evidencia, manteniendo acuerdos útiles.
- C. Adoptar Scrum, porque Agile y Scrum significan lo mismo.
- D. Garantizar que los cambios no introduzcan vulnerabilidades.

**Correcta: B.** El enfoque ágil valora software funcional, colaboración y respuesta al cambio; no elimina planificación ni documentación, no equivale a Scrum ni garantiza seguridad. **Fuentes:** F1.

---

## Q2 · CI, Continuous Delivery y Continuous Deployment

**OA1 · 1 punto · Referencia:** S08–S10, S11

Cada cambio se integra con frecuencia y activa una compilación y pruebas automatizadas. El equipo mantiene la versión en estado **lista para publicar**, y una persona autoriza cada puesta en producción. ¿Qué describe mejor esta práctica?

- A. Continuous Deployment: toda versión se publica automáticamente apenas pasan las pruebas.
- B. Solo Agile: la aprobación manual impide que exista CI.
- C. CI y Continuous Delivery; la aprobación manual significa que no hay Continuous Deployment.
- D. DevSecOps por sí solo: instalar un pipeline demuestra una cultura compartida.

**Correcta: C.** CI integra y comprueba cambios frecuentemente; Continuous Delivery mantiene una versión lista para publicar. No es Continuous Deployment porque el paso final depende de una aprobación humana; una prueba verde no basta para sostener una cultura compartida. **Fuentes:** F2 y F3.

---

## Q3 · Feedback temprano

**OA2 · 1 punto · Referencia:** S05, S12–S14, S16, S19

Antes de programar la descarga, el equipo acuerda cómo autorizar el acceso y agrega comprobaciones a lo largo del cambio. ¿Qué beneficio razonable busca?

- A. Acercar feedback para detectar decisiones débiles antes y poder corregirlas, sin eliminar comprobaciones posteriores.
- B. Reemplazar cualquier prueba en ejecución por una revisión en diseño.
- C. Asegurar que una vulnerabilidad nunca llegue a producción.
- D. Reducir siempre el costo de corrección por un factor fijo, sin importar el proyecto.

**Correcta: A.** Adelantar feedback ofrece oportunidades de revisar antes; no reemplaza la operación, no garantiza ausencia de fallas ni implica un multiplicador de costo. **Fuentes:** F4 y F5.

---

## Q4 · Límite de controles tempranos

**OA2 · 1 punto · Referencia:** S12, S27

Pasaron controles de diseño, código y pipeline antes de publicar la función. ¿Eso permite dejar de observar la aplicación?

- A. Sí; los controles previos prueban que la versión no tiene vulnerabilidades.
- B. Sí; el monitoreo solo es útil después de que ocurre un incidente.
- C. Sí; la automatización corrige por sí misma todo hallazgo futuro.
- D. No; la cobertura es limitada y operación puede revelar cambios, exposición o señales que requieran respuesta.

**Correcta: D.** Los controles tienen alcance y momento específicos; la operación aporta señales y no sustituye los controles previos ni el monitoreo. **Fuentes:** F4, F6 y F7.

---

## Q5 · Evidencia de autorización

**OA3 · 1 punto · Referencia:** S13, S16, S24

¿Qué evidencia comprueba directamente que la descarga respeta la autorización por cuenta?

- A. La pantalla oculta el botón cuando el cliente no es titular.
- B. El servidor permite la cuenta autorizada y rechaza sin datos la solicitud de una identidad sin permiso, incluso si cambia el identificador.
- C. El análisis SAST y SCA no reporta alertas.
- D. La persona está autenticada, por lo tanto puede consultar cualquier cuenta.

**Correcta: B.** La regla se valida en el servidor por solicitud y por recurso; la interfaz, la autenticación y los escaneos sin alertas no demuestran esa autorización. La respuesta explícita incluye el caso permitido **y** el denegado (visible en S24 y S32). **Fuentes:** F5 y F6.

---

## Q6 · Token publicado

**OA3 · 1 punto · Referencia:** S17, S26, S28

Un token de despliegue apareció en un commit y luego se eliminó el archivo del repositorio. ¿Qué paso sigue?

- A. Cerrar el incidente: el historial visible ya no muestra el valor.
- B. Esperar a que se confirme uso malicioso antes de invalidarlo.
- C. Revocar o rotar la credencial, revisar su uso y dejar evidencia de la remediación.
- D. Generar una SBOM para invalidar la credencial automáticamente.

**Correcta: C.** Borrar una copia visible no invalida otras copias ni la credencial vigente; hay que invalidarla y evaluar el alcance. Una excepción al flujo no sustituye esa respuesta (S17 y S26). **Fuentes:** F9 y F10.

---

## Q7 · Responsabilidad y autoridad

**OA4 · 1 punto · Referencia:** S28–S31

Una alerta de dependencia afecta el servicio de extractos. ¿Qué respuesta refleja mejor trabajo compartido con responsabilidades claras?

- A. Desarrollo corrige la dependencia; seguridad asesora sobre el riesgo; operaciones aporta contexto de despliegue/observación; una autoridad definida decide y documenta una eventual excepción.
- B. El Security Champion acepta automáticamente cualquier riesgo para que el equipo no se demore.
- C. Seguridad arregla en soledad el servicio y desarrollo deja de ser responsable.
- D. La responsabilidad se comparte sin asignar persona dueña ni autoridad, así el equipo entero responde.

**Correcta: A.** Colaborar no elimina responsables ni autoridad; el champion facilita consulta desde su contexto y su mandato se delimita localmente. **Fuentes:** F3, F4, F10 y F11.

---

## Q8 · Cultura observable

**OA4 · 1 punto · Referencia:** S28, S32–S33, S35

Para cumplir la fecha, el equipo deja de reportar alertas que no puede atender. ¿Qué cambio favorece una respuesta sostenible?

- A. Medir éxito por llegar a cero alertas aunque no se investiguen.
- B. Agregar más escáneres sin definir responsables ni tiempo de remediación.
- C. Castigar a quien comunica un problema para evitar demoras futuras.
- D. Acordar objetivos, capacidad para corregir, comunicación temprana y revisión con rendición de cuentas.

**Correcta: D.** Una cultura que permite informar a tiempo necesita capacidad y acuerdos; aprender sin culpabilizar no significa quitar la responsabilidad. **Fuentes:** F30, F4 y F11.

---

## Q9 · Alcance y requisitos aplicables

**OA5 · 1 punto · Referencia:** S36–S39

El equipo quiere usar evidencia del pipeline para apoyar una evaluación de cumplimiento. ¿Qué debe definir primero?

- A. Que cualquier pipeline verde demuestra cumplimiento de todas las normas.
- B. El servicio y los datos dentro del alcance, los requisitos aplicables, los controles y responsables y la evidencia necesaria.
- C. Que toda app bancaria entra automáticamente completa en alcance PCI DSS.
- D. Que un informe SOC 2 y una certificación ISO/IEC 27001 son lo mismo.

**Correcta: B.** El aporte se interpreta según el alcance y los requisitos correspondientes. Los marcos tienen naturaleza y objetivos diferentes; los resultados CI son parte de la evidencia de evaluación. **Fuentes:** F12, F31 y F32; ejemplos de contribución propuestos para la clase.

---

## Q10 · Evidencia de una decisión

**OA5 · 1 punto · Referencia:** S36, S41

¿Qué registro permite reconstruir qué ocurrió y revisar una decisión de seguridad?

- A. Un indicador verde del pipeline, que certifica cumplimiento y ausencia de vulnerabilidades.
- B. Una copia de datos de clientes junto a la captura de pantalla para probar la consulta.
- C. La versión y el control ejecutado, el resultado, la persona responsable, la decisión y la verificación de la corrección.
- D. Un ticket que diga «resuelto» sin contexto ni evidencia posterior.

**Correcta: C.** La trazabilidad conecta lo acordado con lo ejecutado y revisado; no equivale por sí sola a conformidad ni requiere incluir datos sensibles. **Fuentes:** F4, F12, F31 y F32.

---

## Clave y alineación docente

| Q | Clave | OA | Concepto | Referencias Sxx |
|---|---|---|---|---:|
| Q1 | B | OA1 | adaptación e incrementos | S05–S07, S11 |
| Q2 | C | OA1 | CI vs Continuous Delivery / Deployment | S08–S10, S11 |
| Q3 | A | OA2 | feedback temprano | S05, S12–S14, S16, S19 |
| Q4 | D | OA2 | límite y operación | S12, S27 |
| Q5 | B | OA3 | prueba de autorización (caso permitido y denegado) | S13, S16, S24, S32 |
| Q6 | C | OA3 | credencial expuesta | S17, S26, S28 |
| Q7 | A | OA4 | roles y autoridad | S28–S31 |
| Q8 | D | OA4 | cultura y respuesta | S28, S32–S33, S35 |
| Q9 | B | OA5 | alcance y requisitos aplicables | S36–S39 |
| Q10 | C | OA5 | evidencia y decisión | S36, S41 |

- **OA5 vigente:** explicar cómo controles, alcance y evidencia aportan al cumplimiento; reemplaza el objetivo inicial de proponer un piloto.
- **Cobertura:** 2 ítems por objetivo (OA1 ×2, OA2 ×2, OA3 ×2, OA4 ×2, OA5 ×2). Todo concepto evaluado aparece en contenido visible del recorrido principal antes de la evaluación.
- **Distractores:** errores conceptuales enseñados (Agile = Scrum, prueba verde = seguro, autenticación = autorización, borrar = invalidar, el champion acepta todo, conteo bruto = riesgo, pipeline verde = cumplimiento).
- **Logística:** ventana confirmada para Taller y CUC: viernes 16-10-2026, 08:00 GMT-3 → sábado 17-10-2026, 08:00 GMT-3. S43 contiene los espacios pendientes para URLs y QR. Si se carga en Google Forms, usar selección única, obligatoria y 1 punto; **no** publicar la clave ni las justificaciones. Los formularios requieren configuración propia: informar la ventana en las slides no configura apertura/cierre ni publica destinos.

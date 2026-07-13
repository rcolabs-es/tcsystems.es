# Estrategia de puja para arrancar una campaña de Búsqueda de Google Ads en cuenta NUEVA, sin histórico, presupuesto bajo (10 €/día), B2B lead gen

**Informe de investigación — junio 2026**
Pregunta: ¿Con qué estrategia de puja arrancar una campaña de Search nueva, en cuenta nueva, sin conversiones de histórico, con 10 €/día, en B2B de generación de leads (2-8 conversiones/mes esperadas)? ¿Tiene razón el cliente al decir "empecemos por Maximizar clics hasta tener datos y luego cambiamos"?

> **Nota metodológica.** Las afirmaciones se etiquetan como **[OFICIAL]** (documentación de Google Ads Help), **[EXPERTO]** (profesional/agencia reconocida) o **[CONSENSO]** (regla repetida en la comunidad sin fuente única). Las cifras oficiales se han verificado palabra por palabra contra las páginas de Google. Donde hay desacuerdo entre fuentes, se muestra explícitamente. No se ha inventado ninguna cifra. La consulta a hilos de Reddit r/PPC **no pudo recuperarse** en este entorno (Reddit bloqueado / no indexado en la búsqueda), por lo que la postura "de comunidad" se infiere de cómo la describen fuentes con nombre, no de citas textuales de r/PPC — se marca como **baja confianza** donde corresponde.

---

## TL;DR — Respuesta directa

**El cliente tiene razón a medias, y la propia Google le da la razón en la mitad correcta.** La documentación oficial de Google recomienda literalmente, para una campaña nueva, **empezar por Maximizar clics para construir datos** antes de pasar a puja por conversiones. Pero "Maximizar conversiones" **no necesita histórico para arrancar** (usa señales de subasta en tiempo real y datos a nivel de cuenta), así que el dilema "cómo va a optimizar sin datos" tiene una respuesta técnica: arranca con modelos a nivel de query y aprendizaje bayesiano, no desde cero absoluto.

**La verdadera traba en este caso NO es "sin histórico" sino el VOLUMEN: 2-8 conversiones/mes.** Eso queda por debajo de cualquier umbral citado (ni siquiera la estrategia "más indulgente", Maximizar conversiones, que se considera funcional a partir de ~15-20 conv/mes). A ese volumen, con 10 €/día, Smart Bidding será **volátil y poco fiable se elija lo que se elija** — y el estudio con datos de Optmyzr concluye que el bidding automático **no supera de forma fiable** al manual/clics cuando faltan conversiones.

**Recomendación práctica (consenso defendible):** arrancar con **Maximizar clics + límite de CPC máximo** (o, alternativamente, **CPC manual** que sigue plenamente vivo) durante ~3-4 semanas para sembrar datos y controlar el gasto; migrar a **Maximizar conversiones** cuando se acumulen **~15-30 conversiones**; **no usar tCPA ni tROAS al arranque** (necesitan ~30 y ~50 conv/mes). El plan por fases con umbrales está al final.

---

## 1. ¿Funciona "Maximizar conversiones" con CERO conversiones de histórico? ¿Cómo arranca el "cold start"?

**Sí, técnicamente puede activarse con cero histórico — pero Google recomienda no hacerlo en una campaña nueva.** Hay que separar dos cosas: *puede* encenderse, y *conviene* encenderse.

### Cómo arranca el algoritmo (no parte de la nada)

- **[OFICIAL]** Con poco o ningún dato de conversión, Smart Bidding usa **datos a nivel de query más allá de tu estrategia de puja** para construir modelos iniciales de tasa de conversión: *"When you have little to no conversion data available, Smart Bidding can still use query-level data beyond your bid strategy to build more accurate initial conversion rate models."* — https://support.google.com/google-ads/answer/10970825?hl=en
- **[OFICIAL]** Luego aplica **aprendizaje bayesiano** para refinar esos modelos según se acumulan datos a niveles más granulares (query → copy de anuncio → landing): *"It then uses Bayesian learning to continuously improve these models as it accrues conversion rate data at more granular levels."* — misma fuente.
- **[OFICIAL]** "Pide prestado" datos: del **mismo keyword entre tipos de concordancia** y del **rendimiento agregado a nivel de grupo/campaña**: *"'borrow' data from the same keyword across match types or from higher-level ad group and campaign performance."* — https://support.google.com/google-ads/answer/10964872?hl=en
- **[OFICIAL]** Una campaña nueva sin datos propios se beneficia de los datos del **resto de la cuenta**: *"Smart Bidding can optimize based on data from all of your campaigns, so even new campaigns without data of their own may notice increased performance."* — https://support.google.com/google-ads/answer/7065882?hl=en
- **[OFICIAL]** Con *cross-account conversion tracking* (cuenta MCC), puede usar datos a nivel de query de **toda la cuenta administrador**. — https://support.google.com/google-ads/answer/10964872?hl=en

> **Matiz importante (desmontando un mito).** La idea de que Google "siembra" tu cuenta nueva con datos de conversión de **otros anunciantes / cuentas similares** **NO está respaldada por la documentación oficial.** Google documenta préstamo de datos *dentro de tu propia cuenta* y, con cross-account tracking, *dentro de tu propia cuenta administrador*. Los *modelos* de ML subyacentes sí se entrenan "a gran escala", pero eso es distinto de usar las conversiones de tus competidores. **No afirmes que usa datos de "cuentas similares" — no hay fuente oficial.**

### Mínimo recomendado de conversiones y qué pasa por debajo

- **[OFICIAL — la cifra más específica para Maximizar conversiones]** *"It's highly recommended to have a baseline of at least 15 conversions in the last 30 days before you apply this strategy."* (verificado palabra por palabra) — https://support.google.com/google-ads/answer/7381968?hl=en
- **[OFICIAL — ventana de evaluación, no umbral de activación]** Google recomienda medir el rendimiento sobre periodos con **al menos 30 conversiones** (50 para Target ROAS): *"Google Ads recommends measuring performance over longer time periods that have at least 30 conversions, such as a month or longer (50 conversions for Target ROAS)."* — https://support.google.com/google-ads/answer/7065882?hl=en
- **[OFICIAL — periodo de aprendizaje]** Calibrar a un nuevo objetivo puede tardar **hasta ~50 eventos de conversión o 3 ciclos de conversión** (es por conteo de conversiones / ciclos, **no** por días fijos): *"It can take up to around 50 conversion events or 3 conversion cycles for the bid strategy to calibrate to the new objective."* — https://support.google.com/google-ads/answer/13020501?hl=en
- **[CONSENSO]** La regla popular "**30 conversiones en 30 días**" es consenso de la comunidad, **no** el umbral de activación oficial de Maximizar conversiones (el número oficial es 15/30). Aparece en blogs de práctica (p. ej. https://learn.jyll.ca/blog/when-and-how-should-you-change-bid-strategies-in-google-ads ). Trátalo como regla práctica, no como cifra de Google.

**Conclusión sección 1:** El "cold start" es real y funciona — no parte de cero absoluto. Pero la cifra oficial (15 conv/30 días) ya señala que Google espera *algo* de volumen, y a 2-8 conv/mes ese mínimo no se alcanza (ver sección 5).

---

## 2. Maximizar clics como estrategia de arranque ("seeding"): ¿buena práctica?

**Es práctica recomendada — y la respalda la propia Google — pero hay un experto de peso que la considera innecesaria.** Aquí está el desacuerdo real.

### A favor del "seeding" con Maximizar clics

- **[OFICIAL — clave]** La página oficial de Maximizar conversiones dice literalmente: *"If you have a brand new campaign, consider using Maximize Clicks to build traffic and conversion data first."* y *"Maximize conversions works best with historical data."* (ambas verificadas palabra por palabra) — https://support.google.com/google-ads/answer/7381968?hl=en
- **[OFICIAL]** En "elige estrategia según objetivos", Maximizar clics es la opción listada cuando *"You're new to Google Ads or don't know exactly how much to bid."* — https://support.google.com/google-ads/answer/2472725
- **[EXPERTO/ESTUDIO — Optmyzr, Navah Hopkins]** Maximizar clics está **infrautilizada** y rinde bien, especialmente en lead gen: en cuentas de bajo gasto tuvo una **mediana de tasa de conversión del 10,68 %** (vs 7,01 % en cuentas de alto gasto). "Manual and Auto bidding are favorable in early stage accounts" porque no dependen de datos de conversión. — https://www.optmyzr.com/blog/impact-of-ppc-bidding-strategies/ (24 sep 2024)
- **[EXPERTO — Marin]** *"Your PPC doctor recommends starting new campaigns on a maximize clicks bid strategy and then move to maximize conversions once your campaign has generated some conversion data."* Correr Max clics ~3-4 semanas; umbral citado "al menos 30 conversiones" antes de cambiar. — https://www.marinsoftware.com/blog/... (8 jul 2024)
- **[EXPERTO — Defined Digital]** Para cuentas nuevas por debajo de 30 conv/mes: *"Manual CPC with bid adjustments, or Maximize Clicks with a max CPC cap"* para proteger presupuesto mientras se recogen datos. — https://www.definedigitalacademy.com/blog/google-ads-bidding-strategies-in-2025-how-to-avoid-costly-mistakes-and-maximize-results

### En contra (la postura disidente)

- **[EXPERTO — Jyll Saskin Gales, ex-Google, coach reconocida]** Recomienda arrancar **directamente en Maximizar conversiones aunque no haya histórico**: *"Even if you're starting from scratch with no account or conversion history, I still recommend using the Maximize Conversions bidding strategy."* Y advierte: *"Maximize Clicks might seem tempting as a way to gather data, but it often leads to low-quality clicks that don't translate into conversions."* — https://learn.jyll.ca/blog/should-you-start-a-google-ads-campaign-on-maximize-conversions-or-maximize-clicks (8 may 2024)

### ¿Trae tráfico de baja calidad?

- **[EXPERTO/CONSENSO]** El riesgo declarado es real cualitativamente: Maximizar clics optimiza por **volumen de clics, no por calidad**, lo que "crea riesgo de atraer tráfico no relevante o de baja calidad". — Jyll Saskin Gales (arriba) y resúmenes de comunidad.
- **Sin cifra.** Ninguna fuente aportó un porcentaje cuantificado de "tráfico basura". Es una advertencia cualitativa, no un dato. **Mitigación estándar:** poner un **límite de CPC máximo** (la propia Google lo sugiere en su página de Maximizar clics — https://support.google.com/google-ads/answer/6268626?hl=en ) y keywords exact/phrase ajustadas, como ya hace este cliente.

### Umbral y duración para migrar

- **[CONSENSO fuerte]** El número que más se repite entre fuentes es **al menos 30 conversiones** antes de pasar a Maximizar conversiones (p. ej. https://30chars.com/blog/switching-maximize-clicks-to-maximize-conversions/ , actualizado 10 ene 2025: *"Aim for at least 30 conversions as a solid baseline"*). El mínimo oficial para *activar* Maximizar conversiones es **15/30 días** (sección 1).
- **[EXPERTO]** Duración típica: ~**3-4 semanas** en Maximizar clics, luego dar ~**1 mes** tras el cambio para que el aprendizaje se estabilice. Evitar cambios de presupuesto >20 % para no reiniciar la fase de aprendizaje. — InvisiblePPC y 30chars.com.

> **Nota honesta.** Google **no** documenta Maximizar clics como "paso de seeding" en su página de Maximizar clics ni advierte de tráfico basura ahí — la playbook "clics primero, luego conversiones" es **lore experto/comunidad**, aunque la *recomendación de empezar por clics en campaña nueva* sí aparece, literal, en la página de Maximizar conversiones (cita oficial arriba). Es decir: Google recomienda la secuencia, pero el detalle operativo lo ponen los expertos.

---

## 3. ¿CPC manual / eCPC siguen vivos en 2025-2026?

**eCPC (CPC mejorado): MUERTO. CPC manual: VIVO, y de hecho más accesible en 2026.** Esta es de las partes más nítidas del informe.

### Enhanced CPC (eCPC) — deprecado

- **[OFICIAL — verificado palabra por palabra]** *"Effective the week of March 31, 2025 Enhanced CPC (ECPC) is no longer available for Search and Display campaigns."* Y: *"Campaigns that were not proactively migrated to another bid strategy prior to deprecation are now effectively using Manual CPC."* (eCPC siguió visible en la UI hasta mayo de 2025 durante la transición). — https://support.google.com/google-ads/answer/2464964?hl=en
- **[EXPERTO/PRENSA — anuncio oficial reportado]** Proceso en dos fases: **octubre 2024** se quitó la opción de eCPC para campañas nuevas de Search/Display; **marzo 2025** se migraron las restantes a CPC manual. — https://searchengineland.com/google-ads-deprecate-enhanced-cpc-search-display-446350 (6 sep 2024). Corroborado por Search Engine Journal y WordStream (https://www.wordstream.com/blog/ehanced-cpc-going-away ).
- *Discrepancia menor de fechas:* algunas fuentes citan "15 de marzo 2025" para las campañas existentes; la página oficial ancla la no-disponibilidad a "la semana del 31 de marzo de 2025" — usar esta última como autoritativa.

### CPC manual — sigue disponible (y revalorizado)

- **[OFICIAL]** CPC manual sigue siendo una estrategia disponible: *"A bidding method that lets you set your own maximum cost-per-click (CPC) for your ads."* Google empuja hacia automatización pero no lo ha retirado. — https://support.google.com/google-ads/answer/2390250?hl=en
- **[EXPERTO — enero 2026]** Cambio de UI: a partir de **enero de 2026**, CPC manual volvió al **paso principal** de creación de campaña (antes estaba escondido tras "Seleccionar estrategia directamente (no recomendado)"). — https://almcorp.com/blog/google-ads-manual-cpc-update-2026/ (17 ene 2026), corroborado en LinkedIn. *(Opinión experta/trade, no verificada contra release notes oficiales.)*
- **[EXPERTO]** CPC manual se recomienda para escenarios de **pocos datos, nicho, presupuesto muy controlado** y verticales reguladas con tope estricto de coste por lead. La progresión recomendada: CPC manual para controlar costes → recoger ~10-30 conversiones → pasar a Maximizar conversiones → más tarde tCPA/tROAS. — almcorp.com; https://lineardesign.com/blog/manual-cpc-bid-strategy/ ; https://www.storegrowers.com/google-ads-manual-cpc/
- **[EXPERTO — cifra de autor, NO oficial]** Con menos de ~2.000 $/mes de gasto, la fase de aprendizaje de Smart Bidding "puede quemar 30-50 % del presupuesto antes de estabilizarse"; CPC manual limita ese riesgo. *(Estimación del autor, no publicada por Google — tratar con cautela.)* — almcorp.com

**Conclusión sección 3:** Para este caso (bajo presupuesto, máximo control, sin datos), **CPC manual es una opción 100 % legítima y vigente en 2026**, alternativa equivalente a "Maximizar clics con tope de CPC". eCPC ya no es una opción.

---

## 4. Consenso de expertos para "cuenta nueva, sin conversiones, presupuesto bajo, lead gen"

**No hay consenso unánime sobre la estrategia de arranque — hay dos campos enfrentados — pero sí hay un consenso sólido sobre lo que NO hacer.** Lo interesante: **la propia Google se posiciona en el campo "clics primero".**

### Campo A — "Directo a Maximizar conversiones, aunque haya cero datos"
- **Jyll Saskin Gales (ex-Google):** las señales de subasta en tiempo real funcionan desde el día uno; Maximizar clics invita a clics de baja calidad. — https://learn.jyll.ca/blog/should-you-start-a-google-ads-campaign-on-maximize-conversions-or-maximize-clicks
- **Optmyzr:** Maximizar conversiones es la estrategia Smart Bidding **sin umbral mínimo declarado** (a diferencia de tCPA "≥30/mes" y tROAS "≥50/mes"), apta para campañas nuevas que quieren volumen rápido (requiere "presupuesto flexible; tolerancia a la fase de aprendizaje"). — https://www.optmyzr.com/blog/smart-bidding-strategies/ (1 sep 2025)

### Campo B — "Maximizar clics / CPC manual primero, luego graduar"
- **Google Ads Help (oficial):** *"consider using Maximize Clicks to build traffic and conversion data first"* (cita oficial, sección 2).
- **Marin:** empezar en Max clics, pasar a Max conversiones tras ~30 conversiones. — marinsoftware.com
- **Defined Digital:** por debajo de 30 conv/mes, CPC manual o Max clics con tope de CPC. — definedigitalacademy.com

### Campo C — Matiz B2B (el más relevante para este caso)
- **[EXPERTO — agencia B2B]** Para B2B lead gen, **nunca correr Maximizar conversiones sin tope**: sin Target CPA puede quemar el presupuesto mensual en días persiguiendo form fills. Con solo ~5-6 conversiones por campaña, Smart Bidding rinde mal independientemente; se cita ~2.000-5.000 $/mes como suelo para datos significativos. — https://hallam.agency/blog/google-ads-for-b2b-lead-generation/ *(Cifras "cuatro días" y presupuesto vía resumen de búsqueda; verificar en el artículo antes de citar textual.)*

### Donde SÍ hay consenso (ambos campos coinciden)
1. **Verificar tracking de conversión limpio** antes de cualquier puja por conversiones. *(Aquí el cliente ya tiene la conversión de formulario configurada — ✓.)*
2. **NO lanzar en Target CPA / Target ROAS sin datos** — necesitan ~30 y ~50 conv/mes respectivamente.
3. **Respetar ~4 semanas de aprendizaje** sin cambios bruscos.
4. **[ESTUDIO — Optmyzr]** El cuello de botella es el **volumen de conversiones, no el presupuesto**: *"increasing your budget does not mean you'll achieve better efficiency, but increasing your conversion volume is correlated to better results for every single bid strategy studied."* — https://www.optmyzr.com/blog/impact-of-ppc-bidding-strategies/

> **Lectura del desacuerdo:** El campo A (directo a conversiones) asume que llegarán suficientes conversiones para que el algoritmo aprenda. En este caso concreto (2-8 conv/mes, 10 €/día) esa premisa **no se cumple**, lo que inclina la balanza hacia el campo B/C para el arranque. La disidencia de Jyll es válida en cuentas con volumen razonable; es más arriesgada a 10 €/día.

---

## 5. Matiz del presupuesto bajo (10 €/día) y volumen bajo (2-8 conv/mes)

**Este es el punto decisivo, y todas las fuentes convergen: a 2-8 conv/mes el campaign queda por debajo de TODOS los umbrales, y Smart Bidding será volátil se elija lo que se elija.**

- **[EXPERTO]** Maximizar conversiones es funcional desde "**15-20 conversiones/mes**" y es "la opción Smart Bidding **más indulgente**", pero "mejora significativamente por encima de 30/mes". — https://www.keywordme.io/blog/how-many-conversions-do-google-ads-need-to-optimize
- **[EXPERTO]** Por debajo de ~20 conv/mes, "el comportamiento de puja parece **casi aleatorio** — agresivo un día, conservador al siguiente." — misma fuente.
- **[ESTUDIO — Optmyzr, la cifra mejor respaldada]** *"The threshold for any bidding strategy to be predictably successful is 50+ conversions"* (en 30 días). Por debajo, el rendimiento es volátil **para cualquier estrategia**. — https://www.optmyzr.com/blog/impact-of-ppc-bidding-strategies/
- **[ESTUDIO — Optmyzr, clave para resolver el dilema]** El bidding automático **NO supera de forma fiable** al manual/clics cuando faltan conversiones: *"Manual bidding also benefits from high conversion volumes, so if your only reason for choosing manual bidding is your lack of conversion data, we recommend finding ways to increase conversion volume."* — misma fuente.
- **[OFICIAL + EXPERTO]** Smart Bidding rinde mejor con **presupuesto no limitado por gasto**; un Target CPA en campaña con presupuesto limitado puede **infra-gastar o dejar de entregar** en lugar de superar el objetivo: *"Google would rather not spend your budget than overshoot your target."* — https://support.google.com/google-ads/answer/7065882?hl=en y https://www.storegrowers.com/target-cpa/ . **Implicación directa a 10 €/día: un tCPA puede estrangular la entrega por completo.**

### Regla presupuesto-vs-tCPA (genuinamente disputada)
- **Conservadora:** presupuesto diario ≥ **2x** el tCPA objetivo (suelo de Google), idealmente 3x-5x. — https://www.storegrowers.com/target-cpa/
- **Agresiva:** **10x-15x** el tCPA. Ej.: un tCPA de 45 $ requeriría ~450 $/día. — https://www.taboola.com/marketing-hub/target-cpa-best-practices/
- **A 10 €/día**, con un coste por lead B2B típico (decenas de euros), **incluso el suelo de 2x es vinculante** → otra razón para **no** poner tCPA al arranque.

### El "atasco" en learning: ¿qué implica si nunca llega a ~15-30 conv/mes?
- **[EXPERTO]** Cadena de fallo: bajo volumen → aprendizaje lento → puja inestable → rendimiento inconsistente; en cuentas pequeñas "Smart Bidding a menudo no puede rendir bien por cuenta individual." — https://www.optmyzr.com/blog/smart-bidding-low-volume-markets/
- **[EXPERTO]** Campañas con <15 conv/semana pueden quedar en aprendizaje 3+ semanas y algunas "nunca salen del todo". — https://www.groas.com/post/google-ads-smart-bidding-learning-period-2026-how-long-resets-shorten *(observación práctica, no oficial)*

### El workaround para volumen diminuto: **puja de cartera (portfolio) a nivel MCC**
- **[EXPERTO — Optmyzr]** Si las campañas individuales no juntan conversiones suficientes, **agrupar varias campañas en una estrategia de cartera** (portfolio bidding) a nivel de cuenta administrador **pone en común las conversiones** y permite aplicar Smart Bidding "mucho antes de lo que podrías en cada mercado por separado." — https://www.optmyzr.com/blog/smart-bidding-low-volume-markets/

**Conclusión sección 5:** A 2-8 conv/mes, Maximizar conversiones **no se "atasca" en un error**, pero opera por debajo de su zona fiable y será errático. **No es claramente mejor que Maximizar clics a ese volumen** (estudio Optmyzr). El objetivo operativo nº 1 no es elegir estrategia, sino **subir el volumen de conversiones** (más keywords, micro-conversiones, consolidar campañas).

---

## 6. Recomendación práctica final — plan por fases con umbrales numéricos

**Contexto del cliente:** cuenta nueva, cero conversiones, 10 €/día (~300 €/mes), B2B lead gen, keywords exact/phrase, conversión de formulario ya configurada, 2-8 conv/mes esperadas.

### Fase 0 — Preparación (antes de gastar)
- Confirmar que la **conversión de formulario** dispara bien (test de envío real). *(El cliente ya la tiene — ✓; esto es el requisito que todos los campos comparten.)*
- Si existen, marcar micro-conversiones secundarias (clic a teléfono, descarga, inicio de formulario) como conversiones **secundarias** (no primarias) para alimentar señal sin contaminar el objetivo. Esto ayuda directamente al problema de volumen de la sección 5.
- Considerar **agrupar todas las campañas/temáticas en pocas campañas** (idealmente 1-2) para concentrar conversiones en lugar de dispersarlas.

### Fase 1 — Arranque / SEEDING (semanas 0-4): **Maximizar clics con LÍMITE de CPC máximo**
- **Por qué:** lo recomienda la propia Google para campaña nueva (*"consider using Maximize Clicks to build traffic and conversion data first"*); controla el gasto a 10 €/día; no depende de datos que no existen; el estudio de Optmyzr muestra buenas tasas de conversión de Max clics en lead gen / cuentas de bajo gasto.
- **Cómo:** poner un **CPC máximo** (mitiga el riesgo de tráfico de baja calidad — la objeción de Jyll). Mantener keywords exact/phrase. **Alternativa equivalente y válida en 2026: CPC manual** con pujas conservadoras si se prefiere control total (eCPC ya no existe).
- **Qué vigilar:** términos de búsqueda (search terms) cada pocos días, añadir negativos agresivamente; CTR y, sobre todo, **conversiones acumuladas**.
- **No tocar:** evitar cambios de presupuesto >20 % para no resetear nada al migrar después.

### Fase 2 — Transición a conversiones (cuando se cumpla el umbral): **Maximizar conversiones SIN tCPA**
- **Umbral de migración (consenso):** al alcanzar **~15 conversiones en los últimos 30 días** (mínimo oficial de Google), preferiblemente esperar a **~30** si el ritmo lo permite. Si tras 4-6 semanas no hay ni 15, ver Fase 2-bis.
- **Por qué SIN Target CPA:** a este volumen tCPA infra-gasta o estrangula la entrega con 10 €/día (sección 5). Maximizar conversiones "a secas" es la opción Smart Bidding sin umbral mínimo declarado y la más indulgente.
- **Dar ~4 semanas** de aprendizaje sin cambios bruscos tras el switch.

### Fase 2-bis — Si NUNCA se llega a ~15 conv/mes (escenario realista a 2-8/mes)
- **Quedarse en Maximizar clics / CPC manual** es defendible: el estudio Optmyzr dice que el automático no supera fiablemente al manual sin volumen.
- **Atacar el volumen, no la estrategia:** añadir micro-conversiones, ampliar keywords de intención, subir presupuesto si el negocio lo justifica, y/o **consolidar en una estrategia de cartera (portfolio) a nivel MCC** para juntar conversiones de varias campañas (workaround de Optmyzr).
- **No** forzar Maximizar conversiones uncapped esperando magia: a 2-8/mes será errático.

### Fase 3 — Madurez (solo si el volumen crece): tCPA / tROAS
- **No antes de ~30 conv/mes sostenidas** (tCPA) o ~50 (tROAS / valor). Con 10 €/día esto probablemente no se alcance; es una fase aspiracional, no inmediata.

### Tabla resumen de umbrales

| Estrategia | Umbral citado (conv / 30 días) | Tipo de fuente | Apta para este caso al arranque |
|---|---|---|---|
| Maximizar clics (con tope CPC) / CPC manual | ninguno (no depende de conversiones) | OFICIAL + EXPERTO | **Sí — recomendada Fase 1** |
| Maximizar conversiones (sin tCPA) | ≥15 para activar (oficial); ~15-20 funcional, mejora >30 | OFICIAL + EXPERTO | Fase 2, tras seeding |
| Maximizar conversiones + Target CPA | ~30 | CONSENSO/EXPERTO | **No al arranque** (estrangula 10 €/día) |
| Target ROAS / Max valor | ~50 | EXPERTO (alinea con oficial) | No |

---

## Respuesta directa al dilema del cliente

> *"¿Cómo va a optimizar Maximizar conversiones si no hay datos? ¿No deberíamos empezar por Maximizar clics y luego cambiar?"*

- **"¿Cómo optimiza sin datos?"** — No optimiza desde cero absoluto: usa modelos a nivel de query, aprendizaje bayesiano y datos de toda la cuenta (sección 1). Pero a 2-8 conv/mes opera por debajo de su zona fiable y será volátil. La preocupación del cliente es **técnicamente parcial pero prácticamente acertada para este volumen.**
- **"¿Empezar por Maximizar clics y luego cambiar?"** — **Sí, es exactamente lo que recomienda la propia Google** para una campaña nueva (cita oficial verificada), y lo respaldan Marin, Defined Digital y el estudio de Optmyzr. La única voz experta en contra (Jyll Saskin Gales, ex-Google) lo desaconseja por riesgo de tráfico basura — mitigable con tope de CPC. Para 10 €/día y B2B, **el seeding con Maximizar clics (con CPC máximo) o CPC manual es la opción más prudente.**
- **El cambio operativo que más importa** no es la estrategia, sino **subir el volumen de conversiones** (micro-conversiones, consolidar campañas, portfolio MCC). Sin eso, ninguna estrategia rinde bien a 2-8 conv/mes.

---

## Fuentes

**Oficiales (Google Ads Help):**
- About Smart Bidding — https://support.google.com/google-ads/answer/7065882?hl=en
- About Maximize conversions bidding — https://support.google.com/google-ads/answer/7381968?hl=en
- How our bidding algorithms learn — https://support.google.com/google-ads/answer/10970825?hl=en
- Google Ads automated bidding — https://support.google.com/google-ads/answer/10964872?hl=en
- Duration of the learning period — https://support.google.com/google-ads/answer/13020501?hl=en
- About Maximize clicks bidding — https://support.google.com/google-ads/answer/6268626?hl=en
- Manual CPC — https://support.google.com/google-ads/answer/2390250?hl=en
- Determine a bid strategy based on your goals — https://support.google.com/google-ads/answer/2472725
- Enhanced CPC deprecation — https://support.google.com/google-ads/answer/2464964?hl=en

**Expertos / estudios:**
- Optmyzr — Impact of PPC Bidding Strategies (Navah Hopkins, 24 sep 2024) — https://www.optmyzr.com/blog/impact-of-ppc-bidding-strategies/
- Optmyzr — Smart Bidding strategies (1 sep 2025) — https://www.optmyzr.com/blog/smart-bidding-strategies/
- Optmyzr — Smart Bidding low-volume markets — https://www.optmyzr.com/blog/smart-bidding-low-volume-markets/
- Jyll Saskin Gales — Max Conversions vs Max Clicks (8 may 2024) — https://learn.jyll.ca/blog/should-you-start-a-google-ads-campaign-on-maximize-conversions-or-maximize-clicks
- Jyll Saskin Gales — When/how to change bid strategies (20 sep 2024) — https://learn.jyll.ca/blog/when-and-how-should-you-change-bid-strategies-in-google-ads
- Marin Software — Max clicks first then Max conversions (8 jul 2024) — https://www.marinsoftware.com/blog/
- Defined Digital Academy — Bidding strategies 2025 — https://www.definedigitalacademy.com/blog/google-ads-bidding-strategies-in-2025-how-to-avoid-costly-mistakes-and-maximize-results
- Store Growers — Target CPA — https://www.storegrowers.com/target-cpa/
- Store Growers — Manual CPC — https://www.storegrowers.com/google-ads-manual-cpc/
- KeywordMe — How many conversions Google Ads need — https://www.keywordme.io/blog/how-many-conversions-do-google-ads-need-to-optimize
- 30chars — Switching Max clicks to Max conversions (10 ene 2025) — https://30chars.com/blog/switching-maximize-clicks-to-maximize-conversions/
- ALM Corp — Manual CPC update 2026 (17 ene 2026) — https://almcorp.com/blog/google-ads-manual-cpc-update-2026/
- Hallam — Google Ads for B2B lead generation — https://hallam.agency/blog/google-ads-for-b2b-lead-generation/
- GroAs — Smart Bidding learning period 2026 — https://www.groas.com/post/google-ads-smart-bidding-learning-period-2026-how-long-resets-shorten

**Prensa especializada:**
- Search Engine Land — Google to deprecate eCPC (6 sep 2024) — https://searchengineland.com/google-ads-deprecate-enhanced-cpc-search-display-446350
- WordStream — Enhanced CPC going away — https://www.wordstream.com/blog/ehanced-cpc-going-away

**Limitaciones de la investigación:**
- No se pudieron recuperar hilos de **Reddit r/PPC** (bloqueado/no indexado en el entorno); el "consenso de comunidad" se infiere de fuentes con nombre, no de citas textuales de r/PPC.
- Cifras de presupuesto/porcentajes de almcorp y Hallam (2.000-5.000 $/mes, 30-50 %, "cuatro días") son estimaciones de autor, **no publicadas por Google**.
- La regla presupuesto-vs-tCPA (2x a 15x) está genuinamente disputada entre fuentes; no hay número único acordado.

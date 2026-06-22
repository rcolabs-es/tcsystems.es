# Inteligencia competitiva — Google Ads de competidores de TC Systems

**Fecha:** 2026-06-21
**Fuente:** Google Ads Transparency Center (https://adstransparency.google.com), endpoint RPC interno `SearchService/SearchCreatives`, región España.
**Mercado analizado:** Kioscos de autoservicio, terminales de autopago, TPV, parking, ID/etiquetado, lavandería industrial.

> Nota de honestidad: los textos de anuncios ("copy literal") se han extraído leyendo las **imágenes-miniatura de cada creatividad** que devuelve el Transparency Center (en anuncios de búsqueda, la miniatura es el propio anuncio renderizado con titular + descripción). No se ha inventado ningún anuncio. Donde no hay datos, se marca explícitamente.

---

## 0. Metodología — qué funcionó y qué no (reproducibilidad)

### LO QUE FUNCIONÓ
- **Endpoint RPC interno (POST):**
  `https://adstransparency.google.com/anji/_/rpc/SearchService/SearchCreatives?authuser=0`
  - Headers: `content-type: application/x-www-form-urlencoded;charset=UTF-8`, `x-same-domain: 1`, user-agent de navegador.
  - Cuerpo (formato que funciona), búsqueda **global** por dominio (recomendado):
    ```
    f.req={"2":40,"3":{"12":{"1":"<DOMINIO>","2":true}},"7":{"1":1,"2":26,"3":2586}}
    ```
    - `2586` = código de región España.
    - El campo `"12":{"1":"<dominio>","2":true}` filtra por dominio de destino verificado.
  - Respuesta: JSON con `"4"` = total de creatividades, `"1"` = array de hasta 40 anuncios/página. Por anuncio: `"1"`=advertiser ID, `"2"`=creative ID, `"4"`=formato (**1=texto/Search, 2=imagen/display, 3=vídeo**), `"6"`/`"7"`=epoch primera/última emisión, `"12"`=razón social del anunciante, `"13"`=nº de variantes, `"14"`=dominio.
- **Extracción del copy literal:** la miniatura está en `creative.3.3.2` como `<img src="https://tpc.googlesyndication.com/archive/simgad/...">`. Se descarga la imagen (HTTP 200, sin auth) y se lee — contiene titular + descripción del anuncio de búsqueda.

### LO QUE NO FUNCIONÓ
- **Filtro "ads servidos en España" `"8":[2586]`**: devuelve casi siempre vacío para estos anunciantes (sólo EOS dio 1). No es fiable para contar presión en ES; se usó la búsqueda global por dominio que sí refleja la actividad real.
- **`LookupAdvertiserByDomain`, `LookupCreative`, `GetCreative`, etc.:** todas devuelven 404. No se localizó el nombre exacto del RPC de detalle de creatividad.
- **Página pública de detalle** `adstransparency.google.com/advertiser/<id>/creative/<id>?region=ES`: redirige a `google.com/sorry/` (**CAPTCHA anti-bot**). No accesible por WebFetch/curl.
- **`LookupAdvertiserService/...`**: 404. La API pública oficial (no la interna) **no es accesible** sin clave de pago (SerpApi/SearchApi).

---

## 1. Resumen por competidor

| Competidor | Dominio | ¿Anuncia en Google Ads? | Nº creatividades (total) | Formatos (muestra pág. 1) | Anunciante (razón social) |
|---|---|---|---|---|---|
| **EOS Ibérica** | eosiberica.es | **SÍ** (fuerte) | **73** | 26 texto / 13 imagen / 1 vídeo | EOS PROCESSOR SL |
| **ADNID** | adnid.com | **SÍ** (fuerte) | **100** | 25 texto / 14 imagen / 1 vídeo | ADN Sistemas de IDentificación SL |
| **Zucchetti** | zucchetti.es | **SÍ** (fuerte) | **74** | 40 texto | ZUCCHETTI SOFTWARE SPAIN SL |
| **ISTOBAL** | istobal.com | **SÍ** (muy fuerte, multipaís) | **200** | 36 texto / 4 imagen | ISTOBAL ESPAÑA + 8 filiales |
| **Girbau** | girbau.com | **SÍ** | **39** | 27 texto / 8 imagen / 4 vídeo | Girbau S.A. + filiales BR/MX |
| **Logiscenter** | logiscenter.com | **SÍ** | **100** | 18 texto / 18 imagen / 4 vídeo | GRUPO LOGISCENTER, S.L. |
| **CAME / Parkare** | came.com | **SÍ** (corporativo, no Parkare) | **25** | 17 texto / 2 imagen / 6 vídeo | CAME S.p.A. + filiales DE/CA |
| **Camarero10** | camarero10.com | **SÍ** (testimonial) | **2** | 1 texto / 1 vídeo | DIGITAL RESTAURANT S.L. |
| **Hiopos / ISLEA** | islea.es | **Marginal** | **1** | 1 texto | Xavier Galmés Sureda (distribuidor) |
| **CoinAccess** | coinaccess.* | **NO / desconocido** | 0 | — | (sin dominio publicitario localizado) |
| **CAME Parkare** | cameparkare.com | **NO** (sólo la matriz CAME anuncia) | 0 | — | — |
| **Meypar** | meypar.com/.es | **NO** | 0 | — | — |
| **Copermatica** | copermatica.* | **NO** | 0 | — | — |
| **Wavetec** | wavetec.com/.es | **NO** | 0 | — | — |
| **Cherfy** | cherfy.* | **NO** | 0 | — | — |
| **Lymon** | lymon.es/.com/.io | **NO** | 0 | — | — |
| **Hiopos (marca matriz)** | hiopos.com/.es | **NO** (la marca ICG no aparece) | 0 | — | — |

> "Total" = nº de creatividades históricas verificadas en el Transparency Center (incluye activas y recientes; el centro guarda histórico). El volumen es proxy de inversión/actividad, no de anuncios vivos hoy.

---

## 2. Copy literal de los anuncios (verbatim de la imagen)

### EOS Ibérica — `eosiberica.es` (COMPETIDOR DIRECTO en kioscos)
Es el rival más comparable a TC Systems. Pujan por **kioscos, tótems, teclados industriales, lectores DNIe, PC industriales** y hasta **duplicado de llaves**.

1. **Titular:** "tótem táctil exterior"
   **Desc.:** "Kioscos interactivos y tótems digitales fabricados en España. Solicita presupuesto. Soluciones llave en mano para empresas, retail, industria y administración. Legible al sol. Accesorios a medida. Fabricación propia."
   **Sitelinks/CTA:** Teclado metálico · Lector de huella, QR · Tótem...
   URL: www.eosiberica.es/kioscos/totems

2. **Titular:** "Comprar lector de tarjetas con chip DNIe | eLT DNIe-I"
   **Desc.:** "Es ideal para varias aplicaciones de tarjetas inteligentes, como certificado electrónico DNIe, comercio electrónico, banca en casa y acceso seguro."
   **Sitelinks:** Soluciones Tecnológicas · Kioscos de autoservicio

3. **Titular:** "Terminales para hacer duplicados de llaves al instante"
   **Desc.:** "Hasta ahora, parecía imposible poder duplicar llaves en cualquier momento y desde un teléfono móvil sin la necesidad de recurrir a un cerrajero"

4. **Titular:** "Teclados industriales"
   **Desc.:** "Teclados metálicos industriales fabricados en acero inoxidable"

5. **Titular:** "Pide presupuesto | Ordenadores táctiles - TOUCH SERIES archivos"
   **Desc.:** "Soluciones para cajeros automáticos de bancos, ordenadores públicos, etc. eCAP 3IN: Kit táctiles para uso en dispositivos de la industria. Kioscos multimedia. Integra componentes. Soluciones de interior."
   **CTA:** Comprar PC industrial · Pide tu producto ya · (URL: /formulario)

6. **Titular:** "Solicita información"
   **Desc.:** "Empresa con 30 años de experiencia en el diseño industrial y fabricación de soluciones tecnológicas. Además, somos importadores de componentes industriales."

### ADNID — `adnid.com` (ID, código de barras, etiquetado, impresión)
Vertical de **identificación / código de barras / impresoras de etiquetas** (Zebra, Datalogic, Honeywell, Toshiba). 100 creatividades, alta presión.

1. **Titular:** "Zebra Technologies - Distribuidor España | ADNid"
   **Desc.:** "Desde 1996 aportando soluciones ID para productos, mercancías y personas. Rollos de Cinta Ribbon para impresoras de etiquetas al mejor precio."

2. **Titular:** "Lector de código de barras Datalogic | ADNid"
   **Desc.:** "Amplia gama de lectores de códigos de barras Datalogic al mejor precio, te ayudamos a encontrar tu escáner ideal."

3. **Titular:** "Toshiba BV420D GS02"
   **Desc.:** "Con nuestras impresoras pueden imprimir etiquetas autoadhesivas, cartulina, poliéster, etc ADNid te ofrece impresoras de etiquetas para todos los entornos y necesidades."

4. **Titular:** "Lector de código de barras - Escáners QR / 1D / 2D"
   **Desc.:** "Lectores de código de barras 1D, 2D, QR para logística, comercio e industria de las marcas más reconocidas como Zebra, Honeywell y Datalogic"

5. **Titular:** "Impresoras pequeñas portátiles de etiquetas adhesivas y tickets"
   **Desc.:** "Tanto si necesita imprimir etiquetas de códigos de barras como si necesita imprimir recibos o tickets, las soluciones portátile[s]..." (URL: /ribbon)

### Zucchetti — `zucchetti.es` (software de gestión / ERP / TPV)
74 creatividades, **100% texto** en la página 1. Vertical software empresarial.

1. **Titular:** "El mejor ERP del mercado - ERP para empresa industriales"
   **Desc.:** "Zucchetti Spain. Programa de gestión industrial personalizable y vanguardista. ¡Infórmate! Reduce costes y optimiza procesos de la mano de..."
   URL: www.zucchetti.es/erp_industrial/zucchetti

### ISTOBAL — `istobal.com` (lavado de vehículos, multipaís)
200 creatividades, anuncia en ES, DE, HU, UK, FR, IT, PL, US, AT. Máxima presión publicitaria del conjunto.

1. (ES) **Titular:** "Istobal: Marca Española Líder - Nº 1 en Maquinaria Lavado"
   **Desc.:** "Conoce nuestras nuevas soluciones para la higienización de todo tipo de vehículos. Líderes en..."
   **Sitelinks:** Puentes de Lavado Coches · Tren de Lavado Vehículos · Lavado Flotas Vehiculos · Lavado Vehículo Industria · Producto Químico Istobal

2. (UK) **Titular:** "Commercial Carwash Equipment" — **Desc.:** "Professional car wash equipment. Find out now!"

3. (HU) **Titular:** "ISTOBAL Magyarország" — **Desc.:** "Hivatalos ISTOBAL képviselet Magyarországon. Egyedi megoldások és professzionális szerviz."

4. (DE) **Titular:** "ISTOBAL Autowaschanlage kaufen - Nr. 1 bei Autowaschanlagen" — **Desc.:** "Marktführer In Den Bereichen Entwicklung, Herstellung Und Vermarktung Von Waschlösungen"

5. (ES) **Titular:** "Istobal: Marca Española Líder" — **Desc.:** "Si deseas información sobre alguno de nuestros servicios estás en el lugar indicado. Rellena los datos del formulario y nos pondremos en contacto contigo."

### Girbau — `girbau.com` (lavandería industrial, multipaís)
39 creatividades, fuerte en **Portugal/Brasil** y **Alemania**. Mensaje de "lavandería de autoservicio 100% rentable".

1. (PT/BR) **Titular:** "A Melhor Máquina p/ Lavanderia - Máquinas para Lavanderias"
   **Desc.:** "Equipamentos profissionais para lavanderias. Solicite informações e conheça as máquinas. Os melhores equipamentos p/ lavanderias de autosserviço estão..."
   (con sitelink: "Sua Lavanderia 100% Lucrativa")

2. (DE) **Titular:** "Maschinen für Wäscherei" — **Desc.:** "Girbau: Zuverlässige Profi-Wäschereitechnik für Hotels und Gesundheitswesen."

3. (PT/BR) **Titular:** "Sua Lavanderia 100% Lucrativa - Máquinas para Lavanderias"
   **Desc.:** "Linha completa de máquinas para lavanderias de autosserviço. Acesse o site e saiba mais. Os melhores..." (URL: go.girbau.com/g-laundry)

### Logiscenter — `logiscenter.com` (terminales POS, etiquetado, hardware)
100 creatividades. Anuncia fuerte en **Polonia** (subdominio pl.). Vertical hardware AIDC/POS — solapa con ADNID y con periféricos de kiosco.

1. (PL) **Titular:** "Terminale POS I Oprogramowanie" — **Desc.:** "Profesjonalna Technologia POS: Ekrany Dotykowe, Szuflady Kasowe itp. Doradzamy!" (= Tecnología POS profesional: pantallas táctiles, cajones de efectivo, etc. Asesoramos.)

2. (PL) **Titular:** "Terminale Getac" — **Desc.:** "Wytrzymałe Tablety I Laptopy Getac, Doradzamy Zawsze Dostosowując Się do Twoich Potrzeb." (= Tablets/portátiles robustos Getac.)

3. (PL) **Titular:** "Drukarki Etykiet" — **Desc.:** "Profesjonalne Drukarki Etykiet, Biletów, Kart PVC I Opasek na Rękę. Doradzamy!" (= Impresoras de etiquetas, billetes, tarjetas PVC y pulseras.)

### CAME — `came.com` (la matriz CAME, NO la división Parkare)
25 creatividades, **corporativo/barreras/puertas**, en DE/CA/global. **CAME Parkare como marca propia NO anuncia** (`cameparkare.com` = 0).

1. (DE) **Titular:** "Max. Effizienz: Schnelllauftor - Selbstreparierende Tore - CAME Deutschland GmbH"
   **Desc.:** "Windlast bis 120 km/h. 1,25 Mio. Zyklen Lebensdauer. Bis 8,5 m. Lösung jetzt anfragen. Geprüfte Qualität..."

2. (CA) **Titular:** "Came - Now in Toronto" — **Desc.:** "Gates Automation, Automatic Parking Barriers, IP Intercoms, Security Bollards & Turnstiles"

3. **Titular:** "Barrier Gates - Gate Automation" — **Desc.:** "Gates Automation, Automatic Parking Barriers, IP Intercoms, Security Bollards & Turnstiles"

### Camarero10 — `camarero10.com` (TPV hostelería)
Sólo 2 creatividades (presencia testimonial).

1. **Titular:** "Camarero10: Software TPV - Software Hostelería Camarero10"
   **Desc.:** "Aumenta la rentabilidad de tu negocio incorporando la carta digital QR en tu restaurante Camarero 10..."

### ISLEA (distribuidor Hiopos) — `islea.es`
Sólo 1 creatividad, anunciante persona física (distribuidor local, Mallorca).

1. **Titular:** "Partner oficial Hiopos - Para comercios y tiendas"
   **Desc.:** "Solución elegante para tu comercio: compacto, fiable y con soporte técnico." (URL: /tpv-compacto/verifactu)

---

## 3. Keywords / ángulos por los que parecen pujar

- **EOS Ibérica:** "tótem táctil exterior", "kioscos interactivos", "PC/ordenador industrial táctil", "teclado metálico/industrial inox", "lector DNIe / tarjetas chip", "duplicado de llaves". Ángulos: **fabricación propia en España, llave en mano, 30 años, legible al sol, presupuesto**. → Compite de frente con TC Systems en kioscos/tótems y periféricos.
- **ADNID:** marcas de hardware como keyword ("Zebra", "Datalogic", "Honeywell", "Toshiba"), "lector código de barras", "impresora de etiquetas", "escáner QR/1D/2D", "ribbon". Ángulo: **al mejor precio, distribuidor oficial**.
- **Zucchetti:** "ERP industrial", "el mejor ERP", "software de gestión". Ángulo: reducción de costes / personalizable.
- **ISTOBAL:** "maquinaria de lavado", "puente/tren de lavado", "lavado de flotas", "autowaschanlage". Ángulo: **Nº1 / marca líder española / marktführer**.
- **Girbau:** "máquinas para lavandería", "lavandería de autoservicio", "Wäscherei". Ángulo: **lavandería 100% rentable / Profi-technik hoteles y sanidad**.
- **Logiscenter:** "terminale POS", "drukarki etykiet", "Getac" (robusto). Ángulo: **tecnología profesional, asesoramiento**.
- **CAME:** "barreras de parking", "puertas rápidas/automatización", "Schnelllauftor". Ángulo: durabilidad (ciclos de vida), corporativo.
- **Camarero10 / ISLEA:** "software TPV hostelería", "carta digital QR", "Verifactu", "partner Hiopos". Ángulo: rentabilidad, cumplimiento Verifactu.

---

## 4. Presión competitiva por vertical y huecos (oportunidad TC Systems)

### Verticales CON presión publicitaria alta (difícil/caro pujar)
- **Lavado de vehículos:** ISTOBAL (200) — saturadísimo, multipaís. No es vertical core de TC Systems.
- **Lavandería autoservicio:** Girbau (39) — concentrado en PT/BR/DE, **poco en España**.
- **ID / código de barras / etiquetado / impresoras:** ADNID (100) + Logiscenter (100). Muy competido por precio.
- **Periféricos de kiosco (teclados, lectores, PC industrial):** EOS Ibérica activo. Presión media-alta.
- **TPV / software de gestión:** Zucchetti (74) fuerte; Camarero10/ISLEA marginal.

### Verticales VACÍOS o casi vacíos en Ads ES (OPORTUNIDAD para TC Systems)
- **Kioscos / tótems / terminales de autopago "puros":** el ÚNICO rival que puja con fuerza por estos términos en España es **EOS Ibérica**. El resto del set (CoinAccess, Meypar, CAME Parkare, Copermatica, Wavetec, Cherfy, Lymon, Hiopos-marca) **NO anuncia en Google Ads**. → Espacio muy poco disputado: TC Systems puede dominar "kiosco autoservicio", "terminal de autopago", "kiosco de pago automático" compitiendo casi sólo contra EOS.
- **Parking / parkímetros / cajeros de aparcamiento:** **CoinAccess, Meypar y CAME Parkare NO anuncian** (CAME sólo puja por barreras corporativas, no por "parkímetro/cajero de parking" en ES). → Hueco claro en el subnicho de **terminales/cajeros de pago de parking**.
- **Gestión de colas / turnos (Wavetec, Cherfy):** **sin anuncios** → vertical abierto.
- **Quioscos/autopago para hostelería y QSR:** Camarero10 es testimonial (2 ads). → Poco disputado.

### Recomendación táctica
1. **Atacar a EOS Ibérica** en sus propias keywords de kiosco/tótem/PC industrial/lectores: es el único que defiende activamente ese terreno; diferenciarse en fabricación española + autopago + integración de pago.
2. **Capturar los verticales vacíos** (autopago de parking, gestión de turnos, autopago hostelería): CPCs probablemente bajos por falta de pujadores y conversión limpia.
3. Evitar pelear en lavado de vehículos/lavandería/etiquetado (no es core y está saturado).

---

## 5. URLs de referencia
- Transparency Center (búsqueda manual UI): https://adstransparency.google.com/?region=ES&domain=eosiberica.es
- Endpoint RPC usado: https://adstransparency.google.com/anji/_/rpc/SearchService/SearchCreatives
- Verificación manual por anunciante (UI):
  - EOS: https://adstransparency.google.com/?region=ES&domain=eosiberica.es
  - ADNID: https://adstransparency.google.com/?region=ES&domain=adnid.com
  - Zucchetti: https://adstransparency.google.com/?region=ES&domain=zucchetti.es
  - ISTOBAL: https://adstransparency.google.com/?region=ES&domain=istobal.com
  - Girbau: https://adstransparency.google.com/?region=ES&domain=girbau.com
  - Logiscenter: https://adstransparency.google.com/?region=ES&domain=logiscenter.com
  - CAME: https://adstransparency.google.com/?region=ES&domain=came.com
  - Camarero10: https://adstransparency.google.com/?region=ES&domain=camarero10.com

// ============================================================================
// Módulo 5: Comunicación y Gestión de la Información con IA
// Casos de Estudio Aplicados — Kinetix Performance Sports
// Universidad Anáhuac Mayab
// ============================================================================

const WORKBOOK_DATA = {
  meta: {
    institution: "Universidad Anáhuac Mayab",
    module: "Módulo 5: Comunicación y Gestión de la Información con IA",
    title: "Casos de Estudio Aplicados",
    guideLabel: "GUÍA GENERAL DEL WORKBOOK · MÓDULO 5",
    certification: "Certificación en Desarrollo de Competencias Gerenciales",
    level: "Posgrado — Maestría en Dirección Estratégica",
    company: "Kinetix Performance Sports (Escenario Ficticio)",
    period: "Noviembre – Diciembre 2026",
    academicNote:
      "Este caso es completamente ficticio. Los nombres, datos y situaciones son creados con fines didácticos.",
    canvasNotice:
      "Todas las respuestas, análisis, prototipos y entregables de cada caso deben subirse directamente en la plataforma Canvas, dentro de la tarea correspondiente a cada actividad."
  },

  navSections: [
    {
      id: "intro",
      label: "Guía General",
      shortTitle: "Introducción y Reglas",
      badge: "Inicio",
      badgeType: "neutral",
      submenus: [
        { id: "bienvenida", label: "Introducción y Contexto" },
        { id: "progresion", label: "Progresión Pedagógica" },
        { id: "instrucciones", label: "Instrucciones y Entrega Canvas" }
      ]
    },
    {
      id: "caso-1",
      label: "Caso 1",
      shortTitle: "La Telaraña Invisible",
      badge: "Sin IA",
      badgeType: "no-ai",
      tema: "Tema 5.1",
      submenus: [
        { id: "narrativa", label: "1.1–1.4 Narrativa del Caso" },
        { id: "actividad", label: "Actividad 1 e Instrucciones" },
        { id: "evaluacion", label: "Criterios de Evaluación" }
      ]
    },
    {
      id: "caso-2",
      label: "Caso 2",
      shortTitle: "Código Rojo en Andares",
      badge: "Sin IA",
      badgeType: "no-ai",
      tema: "Tema 5.2",
      submenus: [
        { id: "narrativa", label: "2.1–2.5 Narrativa del Caso" },
        { id: "actividad", label: "Actividad 2 e Instrucciones" },
        { id: "evaluacion", label: "Criterios de Evaluación" }
      ]
    },
    {
      id: "caso-3",
      label: "Caso 3",
      shortTitle: "Fair Play Digital",
      badge: "IA Generativa",
      badgeType: "ai",
      tema: "Temas 5.1 + 5.3",
      submenus: [
        { id: "narrativa", label: "3.1–3.4 Narrativa del Caso" },
        { id: "actividad", label: "Actividad 3 e Instrucciones" },
        { id: "evaluacion", label: "Criterios de Evaluación" }
      ]
    },
    {
      id: "caso-4",
      label: "Caso 4",
      shortTitle: "El Tablero que Nadie Tenía",
      badge: "IA Analítica",
      badgeType: "ai",
      tema: "Tema 5.3",
      submenus: [
        { id: "narrativa", label: "4.1–4.4 Narrativa del Caso" },
        { id: "actividad", label: "Actividad 4 e Instrucciones" },
        { id: "evaluacion", label: "Criterios de Evaluación" }
      ]
    },
    {
      id: "caso-5",
      label: "Caso 5",
      shortTitle: "Operación Kinetix 4.0",
      badge: "IA Integrada",
      badgeType: "final",
      tema: "Entregable Final",
      submenus: [
        { id: "narrativa", label: "5.1–5.4 Narrativa del Caso" },
        { id: "actividad", label: "Actividad 5 — Entregable Final" },
        { id: "evaluacion", label: "Criterios de Evaluación" }
      ]
    },
    {
      id: "anexos",
      label: "Anexos",
      shortTitle: "Glosario y Perfil Kinetix",
      badge: "Referencia",
      badgeType: "neutral",
      submenus: [
        { id: "anexo-1", label: "Anexo 1: Glosario (20 Términos)" },
        { id: "anexo-2", label: "Anexo 2: Perfil Organizacional" }
      ]
    }
  ],

  intro: {
    indice: [
      {
        seccion: "Introducción",
        contenido:
          "Introducción al Documento de Casos · Contexto Organizacional: Kinetix Performance Sports · Resumen de la Progresión Pedagógica · Instrucciones Generales para el Estudiante",
        enfoque: "Marco Conceptual y Reglas",
        target: "intro/bienvenida"
      },
      {
        seccion: "Caso 1",
        contenido:
          'Caso 1: "La Telaraña Invisible" — Narrativa del Caso (1.1–1.4), Instrucciones de la Actividad 1 y Criterios de Evaluación',
        enfoque: "Sin IA · Tema 5.1",
        target: "caso-1/narrativa"
      },
      {
        seccion: "Caso 2",
        contenido:
          'Caso 2: "Código Rojo en Andares" — Narrativa del Caso (2.1–2.5), Instrucciones de la Actividad 2 y Criterios de Evaluación',
        enfoque: "Sin IA · Tema 5.2",
        target: "caso-2/narrativa"
      },
      {
        seccion: "Caso 3",
        contenido:
          'Caso 3: "Fair Play Digital" — Narrativa del Caso (3.1–3.4), Instrucciones de la Actividad 3 y Criterios de Evaluación',
        enfoque: "IA Generativa · Temas 5.1 + 5.3",
        target: "caso-3/narrativa"
      },
      {
        seccion: "Caso 4",
        contenido:
          'Caso 4: "El Tablero que Nadie Tenía" — Narrativa del Caso (4.1–4.4), Instrucciones de la Actividad 4 y Criterios de Evaluación',
        enfoque: "IA Analítica · Tema 5.3",
        target: "caso-4/narrativa"
      },
      {
        seccion: "Caso 5",
        contenido:
          'Caso 5: "Operación Kinetix 4.0" — Narrativa del Caso (5.1–5.4), Instrucciones de la Actividad 5 — Entregable Final y Criterios de Evaluación',
        enfoque: "IA Integrada · Temas 5.1–5.2–5.3",
        target: "caso-5/narrativa"
      },
      {
        seccion: "Anexos",
        contenido:
          "Anexo 1: Glosario de Términos del Módulo 5 (Bloques 1 y 2) · Anexo 2: Perfil Organizacional de Kinetix Performance Sports",
        enfoque: "Referencia Conceptual y Datos",
        target: "anexos/anexo-1"
      }
    ],
    introduccionTexto: [
      "Este documento contiene cinco casos de estudio progresivos diseñados para el Módulo 5 — Comunicación y Gestión de la Información con IA — de la Certificación en Desarrollo de Competencias Gerenciales de la Universidad Anáhuac Mayab. Todos los casos están anclados en la empresa ficticia Kinetix Performance Sports y presentan problemas organizacionales reales con datos numéricos verificables internamente.",
      "La progresión pedagógica sigue una lógica deliberada: los primeros dos casos se resuelven sin el apoyo de herramientas de Inteligencia Artificial (IA), lo que obliga al estudiante a desarrollar primero el pensamiento analítico y crítico. A partir del tercer caso, la IA se incorpora como herramienta de diseño y amplificación de soluciones ya diagnosticadas. El quinto caso es el entregable final integrador."
    ],
    contextoOrganizacional:
      "Kinetix Performance Sports es una empresa especializada en equipamiento deportivo de alto rendimiento con presencia nacional. Opera 9 sucursales activas en 8 ciudades mexicanas — CDMX, Monterrey, Guadalajara, Puebla, Querétaro, Mérida, León y Lerma —, un canal de e-commerce propio y un canal B2B con 25 clubes atléticos aliados. Su plantilla es de 80 colaboradores.",
    progresion: [
      {
        num: "1",
        caso: '"La Telaraña Invisible"',
        problema: "Compra urgente de AeroStrata sin comunicación interdepartamental",
        ia: "Sin IA",
        tema: "Tema 5.1",
        target: "caso-1/narrativa"
      },
      {
        num: "2",
        caso: '"Código Rojo en Andares"',
        problema: "Sucursal con 82.6% asistencia, 2 casos graves, conflictos de comisiones",
        ia: "Sin IA",
        tema: "Tema 5.2",
        target: "caso-2/narrativa"
      },
      {
        num: "3",
        caso: '"Fair Play Digital"',
        problema: "3 escenarios de conflicto recurrente: comisiones, garantías, turnos",
        ia: "IA Generativa",
        tema: "Temas 5.1 + 5.3",
        target: "caso-3/narrativa"
      },
      {
        num: "4",
        caso: '"El Tablero que Nadie Tenía"',
        problema: "12 días para consolidar datos dispersos en 6 sistemas diferentes",
        ia: "IA Analítica",
        tema: "Tema 5.3",
        target: "caso-4/narrativa"
      },
      {
        num: "5",
        caso: '"Operación Kinetix 4.0"',
        problema: '38.8% "En Desarrollo" + brecha 0.57 pts Flagship vs. Regionales',
        ia: "IA Integrada",
        tema: "Temas 5.1-5.2-5.3",
        target: "caso-5/narrativa"
      }
    ],
    instruccionesGenerales: [
      "Lee el caso narrativo completo antes de revisar las instrucciones de la actividad.",
      "Los casos 1 y 2 deben resolverse sin el uso de herramientas de IA.",
      "Los casos 3, 4 y 5 integran herramientas de IA como parte del proceso de solución.",
      "Cada actividad contiene criterios de evaluación explícitos que suman el 100% de la calificación.",
      "Los casos son progresivos: cada entregable alimenta el siguiente.",
      "El Caso 5 es el entregable integrador final del módulo.",
      "Todas las respuestas y entregables de cada actividad deben subirse a la plataforma Canvas en la tarea correspondiente."
    ]
  },

  cases: {
    "caso-1": {
      number: "01",
      headerTag: "CASO 01 · MÓDULO 5 · SIN IA",
      kicker: 'CASO 1 · “La Telaraña Invisible” · Radiografía de Canales — Mapeo Manual de Flujos de Comunicación',
      title: 'Caso 1: "La Telaraña Invisible"',
      aiAllowed: false,
      aiRuleShort: "Esta actividad se realiza completamente SIN el uso de herramientas de Inteligencia Artificial.",
      metaTable: [
        { label: "Tema del Temario", value: "Tema 5.1 — Términos 1-10 (Comunicación estratégica, canales, direccionalidad, ruido, cuellos de botella)" },
        { label: "Uso de IA", value: "Sin IA — Actividad de diagnóstico manual" },
        { label: "Modalidad", value: "Grupal (equipos de 3-4 integrantes)" },
        { label: "Materiales", value: "Papel rotafolio o pizarrón, marcadores de colores" },
        { label: "Plataforma de Entrega", value: "Subir respuestas y evidencias a Canvas (Actividad 1)" }
      ],
      visualCaption:
        "Diagnóstico de flujos de comunicación interdepartamental entre Compras, Operaciones Retail, CEDIS y Marketing.",
      narrativa: [
        {
          id: "1.1",
          title: "1.1 Encuadre del Escenario",
          blocks: [
            {
              type: "p",
              text: "Es lunes 4 de noviembre de 2026. El Ing. Alejandro Torres Villanueva, CEO de Kinetix Performance Sports, acaba de recibir una llamada urgente de la Lic. Patricia Guerrero Salinas, Gerente de Compras Técnicas. La marca global proveedora del modelo AeroStrata Carbon Pro (SKU CAL-001, precio $6,499 MXN, margen 56.1%) ha anunciado un incremento de precio del 12% efectivo en 15 días. Patricia necesita autorización inmediata para emitir una orden de compra spot de $350,000 MXN —el máximo de su autonomía— para asegurar 120 pares al precio actual antes del aumento."
            },
            {
              type: "p",
              text: "El problema no es la decisión financiera. El problema es que nadie más en la organización se ha enterado.",
              highlight: true
            },
            {
              type: "p",
              text: "Kinetix Performance Sports opera con 80 colaboradores distribuidos en 9 sucursales activas a lo largo de 8 ciudades: CDMX (Flagship Masaryk + Concept Santa Fe), Monterrey (Flagship San Pedro), Guadalajara (Concept Andares), Puebla (Concept Angelópolis), Querétaro (Concept Antea), Mérida (Concept Altabrisa), León (Concept Plaza Mayor) y Lerma (Outlet Performance). Además, opera un canal de e-commerce propio y un canal B2B con 25 clubes atléticos aliados."
            },
            {
              type: "p",
              text: "La estructura organizacional se divide en tres grandes gerencias bajo el CEO:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Compras y Cadena de Suministro (Lic. Patricia Guerrero, 3 colaboradores)",
                "Operaciones Retail & CEDIS (Lic. Roberto Hernández Mora, 59 colaboradores: 9 Store Managers, 9 Líderes Técnicos y 36 Asesores Técnicos)",
                "Marketing, CX & Alianzas (Mtra. Diana Cruz Espinoza, 10 colaboradores)"
              ]
            }
          ]
        },
        {
          id: "1.2",
          title: "1.2 El Incidente y la Evidencia",
          blocks: [
            {
              type: "p",
              text: "Patricia autoriza la compra spot el mismo lunes. Los 120 pares llegan al CEDIS el miércoles 6 de noviembre. Sin embargo, una cascada de fallas comunicacionales comienza a desarrollarse:"
            },
            {
              type: "cards",
              items: [
                {
                  tag: "Falla 1",
                  title: "El CEDIS no estaba preparado",
                  text: "El Ing. Raúl Domínguez Paredes, Gerente de Cadena de Suministro, no fue notificado del pedido urgente. Sus 2 Supervisores de Fulfillment (Jorge Espinoza y Paola Reyes) y 3 Analistas de Despachos no tenían espacio asignado en almacén para un lote no programado."
                },
                {
                  tag: "Falla 2",
                  title: "Los Store Managers no sabían del cambio de precio",
                  text: "La Lic. Carmen Sánchez Nava, Store Manager del Flagship Masaryk —la sucursal #1 con $382,411 MXN en ventas— se enteró por un cliente que preguntó si el precio iba a subir. Tuvo que improvisar una respuesta."
                },
                {
                  tag: "Falla 3",
                  title: "El equipo B2B perdió una oportunidad crítica",
                  text: 'Eduardo Ramos, el Asesor Técnico B2B #1 ($168,400 en ventas, rating 4.7/5.0), tenía una reunión programada con el Club Atlético Coyotes para un pedido institucional de 30 pares de AeroStrata. Sin saber del aumento inminente, no pudo usar el argumento de "precio congelado" como incentivo de cierre. El ticket promedio B2B es de $19,209 MXN.'
                },
                {
                  tag: "Falla 4",
                  title: "Marketing no pudo reaccionar",
                  text: "La Mtra. Diana Cruz Espinoza (Gerente de Marketing, promedio 360° de 4.63) tenía planeada una campaña de contenido técnico sobre el AeroStrata para la semana siguiente. Sin saber del cambio de precio, la campaña se publicó con el precio anterior, generando confusión en redes sociales."
                },
                {
                  tag: "Falla 5",
                  title: "El equipo de CX recibió el impacto",
                  text: "La Lic. Alejandra Ríos Mendoza, Coordinadora de Experiencia del Cliente, reportó 14 tickets de clientes preguntando por discrepancias de precio entre la web y la tienda física, violando el protocolo de Respeto de Precios y Homologación de Promociones, que establece que los precios de lista y descuentos son idénticos en la web y en tienda física."
                }
              ]
            }
          ]
        },
        {
          id: "1.3",
          title: "1.3 Factores de Tensión y Restricciones",
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                "La política de Click & Collect en 2 horas exige sincronización de stock en tiempo real entre CEDIS y las 9 sucursales. El lote de emergencia rompió esa sincronización.",
                "El Gerente Regional de Operaciones, Lic. Roberto Hernández Mora, supervisa a 59 colaboradores pero no tiene un canal formal de comunicación de emergencia con Compras.",
                "Los 4 Especialistas de Visual Merchandising (coordinados por Ing. Fernanda Villanueva Acosta) necesitaban actualizar los exhibidores del AeroStrata en las 9 tiendas, pero se enteraron 5 días después.",
                "La competencia COM (Comunicación) en la Encuesta 360° obtuvo un promedio organizacional de 3.99/5.0, apenas por debajo de la meta de 4.0, confirmando que la comunicación es un área de mejora real."
              ]
            }
          ]
        },
        {
          id: "1.4",
          title: "1.4 Resolución y Cierre",
          blocks: [
            {
              type: "p",
              text: "El CEO convoca una reunión de emergencia el viernes 8 de noviembre con las 3 gerencias. Reconoce que la decisión de Patricia fue correcta financieramente, pero que la ausencia de un protocolo de comunicación interdepartamental para decisiones urgentes generó una cascada de fallas que costó:"
            },
            {
              type: "table",
              headers: ["Consecuencia", "Valor / Magnitud"],
              rows: [
                ["Oportunidad B2B perdida (30 pares Club Coyotes)", "$194,970 MXN estimados"],
                ["Tickets de queja en CX por discrepancia de precios", "14 tickets"],
                ["Días con exhibición desactualizada en 9 tiendas", "5 días"],
                ["Confusión en redes sociales por precio incorrecto", "1 campaña comprometida"]
              ]
            },
            {
              type: "p",
              text: "Torres Villanueva pide a cada gerencia que mapee sus canales de comunicación actuales y proponga un protocolo de comunicación de emergencia antes del próximo lunes."
            }
          ]
        }
      ],
      actividad: {
        title: "Instrucciones de la Actividad 1",
        objetivo:
          "Identificar y mapear los canales de comunicación formales e informales de una organización multicanal, clasificando los flujos como descendentes, ascendentes y horizontales, y detectando cuellos de botella sin recurso tecnológico.",
        iaRule: "Esta actividad se realiza completamente SIN el uso de herramientas de Inteligencia Artificial.",
        pasos: [
          {
            title: "1. Dibuja manualmente (papel rotafolio o pizarrón) el mapa completo de flujos de comunicación de Kinetix, incluyendo:",
            subitems: [
              "Las 3 gerencias y sus departamentos",
              "Las 9 sucursales con sus Store Managers y Líderes Técnicos",
              "Los canales Digital y B2B",
              "El CEDIS como nodo logístico"
            ]
          },
          {
            title: "2. Clasifica cada flujo como descendente (↓), ascendente (↑) u horizontal (↔) usando flechas de colores diferentes."
          },
          {
            title: "3. Identifica al menos 5 puntos de ruido donde la información se distorsionó o se perdió en el caso narrado. Para cada punto, explica:",
            subitems: [
              "¿Quién debió comunicar qué a quién?",
              "¿Qué tipo de flujo faltó (descendente, ascendente u horizontal)?",
              "¿Cuál fue la consecuencia concreta?"
            ]
          },
          {
            title: "4. Señala los 3 cuellos de botella más críticos de la estructura actual (por ejemplo: Roberto Hernández supervisando 59 personas, la ausencia de canal Compras→CEDIS, etc.)."
          },
          {
            title: "5. Propone un protocolo de comunicación de emergencia en formato manual (sin tecnología) que hubiera evitado la cascada de fallas descrita en el caso."
          }
        ],
        canvasEntrega: {
          titulo: "Entrega en Canvas — Actividad 1",
          descripcion:
            "Una vez concluido el trabajo en equipo, sube tus respuestas y evidencia fotográfica/documental del mapa manual y los puntos 1 al 5 a la plataforma Canvas en la asignación correspondiente al Caso 1."
        }
      },
      evaluacion: {
        criterios: [
          {
            criterio: "Completitud del mapa de flujos",
            ponderacion: "25%",
            indicador: "Se incluyen todos los actores"
          },
          {
            criterio: "Correcta clasificación de flujos (descendente / ascendente / horizontal)",
            ponderacion: "25%",
            indicador: "Consistencia en la notación"
          },
          {
            criterio: "Identificación de puntos de ruido con consecuencias concretas",
            ponderacion: "25%",
            indicador: "Mínimo 5 puntos"
          },
          {
            criterio: "Protocolo de comunicación de emergencia viable",
            ponderacion: "25%",
            indicador: "Aplicable y sin tecnología"
          }
        ],
        alineacion:
          "Tema 5.1 — Términos 1-10: Comunicación estratégica, canal de comunicación, comunicación descendente, comunicación ascendente, comunicación horizontal, retroalimentación de doble vía, mensaje clave, ruido en la comunicación, comunicación efectiva, cuello de botella comunicacional."
      }
    },

    "caso-2": {
      number: "02",
      headerTag: "CASO 02 · MÓDULO 5 · SIN IA",
      kicker: 'CASO 2 · “Código Rojo en Andares” · Diagnóstico de Fallas de Comunicación sin IA',
      title: 'Caso 2: "Código Rojo en Andares"',
      aiAllowed: false,
      aiRuleShort: "Esta actividad se realiza completamente SIN el uso de herramientas de Inteligencia Artificial.",
      metaTable: [
        { label: "Tema del Temario", value: "Tema 5.2 — Términos 11-15 (Gestión de la información, flujo, información accionable, fuentes confiables, infoxicación)" },
        { label: "Uso de IA", value: "Sin IA — Actividad de diagnóstico analítico" },
        { label: "Modalidad", value: "Individual o por parejas" },
        { label: "Entregable", value: "Diagnóstico ejecutivo escrito (máximo 1 página)" },
        { label: "Plataforma de Entrega", value: "Subir diagnóstico y respuestas a Canvas (Actividad 2)" }
      ],
      visualCaption:
        "Análisis ejecutivo de indicadores de asistencia, Evaluación 360° y registros del Movement Lab en Concept Andares GDL.",
      narrativa: [
        {
          id: "2.1",
          title: "2.1 Encuadre del Escenario",
          blocks: [
            {
              type: "p",
              text: 'Es viernes 1 de noviembre de 2026. La Lic. Lorena Figueras López, Store Manager de Concept Andares GDL, llega a su oficina a las 8:45 AM y encuentra sobre su escritorio un sobre cerrado de la Dirección de Capital Humano. Dentro hay un documento titulado "Alerta Crítica — Concept Andares GDL" con el sello de CONFIDENCIAL.'
            },
            {
              type: "p",
              text: "Concept Andares es una tienda en formato Mall Premium ubicada en el centro comercial más exclusivo de Guadalajara. Genera $184,320 MXN en ventas con 44 tickets y un ticket promedio de $4,189 MXN. Tiene 8 colaboradores asignados. Sin embargo, los números que Lorena lee en el documento la dejan helada."
            }
          ]
        },
        {
          id: "2.2",
          title: "2.2 El Incidente y la Evidencia",
          blocks: [
            {
              type: "p",
              text: "El reporte de asistencia de octubre 2026 revela que Concept Andares concentra la asistencia más baja de toda la organización: 82.6%, con 2 de los 4 casos graves de los 80 colaboradores de Kinetix. Los datos específicos son los siguientes:"
            },
            {
              type: "subtitle",
              text: "Caso Grave #1 — Alejandro Silva, Asesor Técnico"
            },
            {
              type: "table",
              headers: ["Indicador", "Dato"],
              rows: [
                ["Asistencia efectiva", "63.6% (12 de 22 días hábiles)"],
                ["Retardos", "3 retardos (días 1, 3 y 20 de octubre)"],
                ["Faltas injustificadas", "2 faltas (días 14 y 28)"],
                ["Días de incapacidad médica", "5 días (del 6 al 12 de octubre)"],
                ["Total de incidencias", "10 incidencias"],
                ["Resultado Encuesta 360°", '3.36/5.0 — Clasificación: "Requiere Mejora"'],
                ["eNPS interno", "48 (el más bajo de la organización)"],
                ["Venta neta", "$112,500 MXN con conversión biomecánica de 72.2%"],
                ["Situación actual", "Plan de Mejora Activo. Fricciones recurrentes por apropiación de comisiones."]
              ]
            },
            {
              type: "callout",
              variant: "info",
              text: "La incapacidad del 6 al 12 de octubre coincide con un conflicto documentado sobre una venta del AeroStrata Carbon Pro ($6,499 MXN) donde otro compañero cobró la venta que Alejandro había asesorado durante 35 minutos."
            },
            {
              type: "subtitle",
              text: "Caso Grave #2 — Esteban Aguilar, Asesor Técnico"
            },
            {
              type: "table",
              headers: ["Indicador", "Dato"],
              rows: [
                ["Asistencia efectiva", "59.1% (13 de 22 días hábiles)"],
                ["Retardos", "2 retardos (días 5 y 19, ambos lunes)"],
                ["Faltas injustificadas", "4 faltas (días 7, 14, 21 y 28 — todas en martes)"],
                ["Días de incapacidad", "3 días (del 13 al 15 de octubre)"],
                ["Total de incidencias", "9 incidencias"],
                ["Resultado Encuesta 360°", '3.33/5.0 — Clasificación: "Requiere Mejora"'],
                ["eNPS interno", "55"],
                ["Venta neta", "$38,200 MXN con conversión biomecánica de 77.8%"],
                ["Patrón de riesgo", "4 faltas exactamente en martes sugieren ausentismo intencional."]
              ]
            },
            {
              type: "p",
              text: 'Mientras tanto, en la misma sucursal, Paola Navarrete (Asesora Técnica, $71,820 en ventas, rating 4.5/5.0, clasificación "En Desarrollo") y Daniel Fuentes ($22,000 en ventas, rating 4.2/5.0) mantienen un desempeño aceptable pero reportan desmotivación creciente por la carga de trabajo adicional que absorben cuando sus compañeros faltan.'
            }
          ]
        },
        {
          id: "2.3",
          title: "2.3 Comparativa con Flagship Masaryk CDMX",
          blocks: [
            {
              type: "p",
              text: "Para dimensionar la brecha, Lorena compara los indicadores de Andares con los del Flagship Masaryk CDMX (Store Manager: Carmen Sánchez Nava, promedio 360° de 4.53):"
            },
            {
              type: "table",
              headers: ["Indicador", "Concept Andares GDL", "Flagship Masaryk CDMX"],
              rows: [
                ["Asistencia efectiva", "82.6%", "98.5%"],
                ["Promedio Encuesta 360°", "3.72", "4.24"],
                ["Venta neta mensual", "$184,320 MXN", "$382,411 MXN"],
                ["Mejor asesor (ventas)", "Paola Navarrete $71,820 / rating 4.5", "Carlos Mendoza $195,400 / rating 4.8"],
                ["Conversión biomecánica top", "72.2% (caso grave)", "89.5% (Carlos Mendoza)"]
              ]
            }
          ]
        },
        {
          id: "2.4",
          title: "2.4 Factores de Tensión y Restricciones",
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                "Lorena Figueras tiene un promedio 360° de 4.19 (Competente), con competencia de Comunicación de 4.3 y Liderazgo de 4.2. ¿Son suficientes para manejar esta crisis?",
                'El protocolo de disputas de comisiones establece que "la comisión pertenece irrevocablemente al asesor que realizó y firmó digitalmente la prueba de Gait Analysis en la tablet del Movement Lab". Pero Alejandro Silva alega que el sistema no registró correctamente su firma.',
                "La tasa de faltas injustificadas de la organización es 3.4% (meta: <2%). Andares concentra una proporción desproporcionada.",
                'El hallazgo H4 del reporte confirma que los 4 casos graves coinciden con colaboradores clasificados como "Requiere Mejora" o "En Desarrollo" en la Encuesta 360°.'
              ]
            }
          ]
        },
        {
          id: "2.5",
          title: "2.5 Resolución y Cierre",
          blocks: [
            {
              type: "p",
              text: "Capital Humano le da a Lorena 72 horas para entregar un diagnóstico ejecutivo de máximo 1 página que responda:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "¿Es un problema de individuos o un problema sistémico de la sucursal?",
                "¿Qué información es accionable y qué es ruido?",
                "¿Qué fuentes de información son confiables para tomar decisiones?"
              ]
            }
          ]
        }
      ],
      actividad: {
        title: "Instrucciones de la Actividad 2",
        objetivo:
          "Diagnosticar fallas comunicacionales a partir de datos cuantitativos reales, distinguiendo entre información accionable y sobrecarga informativa (infoxicación), sin el uso de herramientas de IA.",
        iaRule: "Esta actividad se realiza completamente SIN el uso de herramientas de Inteligencia Artificial.",
        pasos: [
          {
            title: "1. Analiza los datos cuantitativos del caso y clasifícalos en la siguiente tabla:",
            tableTemplate: {
              headers: ["Información Accionable", "Ruido / Infoxicación"],
              rows: [
                ["(Datos que permiten tomar una decisión concreta)", "(Datos que distraen o no son relevantes para el diagnóstico)"]
              ]
            }
          },
          {
            title: "2. Identifica las fuentes de información disponibles para Lorena y evalúa su confiabilidad:",
            subitems: [
              "Reporte de asistencia biométrico",
              "Encuesta 360° (autoevaluación + jefe + pares + subordinados)",
              "Bitácora del Movement Lab (registros de Gait Analysis)",
              "Reportes de venta por asesor",
              "eNPS interno"
            ]
          },
          {
            title: "3. Responde la pregunta central: ¿Es un problema de individuos o sistémico? Sustenta con al menos 3 evidencias cuantitativas del caso."
          },
          {
            title: "4. Redacta el diagnóstico ejecutivo de máximo 1 página que Lorena debe entregar a Capital Humano. Debe incluir:",
            subitems: [
              "Hallazgos principales (máximo 3)",
              "Evidencia cuantitativa de respaldo",
              "Recomendación de acción inmediata",
              "Indicadores de seguimiento propuestos"
            ]
          }
        ],
        canvasEntrega: {
          titulo: "Entrega en Canvas — Actividad 2",
          descripcion:
            "Sube a la plataforma Canvas (en la asignación de la Actividad 2) tu diagnóstico ejecutivo de máximo 1 página junto con la tabla de Información Accionable vs. Ruido, la evaluación de confiabilidad de fuentes y la argumentación cuantitativa."
        }
      },
      evaluacion: {
        criterios: [
          {
            criterio: "Calidad del análisis de datos cuantitativos",
            ponderacion: "25%",
            indicador: "Precisión y profundidad"
          },
          {
            criterio: "Distinción entre información accionable y ruido (infoxicación)",
            ponderacion: "25%",
            indicador: "Tabla completa y justificada"
          },
          {
            criterio: "Argumentación: problema individual vs. sistémico",
            ponderacion: "25%",
            indicador: "3 evidencias mínimo"
          },
          {
            criterio: "Claridad y estructura del diagnóstico ejecutivo escrito",
            ponderacion: "25%",
            indicador: "1 página, estilo ejecutivo"
          }
        ],
        alineacion:
          "Tema 5.2 — Términos 11-15: Gestión de la información, flujo de información, información accionable, fuente de información confiable, sobrecarga de información (infoxicación)."
      }
    },

    "caso-3": {
      number: "03",
      headerTag: "CASO 03 · MÓDULO 5 · IA GENERATIVA",
      kicker: 'CASO 3 · “Fair Play Digital” · Diseño de un Chatbot de Mediación con IA',
      title: 'Caso 3: "Fair Play Digital"',
      aiAllowed: true,
      aiRuleShort: "Esta actividad incorpora el uso de herramientas de IA Generativa como parte central del proceso.",
      metaTable: [
        { label: "Tema del Temario", value: "Temas 5.1 + 5.3 — Términos 6, 7, 8, 18 (Retroalimentación de doble vía, mensaje clave, ruido, herramienta colaborativa)" },
        { label: "Uso de IA", value: "Con IA — IA Generativa para diseño conversacional" },
        { label: "Modalidad", value: "Grupal (equipos de 3-4 integrantes)" },
        { label: "Entregable", value: "Árbol de decisión, system prompt y prototipo funcional" },
        { label: "Plataforma de Entrega", value: "Subir diseño, prompts y prototipo a Canvas (Actividad 3)" }
      ],
      visualCaption:
        "Diseño conversacional con retroalimentación de doble vía en la aplicación interna Kinetix HR.",
      narrativa: [
        {
          id: "3.1",
          title: "3.1 Encuadre del Escenario",
          blocks: [
            {
              type: "p",
              text: "Es miércoles 13 de noviembre de 2026. Tras el diagnóstico del Caso 2, la Dirección de Capital Humano de Kinetix ha decidido implementar un sistema de mediación digital que permita a los colaboradores reportar conflictos, solicitar mediaciones y recibir orientación sobre protocolos internos las 24 horas del día, los 7 días de la semana."
            },
            {
              type: "p",
              text: "La Mtra. Diana Cruz Espinoza (Gerente de Marketing & Alianzas, promedio 360° de 4.63, la #4 de toda la organización) ha sido designada como líder del proyecto por su excepcional competencia en Comunicación (4.9/5.0, la más alta de la organización). Diana debe diseñar un chatbot interno que funcione dentro de la app Kinetix HR, alineado con los 4 valores corporativos fundamentales, especialmente:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Valor #1: Integridad Técnica y Competitiva (Fair Play)",
                "Valor #4: Colaboración Interdisciplinaria y Empatía Operativa"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "3.2 Los Tres Escenarios de Conflicto Recurrente",
          blocks: [
            {
              type: "subtitle",
              text: "Escenario A — Reclamo por Apropiación de Comisión"
            },
            {
              type: "p",
              text: "Alejandro Silva (Concept Andares) está furioso. Invirtió 35 minutos con un cliente maratonista realizando el análisis biomecánico completo en el Movement Lab. El cliente decidió comprar el AeroStrata Carbon Pro ($6,499 MXN), pero cuando Alejandro estaba atendiendo a otro cliente, su compañero cobró la venta en el POS sin seleccionar el nombre de Alejandro como asesor original. La comisión de $97.48 MXN (1.5% de $6,499) fue asignada al compañero."
            },
            {
              type: "p",
              text: 'Alejandro amenaza con "dejar de hacer análisis biomecánicos si nadie respeta el protocolo."'
            },
            {
              type: "callout",
              variant: "warm",
              text: 'Protocolo vigente: "La comisión individual pertenece irrevocablemente al asesor que realizó y firmó digitalmente la prueba de Gait Analysis en la tablet del Movement Lab. El Store Manager coteja la hora del reporte cinemático con la hora del ticket de venta."'
            },
            {
              type: "subtitle",
              text: "Escenario B — Reclamación Técnica por Garantía de 30 Días"
            },
            {
              type: "p",
              text: "Un corredor aficionado exigente utilizó 25 días las zapatillas Stratus Glide Max Cushion ($4,599 MXN, margen 57.6%) y acusa molestias lumbares y desgaste asimétrico. Exige devolución total de forma prepotente."
            },
            {
              type: "p",
              text: 'La política establece que si el calzado "genera sobrecargas, ampollas estructurales o incompatibilidad biomecánica, se realiza el cambio inmediato de modelo o la emisión de nota de crédito por el 100%". Sin embargo, el cliente no pasó por el Movement Lab originalmente, lo que genera un dilema procedimental para el asesor que atiende el reclamo.'
            },
            {
              type: "subtitle",
              text: "Escenario C — Resistencia al Cambio de Turno"
            },
            {
              type: "p",
              text: "Un asesor técnico de piso se rehúsa a cubrir un domingo de carrera atlética masiva: un evento del Club Kinetix con clínicas de técnica de carrera y entrenamientos sabatinos. Argumenta compromisos personales y falta de consideración directiva. El Store Manager necesita cobertura operativa urgente, pero el aviso fue tardío. No existe un protocolo claro de comunicación para ajustes de turno excepcionales."
            }
          ]
        },
        {
          id: "3.3",
          title: "3.3 Factores de Tensión y Restricciones",
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                "El chatbot debe manejar la contención emocional antes de ofrecer soluciones procedimentales.",
                "Debe respetar la retroalimentación de doble vía: escuchar, validar emocionalmente y luego orientar.",
                "No puede tomar decisiones disciplinarias; solo puede orientar y escalar a RRHH cuando sea necesario.",
                "Debe funcionar para los 80 colaboradores en 9 sucursales, CEDIS y Corporativo.",
                "El eNPS organizacional es de 72.4 (Promotores: 61%, Pasivos: 24%, Detractores: 15%). El chatbot no debe empeorar estos números."
              ]
            }
          ]
        },
        {
          id: "3.4",
          title: "3.4 Resolución y Cierre",
          blocks: [
            {
              type: "p",
              text: "Diana presenta al CEO tres alternativas de arquitectura del chatbot:"
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Chatbot reactivo: Solo responde cuando el colaborador inicia la conversación.",
                "Chatbot proactivo: Envía alertas preventivas cuando detecta patrones (ej: 2+ retardos en una semana).",
                "Chatbot híbrido: Reactivo para consultas + proactivo para alertas + escalamiento automático a RRHH para casos graves."
              ]
            },
            {
              type: "p",
              text: "El CEO elige la opción 3 (híbrido) y pide un prototipo funcional para la siguiente semana.",
              highlight: true
            }
          ]
        }
      ],
      actividad: {
        title: "Instrucciones de la Actividad 3",
        objetivo:
          "Diseñar un mecanismo de comunicación basado en IA para resolver conflictos laborales recurrentes, aplicando principios de retroalimentación de doble vía en un entorno automatizado.",
        iaRule: "Esta actividad incorpora el uso de herramientas de IA Generativa como parte central del proceso.",
        pasos: [
          {
            title: "1. Diseña el árbol de decisión conversacional para al menos 2 de los 3 escenarios (mínimo 5 nodos por escenario). Cada nodo debe incluir:",
            subitems: [
              "Mensaje del chatbot",
              "Opciones de respuesta del usuario",
              "Lógica de ramificación (qué camino sigue cada respuesta)"
            ]
          },
          {
            title: "2. Redacta el prompt del sistema (system prompt) que instruya al chatbot sobre:",
            subitems: [
              "Su identidad y tono (alineado con la cultura Fair Play de Kinetix)",
              "Las políticas que debe conocer (protocolo de comisiones, garantía 30 días, cambio de turnos)",
              "Los límites de su actuación (¿qué puede resolver y qué debe escalar?)",
              "Cómo manejar la contención emocional antes de la solución procedimental"
            ]
          },
          {
            title: "3. Incorpora la retroalimentación de doble vía en el flujo conversacional. El chatbot debe seguir esta secuencia:",
            subitems: [
              "Escuchar y parafrasear la queja del colaborador",
              'Validar emocionalmente: "Entiendo tu frustración..."',
              "Ofrecer la solución basada en la política interna",
              "Confirmar que el colaborador se siente escuchado antes de cerrar la conversación"
            ]
          },
          {
            title: "4. Prototipar al menos 1 escenario completo usando una herramienta de IA generativa. Documenta:",
            subitems: [
              "Los prompts que utilizaste para configurar el chatbot",
              "Las respuestas generadas por la IA",
              "Los ajustes que realizaste y el motivo de cada ajuste"
            ]
          }
        ],
        canvasEntrega: {
          titulo: "Entrega en Canvas — Actividad 3",
          descripcion:
            "Sube a Canvas (asignación del Caso 3) el documento o enlace con tu árbol de decisión conversacional, el system prompt completo, la secuencia de retroalimentación de doble vía y la documentación/evidencia del prototipo funcional."
        }
      },
      evaluacion: {
        criterios: [
          {
            criterio: "Coherencia y completitud del árbol de decisión",
            ponderacion: "25%",
            indicador: "2 escenarios, 5 nodos c/u"
          },
          {
            criterio: "Calidad y precisión del system prompt",
            ponderacion: "25%",
            indicador: "Tono, políticas y límites"
          },
          {
            criterio: "Integración de retroalimentación de doble vía",
            ponderacion: "25%",
            indicador: "4 pasos presentes"
          },
          {
            criterio: "Funcionalidad del prototipo y documentación del proceso",
            ponderacion: "25%",
            indicador: "Prototipo demostrable"
          }
        ],
        alineacion:
          "Temas 5.1 y 5.3 — Términos 6, 7, 8, 18: Retroalimentación de doble vía, mensaje clave, ruido en la comunicación, herramienta colaborativa."
      }
    },

    "caso-4": {
      number: "04",
      headerTag: "CASO 04 · MÓDULO 5 · IA ANALÍTICA",
      kicker: 'CASO 4 · “El Tablero que Nadie Tenía” · Dashboard de Pulso Comunicacional con IA',
      title: 'Caso 4: "El Tablero que Nadie Tenía"',
      aiAllowed: true,
      aiRuleShort: "Esta actividad incorpora el uso de herramientas de IA Analítica y de Visualización de Datos.",
      metaTable: [
        { label: "Tema del Temario", value: "Tema 5.3 — Términos 16-20 (Repositorio, dashboard, herramienta colaborativa, automatización de reportes, toma de decisiones basada en datos)" },
        { label: "Uso de IA", value: "Con IA — IA Analítica para visualización y automatización" },
        { label: "Modalidad", value: "Grupal (equipos de 3-4 integrantes)" },
        { label: "Entregable", value: "Prototipo de dashboard con 7 KPIs, 3 visualizaciones y reglas de automatización" },
        { label: "Plataforma de Entrega", value: "Subir tabla de KPIs, dashboard, visualizaciones y reglas a Canvas (Actividad 4)" }
      ],
      visualCaption:
        "Consolidación de indicadores de asistencia, Evaluación 360°, ventas y alertas automatizadas en tiempo real.",
      narrativa: [
        {
          id: "4.1",
          title: "4.1 Encuadre del Escenario",
          blocks: [
            {
              type: "p",
              text: "Es lunes 18 de noviembre de 2026. El CEO Alejandro Torres Villanueva (promedio 360° de 4.74, eNPS 92, clasificación Excepcional) convoca una reunión extraordinaria con sus 3 gerentes de área. El motivo: acaba de revisar los resultados consolidados de octubre y descubrió que tomó 12 días reunir toda la información necesaria para tener una foto completa de la organización."
            },
            {
              type: "p",
              text: "Los datos estaban dispersos en 6 fuentes completamente separadas:"
            },
            {
              type: "list",
              ordered: true,
              items: [
                "El reporte de asistencia (generado por Capital Humano en Excel)",
                "La Encuesta 360° (procesada por consultores externos en PDF)",
                "Los reportes de venta por sucursal (en el sistema POS)",
                "Los registros del Movement Lab (en la app de la tablet)",
                "Los tickets de CX (en el sistema de atención al cliente)",
                "Los reportes de VM (en correos electrónicos de Fernanda Villanueva)"
              ]
            },
            {
              type: "callout",
              variant: "warm",
              text: 'Torres Villanueva declara: "Tenemos $2,364,620 MXN en ventas, 80 colaboradores, 9 sucursales, 3 canales y 16 SKUs. Pero no tengo un solo lugar donde ver si la organización está sana o enferma en tiempo real."'
            }
          ]
        },
        {
          id: "4.2",
          title: "4.2 El Incidente y la Evidencia",
          blocks: [
            {
              type: "p",
              text: "El CEO presenta los datos que le tomó 12 días consolidar manualmente:"
            },
            {
              type: "subtitle",
              text: "Indicadores de Asistencia (Octubre 2026)"
            },
            {
              type: "table",
              headers: ["Indicador", "Valor Actual", "Meta", "Estatus"],
              rows: [
                ["Tasa de asistencia efectiva", "94.3%", ">95%", "⚠ Bajo Meta"],
                ["Tasa de puntualidad", "89.1%", "≥92%", "⚠ Bajo Meta"],
                ["Tasa de faltas injustificadas", "3.4%", "<2%", "⚠ Sobre Meta"],
                ["Colaboradores con asistencia perfecta", "14 de 80 (17.5%)", "≥20%", "⚠ Bajo Meta"],
                ["Casos graves activos", "4 casos", "0", "⚠ Crítico"]
              ]
            },
            {
              type: "subtitle",
              text: "Indicadores de Desempeño 360°"
            },
            {
              type: "table",
              headers: ["Competencia", "Promedio Organizacional", "Meta", "Brecha"],
              rows: [
                ["Promedio general", "3.94 / 5.0", "4.0", "-0.06"],
                ["Comunicación (COM)", "3.99 / 5.0", "4.0", "-0.01"],
                ["Liderazgo (LID)", "3.76 / 5.0", "4.0", "-0.24"],
                ["Innovación (INN)", "3.78 / 5.0", "4.0", "-0.22"],
                ["Trabajo en Equipo (TE)", "4.08 / 5.0", "4.0", "+0.08"],
                ["Brecha Flagship vs. Regionales", "4.24 vs. 3.67 promedio", "≤ 0.3", "0.57 pts"]
              ]
            },
            {
              type: "subtitle",
              text: "Estado por Sucursal (Octubre 2026)"
            },
            {
              type: "table",
              headers: ["Sucursal", "Asistencia", "Desempeño 360°", "Ventas", "Alerta"],
              rows: [
                ["Flagship Masaryk CDMX", "98.5%", "4.24", "$382,411", "✅ Modelo"],
                ["Flagship San Pedro MTY", "93.9%", "4.17", "$324,890", "⚠ Monitoreo"],
                ["Concept Andares GDL", "82.6%", "3.72", "$184,320", "🔴 2 Casos Graves"],
                ["E-commerce", "100%", "3.85", "$368,450", "✅ Excelente"],
                ["Itinerante (VM)", "92.0%", "N/A", "N/A", "🔴 1 Caso Grave"]
              ]
            }
          ]
        },
        {
          id: "4.3",
          title: "4.3 Factores de Tensión y Restricciones",
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                "El CEO quiere un dashboard que cualquier Store Manager pueda consultar desde su celular.",
                "Debe incluir alertas automáticas cuando un indicador cruce un umbral crítico definido.",
                "No puede exponer datos individuales de desempeño a personas no autorizadas (solo agregados por sucursal).",
                "Debe ser actualizable semanalmente sin requerir un analista de datos dedicado a tiempo completo.",
                "El presupuesto de tecnología es limitado: Kinetix es una empresa de 80 personas con facturación de $2.36M MXN mensual."
              ]
            }
          ]
        },
        {
          id: "4.4",
          title: "4.4 Resolución y Cierre",
          blocks: [
            {
              type: "p",
              text: "Torres Villanueva asigna el proyecto a un equipo multidisciplinario:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Diana Cruz (Marketing) para el diseño de la experiencia de usuario del dashboard",
                "Alejandra Ríos (Coordinadora CX, promedio 4.26) para definir los KPIs de servicio al cliente",
                "Roberto Hernández (Gerente Regional de Operaciones, promedio 4.46) para validar los KPIs operativos"
              ]
            },
            {
              type: "p",
              text: "El equipo tiene 2 semanas para presentar un prototipo de dashboard con al menos 7 KPIs y 3 visualizaciones funcionales.",
              highlight: true
            }
          ]
        }
      ],
      actividad: {
        title: "Instrucciones de la Actividad 4",
        objetivo:
          "Diseñar un dashboard que transforme datos dispersos en información accionable, seleccionando KPIs comunicacionales relevantes y proponiendo reglas de automatización SI-ENTONCES para alertas en tiempo real.",
        iaRule: "Esta actividad incorpora el uso de herramientas de IA Analítica y de Visualización de Datos.",
        pasos: [
          {
            title: "1. Selecciona 7 KPIs comunicacionales a partir de los datos del caso. Para cada KPI, define en una tabla:",
            subitems: [
              "Nombre del KPI",
              "Fórmula o fuente de datos",
              "Umbral verde / amarillo / rojo",
              "Frecuencia de actualización",
              "Responsable de monitoreo"
            ]
          },
          {
            title: "2. Diseña el layout del dashboard con zonas de alerta. Puedes usar herramientas de IA para generar el diseño visual o hacerlo con especificaciones claras en papel o documento."
          },
          {
            title: "3. Crea al menos 3 visualizaciones usando herramientas de IA o analítica de datos:",
            subitems: [
              "Una visualización de tendencia temporal (ej: asistencia semanal por sucursal)",
              "Una visualización comparativa (ej: sucursales vs. meta de desempeño)",
              "Una visualización de alerta (ej: semáforo de casos graves)"
            ]
          },
          {
            title: "4. Propone 5 reglas de automatización con formato SI-ENTONCES:",
            example:
              'Ejemplo: "SI la asistencia de una sucursal cae por debajo del 90% por 2 semanas consecutivas, ENTONCES enviar alerta automática al Gerente Regional y al Store Manager."'
          }
        ],
        canvasEntrega: {
          titulo: "Entrega en Canvas — Actividad 4",
          descripcion:
            "Sube a Canvas (en la asignación de la Actividad 4) la tabla de los 7 KPIs, el diseño/layout del dashboard, las 3 visualizaciones generadas y tus 5 reglas de automatización SI-ENTONCES."
        }
      },
      evaluacion: {
        criterios: [
          {
            criterio: "Pertinencia y coherencia de los 7 KPIs seleccionados",
            ponderacion: "25%",
            indicador: "Vinculados al caso real"
          },
          {
            criterio: "Diseño visual del dashboard (layout, zonas de alerta)",
            ponderacion: "25%",
            indicador: "Usabilidad y claridad"
          },
          {
            criterio: "Calidad de las 3 visualizaciones",
            ponderacion: "25%",
            indicador: "Tendencia, comparativa y alerta"
          },
          {
            criterio: "Lógica y completitud de las reglas de automatización",
            ponderacion: "25%",
            indicador: "5 reglas SI-ENTONCES"
          }
        ],
        alineacion:
          "Tema 5.3 — Términos 16-20: Repositorio de información, dashboard (tablero de indicadores), herramienta colaborativa, automatización de reportes, toma de decisiones basada en datos."
      }
    },

    "caso-5": {
      number: "05",
      headerTag: "CASO 05 · ENTREGABLE FINAL INTEGRADOR · IA INTEGRADA",
      kicker: 'CASO 5 — ENTREGABLE FINAL INTEGRADOR · “Operación Kinetix 4.0” · Plan de Comunicación Integral con IA — Entregable Final del Módulo',
      title: 'Caso 5: "Operación Kinetix 4.0"',
      aiAllowed: true,
      aiRuleShort: "Esta actividad incorpora IA Integrada (Generativa + Analítica + Diseño) como herramienta central. Es el entregable final del Módulo 5.",
      metaTable: [
        { label: "Tema del Temario", value: "Temas 5.1, 5.2 y 5.3 — Los 20 términos del módulo integrados" },
        { label: "Uso de IA", value: "Con IA — IA Integrada (Generativa + Analítica + Diseño)" },
        { label: "Modalidad", value: "Individual o grupal (a criterio del docente)" },
        { label: "Entregable", value: "Documento ejecutivo con 5 secciones obligatorias más presentación al Comité Directivo" },
        { label: "Fecha de entrega", value: "Lunes 2 de diciembre de 2026 (simulado)" },
        { label: "Plataforma de Entrega", value: "Subir documento ejecutivo y presentación final a Canvas (Entregable Final)" }
      ],
      visualCaption:
        "Presentación ejecutiva del Plan de Comunicación Integral y gestión del cambio organizacional ante el Comité Directivo.",
      narrativa: [
        {
          id: "5.1",
          title: "5.1 Encuadre del Escenario",
          blocks: [
            {
              type: "p",
              text: "Es viernes 29 de noviembre de 2026. Han pasado 4 semanas desde que el CEO Alejandro Torres Villanueva declaró la necesidad de transformar la comunicación organizacional de Kinetix. En ese tiempo, la organización ha recorrido un camino de aprendizaje acelerado:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Se mapearon los flujos de comunicación (Actividad 1) y se descubrieron 5 puntos ciegos críticos en la estructura organizacional.",
                "Se diagnosticó la crisis de Andares GDL (Actividad 2) como un problema sistémico, no individual, con evidencia cuantitativa sólida.",
                'Se diseñó el chatbot "Fair Play Digital" (Actividad 3) y se prototipó con éxito para los 3 escenarios de conflicto más recurrentes.',
                "Se creó el Dashboard de Pulso Comunicacional (Actividad 4) con 7 KPIs, alertas automáticas y 3 visualizaciones funcionales."
              ]
            },
            {
              type: "p",
              text: 'Ahora, Torres Villanueva enfrenta el desafío más complejo: comunicar el cambio a los 80 colaboradores. La implementación de herramientas de IA en una organización donde el 38.8% de la plantilla está clasificada como "En Desarrollo" y el 2.5% "Requiere Mejora" no será trivial.'
            }
          ]
        },
        {
          id: "5.2",
          title: "5.2 El Mapa de Adopción al Cambio",
          blocks: [
            {
              type: "subtitle",
              text: "Segmento de Riesgo Alto (Resistencia Probable)"
            },
            {
              type: "table",
              headers: ["Segmento", "Número", "%", "Características", "Riesgo"],
              rows: [
                ['"Requiere Mejora"', "2", "2.5%", "Alejandro Silva (3.36) y Esteban Aguilar (3.33)", "Resistencia Alta"],
                ['"En Desarrollo"', "31", "38.8%", "Promedio 3.50-3.79, Líderes Técnicos regionales", "Resistencia Media"],
                ["CEDIS + CX", "13", "16.3%", "Promedios 3.83 y 3.84 respectivamente", "Resistencia Latente"]
              ]
            },
            {
              type: "subtitle",
              text: "Segmento de Adopción Temprana (Champions del Cambio)"
            },
            {
              type: "table",
              headers: ["Segmento", "Número", "%", "Características"],
              rows: [
                ['"Excepcional"', "3", "3.8%", "CEO (4.74), Carlos Mendoza (4.70), Mariana Garza (4.71)"],
                ['"Sobresaliente"', "12", "15%", "Store Managers Flagship, Gerentes de Área y Top Asesores"],
                ['"Competente"', "32", "40%", "Núcleo estable de la organización; adoptadores tempranos potenciales"]
              ]
            }
          ]
        },
        {
          id: "5.3",
          title: "5.3 Factores de Tensión y Restricciones",
          blocks: [
            {
              type: "p",
              text: "El plan de implementación incluye 3 herramientas nuevas:"
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Chatbot Fair Play Digital en la app Kinetix HR (para mediación y consultas de protocolo).",
                "Dashboard de Pulso Comunicacional (para monitoreo organizacional en tiempo real).",
                "Protocolo de Comunicación de Emergencia (para decisiones urgentes interdepartamentales)."
              ]
            },
            {
              type: "p",
              text: "Sin embargo, la implementación enfrenta tensiones concretas:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Los 9 Store Managers tienen autonomía operativa (descuentos hasta 15%, garantías hasta $6,000 MXN, reprogramación de turnos). Cualquier herramienta nueva debe respetar esa autonomía, no reducirla.",
                'Los 36 Asesores Técnicos ganan comisión directa del 1.5% sobre venta neta. Si perciben que el chatbot o el dashboard "los vigila", podrían resistirse activamente.',
                "El equipo de CEDIS (6 personas, promedio 3.83) y CX (7 personas, promedio 3.84) son los departamentos con menor desempeño. Son también los que más se beneficiarían de las herramientas, pero potencialmente los más resistentes.",
                "La brecha de 0.57 puntos entre Flagship (4.24) y sucursales regionales (3.67) significa que la adopción será geográficamente desigual.",
                "El eNPS de 72.4 es positivo pero frágil: 15% son detractores. Una implementación mal comunicada podría convertir pasivos en detractores."
              ]
            }
          ]
        },
        {
          id: "5.4",
          title: "5.4 Las Cinco Preguntas del Comité Directivo",
          blocks: [
            {
              type: "p",
              text: "Torres Villanueva pide un Plan de Comunicación Integral que responda a 5 preguntas clave antes del lunes 2 de diciembre:"
            },
            {
              type: "list",
              ordered: true,
              items: [
                "¿Cómo fluye la información hoy y cómo debería fluir en el nuevo ecosistema?",
                "¿Dónde están las fallas comunicacionales que las herramientas de IA van a resolver?",
                "¿Qué canales actuales son ricos y cuáles son pobres? ¿Cómo potencia la IA cada canal?",
                "¿Cómo se organiza el ecosistema digital (chatbot + dashboard + protocolo) como sistema coherente?",
                "¿Cómo comunicamos el cambio a los 80 colaboradores sin generar resistencia?"
              ]
            }
          ]
        }
      ],
      actividad: {
        title: "Instrucciones de la Actividad 5 — Entregable Final",
        objetivo:
          "Integrar todos los conceptos del módulo en un plan de comunicación ejecutivo que combine diagnóstico humano con herramientas de IA, incluyendo una estrategia de gestión del cambio organizacional.",
        iaRule:
          "Esta actividad incorpora IA Integrada (Generativa + Analítica + Diseño) como herramienta central. Es el entregable final del Módulo 5.",
        seccionesObligatorias: [
          {
            titulo: "Sección 1 — Mapeo del Flujo de Información (25%)",
            descripcion:
              "Presenta el mapa de flujos refinado (evolución de la Actividad 1) ya digitalizado con herramientas de IA. Señala los flujos que se mantienen manuales y los que se automatizan con el nuevo ecosistema."
          },
          {
            titulo: "Sección 2 — Diagnóstico de Fallas Comunicacionales (25%)",
            descripcion:
              "Sintetiza los hallazgos de la Actividad 2 incorporando los datos de la Encuesta 360° (COM: 3.99, LID: 3.76, INN: 3.78). Presenta la correlación entre desempeño y asistencia como evidencia del problema sistémico."
          },
          {
            titulo: "Sección 3 — Análisis de Canales de Comunicación (25%)",
            descripcion:
              "Evalúa la riqueza de cada canal actual: presencial en tienda (60.5%), digital/e-commerce (19.2%), B2B institucional (20.3%) y comunicación interna (app Kinetix HR, correo, reuniones). Propone cómo la IA potencia cada canal."
          },
          {
            titulo: "Sección 4 — Plan de Organización Informativa Digital (25%)",
            descripcion:
              "Integra el chatbot Fair Play Digital (Actividad 3) y el Dashboard de Pulso Comunicacional (Actividad 4) en un ecosistema digital coherente. Define roles, responsabilidades de monitoreo y gobernanza de datos."
          },
          {
            titulo: "Sección 5 — Plan de Comunicación de la Mejora (20% base + 10% bonus)",
            descripcion:
              "Diseña la estrategia para comunicar a los 80 colaboradores la implementación de las nuevas herramientas. Incluye:",
            bullets: [
              "Mensajes segmentados por audiencia: Excepcionales/Sobresalientes vs. En Desarrollo vs. Requiere Mejora.",
              "Calendario de implementación por fases geográficas (Flagship primero, luego regionales).",
              "Identificación de los champions del cambio y definición de su rol en la adopción."
            ],
            featured: true
          }
        ],
        canvasEntrega: {
          titulo: "Entrega Final en Canvas — Actividad 5",
          descripcion:
            "Sube a la plataforma Canvas (en la tarea del Entregable Final / Caso 5) tu documento ejecutivo completo con las 5 secciones obligatorias y la presentación para el Comité Directivo."
        }
      },
      evaluacion: {
        criterios: [
          {
            criterio: "Sección 1 — Mapeo del Flujo de Información",
            ponderacion: "20%",
            indicador: "Mapa digitalizado, flujos manuales vs. automatizados identificados"
          },
          {
            criterio: "Sección 2 — Diagnóstico de Fallas Comunicacionales",
            ponderacion: "20%",
            indicador: "Evidencia 360° integrada, correlación desempeño-asistencia"
          },
          {
            criterio: "Sección 3 — Análisis de Canales",
            ponderacion: "20%",
            indicador: "4 canales evaluados, propuesta de potenciación con IA"
          },
          {
            criterio: "Sección 4 — Plan de Organización Informativa Digital",
            ponderacion: "20%",
            indicador: "Ecosistema chatbot + dashboard integrado, roles definidos"
          },
          {
            criterio: "Sección 5 — Plan de Comunicación de la Mejora",
            ponderacion: "20% + 10% bonus",
            indicador: "Mensajes segmentados, calendario por fases, champions identificados"
          }
        ],
        alineacion:
          "Temas 5.1, 5.2 y 5.3 — Los 20 términos del módulo integrados: comunicación estratégica, canales, retroalimentación, ruido, cuellos de botella, gestión de la información, flujo, información accionable, fuentes confiables, infoxicación, repositorio, dashboard, herramienta colaborativa, automatización de reportes y toma de decisiones basada en datos."
      }
    }
  },

  anexos: {
    anexo1: {
      kicker: "ANEXO 01 · REFERENCIA CONCEPTUAL · Workbook Módulo 5 · Base Conceptual",
      title: "Anexo 1: Glosario de Términos del Módulo 5",
      intro:
        "Los siguientes 20 términos clave del Módulo 5 son la base conceptual de todos los casos de estudio. Cada actividad ha sido diseñada para aplicar estos términos en contextos organizacionales reales.",
      bloques: [
        {
          id: "bloque-1",
          title: "Bloque 1 — Comunicación Estratégica (Tema 5.1)",
          terms: [
            { num: 1, termino: "Comunicación estratégica", definicion: "Proceso deliberado de diseñar y gestionar mensajes alineados con los objetivos organizacionales.", caso: "1" },
            { num: 2, termino: "Canal de comunicación", definicion: "Medio o vía a través del cual se transmite un mensaje (oral, escrito, electrónico, visual).", caso: "1" },
            { num: 3, termino: "Comunicación descendente", definicion: "Flujo de información desde niveles jerárquicos superiores hacia niveles inferiores.", caso: "1" },
            { num: 4, termino: "Comunicación ascendente", definicion: "Flujo de información desde niveles operativos hacia la dirección o gerencia.", caso: "1" },
            { num: 5, termino: "Comunicación horizontal", definicion: "Intercambio de información entre unidades o personas del mismo nivel jerárquico.", caso: "1" },
            { num: 6, termino: "Retroalimentación de doble vía", definicion: "Sistema de comunicación en el que el receptor también emite respuesta al emisor, creando un ciclo bidireccional.", caso: "3" },
            { num: 7, termino: "Mensaje clave", definicion: "Idea central que se desea comunicar y que debe ser comprendida por el receptor de forma precisa.", caso: "3" },
            { num: 8, termino: "Ruido en la comunicación", definicion: "Cualquier factor que distorsiona, interrumpe o altera la transmisión fiel del mensaje.", caso: "1" },
            { num: 9, termino: "Comunicación efectiva", definicion: "Proceso de transmisión en el que el mensaje es recibido, comprendido y responde a su intención original.", caso: "1, 5" },
            { num: 10, termino: "Cuello de botella comunicacional", definicion: "Punto de la estructura organizacional donde el flujo de información se ralentiza o bloquea de forma crítica.", caso: "1" }
          ]
        },
        {
          id: "bloque-2",
          title: "Bloque 2 — Gestión de la Información y Tecnología (Temas 5.2 y 5.3)",
          terms: [
            { num: 11, termino: "Gestión de la información", definicion: "Conjunto de procesos para recopilar, organizar, almacenar y distribuir información de forma eficiente.", caso: "2, 4" },
            { num: 12, termino: "Flujo de información", definicion: "Movimiento y trayectoria de los datos dentro de una organización, desde su origen hasta su uso.", caso: "1, 5" },
            { num: 13, termino: "Información accionable", definicion: "Dato que permite tomar una decisión o ejecutar una acción concreta y verificable.", caso: "2" },
            { num: 14, termino: "Fuente de información confiable", definicion: "Origen de datos que garantiza precisión, oportunidad, relevancia y verificabilidad.", caso: "2" },
            { num: 15, termino: "Sobrecarga de información (infoxicación)", definicion: "Estado en el que el volumen de información disponible supera la capacidad de procesamiento efectivo.", caso: "2" },
            { num: 16, termino: "Repositorio de información", definicion: "Sistema centralizado donde se almacena, organiza y recupera información de forma estructurada.", caso: "4" },
            { num: 17, termino: "Dashboard (tablero de indicadores)", definicion: "Interfaz visual que consolida y presenta indicadores clave para facilitar la toma de decisiones.", caso: "4" },
            { num: 18, termino: "Herramienta colaborativa", definicion: "Tecnología que facilita el trabajo conjunto entre personas, equipos o áreas geográficamente dispersas.", caso: "3" },
            { num: 19, termino: "Automatización de reportes", definicion: "Proceso mediante el cual la generación y distribución de informes se realiza de forma automática.", caso: "4" },
            { num: 20, termino: "Toma de decisiones basada en datos", definicion: "Proceso en el que las decisiones directivas se fundamentan en evidencia cuantitativa y analítica verificable.", caso: "4, 5" }
          ]
        }
      ]
    },
    anexo2: {
      kicker: "ANEXO 02 · DATOS DE REFERENCIA · Workbook Módulo 5 · Línea Base Organizacional",
      title: "Anexo 2: Perfil Organizacional de Kinetix Performance Sports",
      intro:
        "Este anexo presenta un perfil de referencia de la empresa Kinetix Performance Sports para facilitar la consulta durante el desarrollo de los cinco casos. Todos los datos son ficticios y de uso exclusivamente didáctico.",
      estructura: [
        ["CEO / Dirección General", "Ing. Alejandro Torres Villanueva", "1", "4.74 (Excepcional)", "92"],
        ["Compras y Cadena de Suministro", "Lic. Patricia Guerrero Salinas", "3", "N/D", "N/D"],
        ["Operaciones Retail & CEDIS", "Lic. Roberto Hernández Mora", "59", "4.46 (Sobresaliente)", "78"],
        ["Marketing, CX & Alianzas", "Mtra. Diana Cruz Espinoza", "10", "4.63 (Excepcional)", "85"],
        ["CEDIS (Logística y Fulfillment)", "Ing. Raúl Domínguez Paredes", "6", "3.83 (En Desarrollo)", "62"],
        ["Experiencia del Cliente (CX)", "Lic. Alejandra Ríos Mendoza", "7", "3.84 (En Desarrollo)", "64"]
      ],
      sucursales: [
        ["Flagship Masaryk", "CDMX", "Flagship", "Carmen Sánchez Nava", "$382,411", "98.5%"],
        ["Concept Santa Fe", "CDMX", "Concept", "N/D", "N/D", "N/D"],
        ["Flagship San Pedro", "Monterrey", "Flagship", "N/D", "$324,890", "93.9%"],
        ["Concept Andares", "Guadalajara", "Concept", "Lorena Figueras López", "$184,320", "82.6%"],
        ["Concept Angelópolis", "Puebla", "Concept", "N/D", "N/D", "N/D"],
        ["Concept Antea", "Querétaro", "Concept", "N/D", "N/D", "N/D"],
        ["Concept Altabrisa", "Mérida", "Concept", "N/D", "N/D", "N/D"],
        ["Concept Plaza Mayor", "León", "Concept", "N/D", "N/D", "N/D"],
        ["Outlet Performance Lerma", "Lerma", "Outlet", "N/D", "N/D", "N/D"],
        ["E-commerce", "Nacional", "Digital", "N/D", "$368,450", "100%"]
      ],
      indicadoresGlobales: [
        ["Ventas totales organización", "$2,364,620 MXN", "N/D"],
        ["Total colaboradores", "80 personas", "N/D"],
        ["Promedio 360° organizacional", "3.94 / 5.0", "4.0 / 5.0"],
        ["Competencia COM (Comunicación)", "3.99 / 5.0", "4.0 / 5.0"],
        ["eNPS organizacional", "72.4", "≥75"],
        ["Tasa de asistencia efectiva", "94.3%", ">95%"],
        ["Canal presencial (% ventas)", "60.5%", "N/D"],
        ["Canal digital / e-commerce", "19.2%", "N/D"],
        ["Canal B2B institucional", "20.3%", "N/D"],
        ['Colaboradores "En Desarrollo"', "31 (38.8%)", "< 30%"]
      ]
    }
  }
};

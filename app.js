// ============================================================================
// Módulo 5 · Casos de Estudio Aplicados (Kinetix Performance Sports)
// Lógica de navegación por submenús, búsqueda y renderizado
// ============================================================================

(function () {
  "use strict";

  const state = {
    sectionId: "intro",
    submenuId: "bienvenida",
    expandedGroups: new Set(["intro", "caso-1"]),
    glossaryQuery: "",
    glossaryFilter: "all"
  };

  // Ordered sequence of all routes for Previous/Next navigation
  const ALL_ROUTES = [];
  WORKBOOK_DATA.navSections.forEach((sec) => {
    sec.submenus.forEach((sub) => {
      ALL_ROUTES.push({
        sectionId: sec.id,
        submenuId: sub.id,
        sectionLabel: sec.label,
        submenuLabel: sub.label
      });
    });
  });

  // DOM References
  const navTreeEl = document.getElementById("navTree");
  const breadcrumbsEl = document.getElementById("breadcrumbs");
  const sectionSubmenusBarEl = document.getElementById("sectionSubmenusBar");
  const contentContainerEl = document.getElementById("contentContainer");
  const viewFooterEl = document.getElementById("viewFooter");
  const quickCaseSelectEl = document.getElementById("quickCaseSelect");
  const globalSearchInput = document.getElementById("globalSearchInput");
  const searchResultsPanel = document.getElementById("searchResultsPanel");
  const sidebarEl = document.getElementById("sidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const canvasModal = document.getElementById("canvasModal");

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function findSection(sectionId) {
    return WORKBOOK_DATA.navSections.find((s) => s.id === sectionId) || WORKBOOK_DATA.navSections[0];
  }

  function parseHash() {
    const raw = window.location.hash.replace(/^#/, "").trim();
    if (!raw) return null;
    const [secId, subId] = raw.split("/");
    const sec = WORKBOOK_DATA.navSections.find((s) => s.id === secId);
    if (!sec) return null;
    const sub = sec.submenus.find((m) => m.id === subId) || sec.submenus[0];
    return { sectionId: sec.id, submenuId: sub.id };
  }

  function navigateTo(sectionId, submenuId, updateHash = true) {
    const sec = findSection(sectionId);
    const sub = sec.submenus.find((m) => m.id === submenuId) || sec.submenus[0];

    state.sectionId = sec.id;
    state.submenuId = sub.id;
    state.expandedGroups.add(sec.id);

    if (updateHash) {
      const targetHash = `#${sec.id}/${sub.id}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
    }

    closeMobileMenu();
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openMobileMenu() {
    sidebarEl.classList.add("is-mobile-open");
    sidebarBackdrop.classList.add("is-visible");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    sidebarEl.classList.remove("is-mobile-open");
    sidebarBackdrop.classList.remove("is-visible");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }

  function openCanvasModal() {
    canvasModal.classList.remove("hidden");
  }

  function closeCanvasModal() {
    canvasModal.classList.add("hidden");
  }

  // --------------------------------------------------------------------------
  // Render Sidebar Tree (Cases separated by expandable submenus)
  // --------------------------------------------------------------------------
  function renderSidebarNav() {
    navTreeEl.innerHTML = WORKBOOK_DATA.navSections
      .map((sec) => {
        const isCurrentSection = state.sectionId === sec.id;
        const isOpen = state.expandedGroups.has(sec.id) || isCurrentSection;

        const submenusHtml = sec.submenus
          .map((sub) => {
            const isSubActive = isCurrentSection && state.submenuId === sub.id;
            return `
              <button
                type="button"
                class="nav-sub-btn ${isSubActive ? "is-active" : ""}"
                data-section="${sec.id}"
                data-submenu="${sub.id}"
              >
                ${escapeHtml(sub.label)}
              </button>
            `;
          })
          .join("");

        return `
          <div class="nav-group ${isCurrentSection ? "is-active" : ""} ${isOpen ? "is-open" : ""}">
            <button
              type="button"
              class="nav-parent-btn"
              data-toggle-group="${sec.id}"
              aria-expanded="${isOpen ? "true" : "false"}"
            >
              <div class="nav-parent-main">
                <div class="nav-parent-top">
                  <span class="nav-label">${escapeHtml(sec.label)}</span>
                  <span class="nav-badge ${sec.badgeType}">${escapeHtml(sec.badge)}</span>
                </div>
                <div class="nav-short-title">${escapeHtml(sec.shortTitle)}</div>
              </div>
              <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="nav-submenu" role="group" aria-label="Submenús de ${escapeHtml(sec.label)}">
              ${submenusHtml}
            </div>
          </div>
        `;
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // Render Topbar, Quick Select & Horizontal Submenu Tabs
  // --------------------------------------------------------------------------
  function renderTopControls() {
    const sec = findSection(state.sectionId);
    const sub = sec.submenus.find((m) => m.id === state.submenuId) || sec.submenus[0];

    breadcrumbsEl.innerHTML = `
      <span>Módulo 5</span>
      <span class="sep">/</span>
      <span>${escapeHtml(sec.label)}: ${escapeHtml(sec.shortTitle)}</span>
      <span class="sep">/</span>
      <strong>${escapeHtml(sub.label)}</strong>
    `;

    // Horizontal submenu tabs for active case/section
    sectionSubmenusBarEl.innerHTML = sec.submenus
      .map((item) => {
        const active = item.id === sub.id;
        return `
          <button
            type="button"
            class="submenu-tab ${active ? "is-active" : ""}"
            data-section="${sec.id}"
            data-submenu="${item.id}"
            aria-current="${active ? "page" : "false"}"
          >
            ${escapeHtml(item.label)}
          </button>
        `;
      })
      .join("");

    // Quick jump select grouped by case
    quickCaseSelectEl.innerHTML = WORKBOOK_DATA.navSections
      .map((s) => {
        const options = s.submenus
          .map((m) => {
            const val = `${s.id}/${m.id}`;
            const selected = s.id === state.sectionId && m.id === state.submenuId ? "selected" : "";
            return `<option value="${val}" ${selected}>${escapeHtml(s.label)} — ${escapeHtml(m.label)}</option>`;
          })
          .join("");
        return `<optgroup label="${escapeHtml(s.label)}: ${escapeHtml(s.shortTitle)}">${options}</optgroup>`;
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // Block Renderers (Paragraphs, Lists, Tables, Callouts, Cards)
  // --------------------------------------------------------------------------
  function renderBlock(block) {
    if (block.type === "p") {
      if (block.highlight) {
        return `<div class="highlight-statement">${escapeHtml(block.text)}</div>`;
      }
      return `<p>${escapeHtml(block.text)}</p>`;
    }

    if (block.type === "subtitle") {
      return `<h4 class="block-subtitle">${escapeHtml(block.text)}</h4>`;
    }

    if (block.type === "list") {
      const tag = block.ordered ? "ol" : "ul";
      const items = block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      return `<${tag} class="styled-list">${items}</${tag}>`;
    }

    if (block.type === "callout") {
      const cls = block.variant === "info" ? "callout info" : "callout";
      return `<div class="${cls}">${escapeHtml(block.text)}</div>`;
    }

    if (block.type === "table") {
      const ths = block.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("");
      const trs = block.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
        .join("");
      return `
        <div class="table-wrap">
          <table>
            <thead><tr>${ths}</tr></thead>
            <tbody>${trs}</tbody>
          </table>
        </div>
      `;
    }

    if (block.type === "cards") {
      const cards = block.items
        .map(
          (c) => `
          <div class="incident-card">
            <span class="incident-tag">${escapeHtml(c.tag)}</span>
            <h4>${escapeHtml(c.title)}</h4>
            <p>${escapeHtml(c.text)}</p>
          </div>
        `
        )
        .join("");
      return `<div class="incidents-grid">${cards}</div>`;
    }

    return "";
  }

  // --------------------------------------------------------------------------
  // View Renderers: Intro
  // --------------------------------------------------------------------------
  function renderIntroView() {
    const { meta, intro } = WORKBOOK_DATA;

    if (state.submenuId === "bienvenida") {
      const caseCardsHtml = intro.progresion
        .map((row) => {
          const caseKey = `caso-${row.num}`;
          const caseObj = WORKBOOK_DATA.cases[caseKey];
          return `
            <div class="case-mini-card">
              <div>
                <div class="nav-parent-top">
                  <span class="nav-label">Caso ${escapeHtml(row.num)}</span>
                  <span class="nav-badge ${caseObj.aiAllowed ? (row.num === "5" ? "final" : "ai") : "no-ai"}">${escapeHtml(row.ia)}</span>
                  <span class="nav-badge neutral">${escapeHtml(row.tema)}</span>
                </div>
                <h4 style="margin:6px 0 6px;">${escapeHtml(row.caso)}</h4>
                <p style="margin:0; font-size:0.86rem; color:var(--ink-600);">${escapeHtml(row.problema)}</p>
              </div>
              <div class="case-mini-actions">
                <button type="button" class="mini-sub-btn" data-nav="${caseKey}/narrativa">Narrativa</button>
                <button type="button" class="mini-sub-btn" data-nav="${caseKey}/actividad">Actividad ${escapeHtml(row.num)}</button>
                <button type="button" class="mini-sub-btn" data-nav="${caseKey}/evaluacion">Evaluación</button>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="hero-card">
          <span class="hero-kicker">${escapeHtml(meta.institution)} · ${escapeHtml(meta.guideLabel)}</span>
          <h2>${escapeHtml(meta.module)}</h2>
          <p class="hero-subtitle">${escapeHtml(meta.title)} — Portal de consulta para alumnos</p>

          <div class="callout canvas-box">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Entrega de respuestas en Canvas
            </h4>
            <p>${escapeHtml(meta.canvasNotice)}</p>
          </div>

          <div class="meta-grid">
            <div class="meta-item">
              <div class="meta-item-label">Programa</div>
              <div class="meta-item-value">${escapeHtml(meta.certification)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-item-label">Nivel</div>
              <div class="meta-item-value">${escapeHtml(meta.level)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-item-label">Empresa Caso</div>
              <div class="meta-item-value">${escapeHtml(meta.company)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-item-label">Período</div>
              <div class="meta-item-value">${escapeHtml(meta.period)}</div>
            </div>
          </div>

          <div class="callout" style="margin-top:16px;">
            <strong>Nota académica:</strong> ${escapeHtml(meta.academicNote)}
          </div>
        </div>

        <div class="content-card">
          <h3>Introducción al Documento de Casos</h3>
          ${intro.introduccionTexto.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        </div>

        <div class="content-card">
          <h3>Contexto Organizacional: Kinetix Performance Sports</h3>
          <p>${escapeHtml(intro.contextoOrganizacional)}</p>
          <div style="margin-top:12px;">
            <button type="button" class="btn-outline" data-nav="anexos/anexo-2">Consultar Anexo 2: Perfil Organizacional completo →</button>
          </div>
        </div>

        <div class="content-card">
          <h3>Acceso Rápido por Caso y Submenús</h3>
          <p style="color:var(--ink-600); font-size:0.9rem;">Selecciona directamente la sección de consulta de cada caso:</p>
          <div class="cases-overview-grid">${caseCardsHtml}</div>
        </div>
      `;
    }

    if (state.submenuId === "progresion") {
      const indiceRows = intro.indice
        .map(
          (row) => `
          <tr>
            <td><strong>${escapeHtml(row.seccion)}</strong></td>
            <td>${escapeHtml(row.contenido)}</td>
            <td>${escapeHtml(row.enfoque)}</td>
            <td><button type="button" class="table-link-btn" data-nav="${row.target}">Abrir</button></td>
          </tr>
        `
        )
        .join("");

      const progRows = intro.progresion
        .map(
          (row) => `
          <tr>
            <td><strong>${escapeHtml(row.num)}</strong></td>
            <td>${escapeHtml(row.caso)}</td>
            <td>${escapeHtml(row.problema)}</td>
            <td>${escapeHtml(row.ia)}</td>
            <td>${escapeHtml(row.tema)}</td>
            <td><button type="button" class="table-link-btn" data-nav="${row.target}">Ir al caso</button></td>
          </tr>
        `
        )
        .join("");

      return `
        <div class="hero-card">
          <span class="hero-kicker">Mapa del Workbook · Módulo 5</span>
          <h2>Progresión Pedagógica e Índice de Contenidos</h2>
          <p class="hero-subtitle">Los primeros dos casos se resuelven sin IA para fortalecer el análisis humano; del caso 3 al 5 se integra IA Generativa, Analítica e Integrada.</p>
        </div>

        <div class="content-card">
          <h3>Resumen de la Progresión Pedagógica</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caso</th>
                  <th>Problema Ancla</th>
                  <th>Uso de IA</th>
                  <th>Tema</th>
                  <th>Consulta</th>
                </tr>
              </thead>
              <tbody>${progRows}</tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>Índice de Contenidos</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Sección</th>
                  <th>Contenido del Workbook</th>
                  <th>Enfoque Pedagógico</th>
                  <th>Acceso</th>
                </tr>
              </thead>
              <tbody>${indiceRows}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    // instrucciones
    return `
      <div class="hero-card">
        <span class="hero-kicker">Reglas de Trabajo y Entrega Oficial</span>
        <h2>Instrucciones Generales para el Estudiante</h2>
        <p class="hero-subtitle">Indicaciones obligatorias para el desarrollo de los 5 casos y su envío en la plataforma Canvas.</p>
      </div>

      <div class="content-card">
        <h3>Reglas del Módulo</h3>
        <ul class="styled-list">
          ${intro.instruccionesGenerales.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      <div class="content-card">
        <h3>¿Dónde y cómo se entregan las respuestas?</h3>
        <div class="callout canvas-box">
          <h4>Subida de respuestas y entregables en Canvas</h4>
          <p>
            Este sitio web es únicamente un portal interactivo de consulta para revisar las narrativas, tablas de datos, instrucciones y rúbricas de evaluación.
            <strong>Todas tus respuestas, diagramas, diagnósticos, prototipos y el entregable final deben subirse a la plataforma Canvas</strong> en la tarea asignada para cada caso (Actividad 1, Actividad 2, Actividad 3, Actividad 4 y Actividad 5).
          </p>
        </div>
        <div style="margin-top:16px;">
          <button type="button" class="btn-primary" id="inlineCanvasGuideBtn">Abrir lista detallada de entregables para Canvas</button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // View Renderers: Cases 1-5
  // --------------------------------------------------------------------------
  function renderCaseBanner(c) {
    return `
      <div class="case-banner">
        <div class="case-banner-top">
          <span class="case-tag">${escapeHtml(c.headerTag)}</span>
          <div class="case-banner-badges">
            <span class="pill-ai ${c.aiAllowed ? "yes-ai" : "no-ai"}">
              ${c.aiAllowed ? "✓ Con uso de IA permitido" : "✕ Sin herramientas de IA"}
            </span>
            <span class="pill-canvas">Entrega en Canvas</span>
          </div>
        </div>
        <h2>${escapeHtml(c.title)}</h2>
        <p class="case-banner-kicker">${escapeHtml(c.kicker)}</p>
      </div>
    `;
  }

  function renderCaseView(caseKey) {
    const c = WORKBOOK_DATA.cases[caseKey];
    const bannerHtml = renderCaseBanner(c);

    if (state.submenuId === "narrativa") {
      const metaGrid = `
        <div class="content-card">
          <h3>Ficha Técnica del Caso</h3>
          <div class="meta-grid">
            ${c.metaTable
              .map(
                (m) => `
              <div class="meta-item">
                <div class="meta-item-label">${escapeHtml(m.label)}</div>
                <div class="meta-item-value">${escapeHtml(m.value)}</div>
              </div>
            `
              )
              .join("")}
          </div>
          <div class="callout info" style="margin-top:16px; margin-bottom:0;">
            <strong>Enfoque del caso:</strong> ${escapeHtml(c.visualCaption)}
          </div>
        </div>
      `;

      const jumpChips = `
        <div class="section-anchor-jump" aria-label="Saltar a subsección de la narrativa">
          ${c.narrativa
            .map(
              (sec) => `
            <button type="button" class="jump-chip" data-scroll-to="sec-${sec.id}">${escapeHtml(sec.title)}</button>
          `
            )
            .join("")}
        </div>
      `;

      const sectionsHtml = c.narrativa
        .map(
          (sec) => `
          <div class="content-card" id="sec-${sec.id}">
            <h3>${escapeHtml(sec.title)}</h3>
            ${sec.blocks.map(renderBlock).join("")}
          </div>
        `
        )
        .join("");

      const nextAction = `
        <div class="callout canvas-box">
          <h4>Siguiente paso: Revisar Actividad ${escapeHtml(c.number)} y subir respuesta a Canvas</h4>
          <p>Una vez leída la narrativa completa, consulta el submenú de instrucciones para conocer los requisitos del entregable que deberás subir a <strong>Canvas</strong>.</p>
          <div style="margin-top:12px;">
            <button type="button" class="btn-primary" data-nav="${caseKey}/actividad">Ir a Instrucciones de la Actividad ${escapeHtml(c.number)} →</button>
          </div>
        </div>
      `;

      return bannerHtml + metaGrid + jumpChips + sectionsHtml + nextAction;
    }

    if (state.submenuId === "actividad") {
      const act = c.actividad;

      let stepsOrSectionsHtml = "";
      if (act.pasos) {
        stepsOrSectionsHtml = `
          <div class="content-card">
            <h3>Lo que debes hacer</h3>
            <div class="step-list">
              ${act.pasos
                .map((step) => {
                  const subHtml = step.subitems
                    ? `<ul>${step.subitems.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`
                    : "";
                  const tableHtml = step.tableTemplate
                    ? renderBlock({ type: "table", ...step.tableTemplate })
                    : "";
                  const exampleHtml = step.example
                    ? `<div class="callout" style="margin-top:10px; margin-bottom:0;">${escapeHtml(step.example)}</div>`
                    : "";
                  return `
                    <div class="step-card">
                      <div class="step-card-title">${escapeHtml(step.title)}</div>
                      ${subHtml}
                      ${tableHtml}
                      ${exampleHtml}
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        `;
      } else if (act.seccionesObligatorias) {
        stepsOrSectionsHtml = `
          <div class="content-card">
            <h3>Estructura del Documento Ejecutivo (5 Secciones Obligatorias)</h3>
            <p>Elabora un documento ejecutivo que responda a las 5 preguntas del Comité Directivo de Kinetix mediante las siguientes secciones:</p>
            ${act.seccionesObligatorias
              .map(
                (sec) => `
              <div class="obligatory-section ${sec.featured ? "is-featured" : ""}">
                <h4>${escapeHtml(sec.titulo)}</h4>
                <p>${escapeHtml(sec.descripcion)}</p>
                ${
                  sec.bullets
                    ? `<ul class="styled-list">${sec.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>
        `;
      }

      return `
        ${bannerHtml}
        <div class="content-card">
          <h3>${escapeHtml(act.title)}</h3>
          <div class="callout">
            <strong>🎯 Objetivo de Aprendizaje:</strong> ${escapeHtml(act.objetivo)}
          </div>
          <div class="callout ${c.aiAllowed ? "yes-ai" : "no-ai"}">
            ${c.aiAllowed ? "✅" : "❌"} ${escapeHtml(act.iaRule)}
          </div>
        </div>

        ${stepsOrSectionsHtml}

        <div class="callout canvas-box">
          <h4>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            ${escapeHtml(act.canvasEntrega.titulo)}
          </h4>
          <p>${escapeHtml(act.canvasEntrega.descripcion)}</p>
        </div>
      `;
    }

    // evaluacion
    const ev = c.evaluacion;
    const criteriaRows = ev.criterios
      .map(
        (row) => `
        <tr>
          <td><strong>${escapeHtml(row.criterio)}</strong></td>
          <td><strong>${escapeHtml(row.ponderacion)}</strong></td>
          <td>${escapeHtml(row.indicador)}</td>
        </tr>
      `
      )
      .join("");

    return `
      ${bannerHtml}
      <div class="content-card">
        <h3>Criterios de Evaluación</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>${caseKey === "caso-5" ? "Sección" : "Criterio"}</th>
                <th>Ponderación</th>
                <th>Indicadores de Logro</th>
              </tr>
            </thead>
            <tbody>${criteriaRows}</tbody>
          </table>
        </div>
        <div class="callout info" style="margin-top:16px; margin-bottom:0;">
          <strong>Alineación Temática:</strong> ${escapeHtml(ev.alineacion)}
        </div>
      </div>

      <div class="callout canvas-box">
        <h4>Recordatorio de Entrega en Canvas</h4>
        <p>${escapeHtml(c.actividad.canvasEntrega.descripcion)}</p>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // View Renderers: Anexos
  // --------------------------------------------------------------------------
  function renderAnexosView() {
    if (state.submenuId === "anexo-1") {
      const a1 = WORKBOOK_DATA.anexos.anexo1;
      const query = state.glossaryQuery.trim().toLowerCase();

      const bloquesHtml = a1.bloques
        .filter((b) => state.glossaryFilter === "all" || state.glossaryFilter === b.id)
        .map((b) => {
          const filteredTerms = b.terms.filter((t) => {
            if (!query) return true;
            return (
              t.termino.toLowerCase().includes(query) ||
              t.definicion.toLowerCase().includes(query) ||
              t.caso.toLowerCase().includes(query)
            );
          });

          if (!filteredTerms.length) return "";

          const rows = filteredTerms
            .map(
              (t) => `
              <tr>
                <td><strong>${t.num}</strong></td>
                <td><strong>${escapeHtml(t.termino)}</strong></td>
                <td>${escapeHtml(t.definicion)}</td>
                <td>Caso ${escapeHtml(t.caso)}</td>
              </tr>
            `
            )
            .join("");

          return `
            <div class="content-card">
              <h3>${escapeHtml(b.title)}</h3>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Término</th>
                      <th>Definición Didáctica</th>
                      <th>Caso Ancla</th>
                    </tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="hero-card">
          <span class="hero-kicker">${escapeHtml(a1.kicker)}</span>
          <h2>${escapeHtml(a1.title)}</h2>
          <p class="hero-subtitle">${escapeHtml(a1.intro)}</p>

          <div class="glossary-controls">
            <input
              type="search"
              id="glossarySearchInput"
              placeholder="Filtrar términos, definiciones o caso ancla..."
              value="${escapeHtml(state.glossaryQuery)}"
              aria-label="Filtrar glosario"
            />
            <div class="filter-pill-group">
              <button type="button" class="filter-pill ${state.glossaryFilter === "all" ? "is-active" : ""}" data-glossary-filter="all">Todos (20)</button>
              <button type="button" class="filter-pill ${state.glossaryFilter === "bloque-1" ? "is-active" : ""}" data-glossary-filter="bloque-1">Bloque 1 (Tema 5.1)</button>
              <button type="button" class="filter-pill ${state.glossaryFilter === "bloque-2" ? "is-active" : ""}" data-glossary-filter="bloque-2">Bloque 2 (Temas 5.2 y 5.3)</button>
            </div>
          </div>
        </div>
        ${bloquesHtml || '<div class="content-card"><p>No se encontraron términos que coincidan con tu búsqueda.</p></div>'}
      `;
    }

    // anexo-2
    const a2 = WORKBOOK_DATA.anexos.anexo2;
    return `
      <div class="hero-card">
        <span class="hero-kicker">${escapeHtml(a2.kicker)}</span>
        <h2>${escapeHtml(a2.title)}</h2>
        <p class="hero-subtitle">${escapeHtml(a2.intro)}</p>
      </div>

      <div class="content-card">
        <h3>Estructura Organizacional</h3>
        ${renderBlock({
          type: "table",
          headers: ["Área / Gerencia", "Responsable", "Colaboradores", "Promedio 360°", "eNPS"],
          rows: a2.estructura
        })}
      </div>

      <div class="content-card">
        <h3>Red de Sucursales (Octubre 2026)</h3>
        ${renderBlock({
          type: "table",
          headers: ["Sucursal", "Ciudad", "Formato", "Store Manager", "Ventas Oct.", "Asistencia"],
          rows: a2.sucursales
        })}
      </div>

      <div class="content-card">
        <h3>Indicadores Globales del Módulo</h3>
        ${renderBlock({
          type: "table",
          headers: ["Indicador Organizacional", "Valor Octubre 2026", "Meta"],
          rows: a2.indicadoresGlobales
        })}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Render Footer Prev/Next
  // --------------------------------------------------------------------------
  function renderFooterNav() {
    const idx = ALL_ROUTES.findIndex(
      (r) => r.sectionId === state.sectionId && r.submenuId === state.submenuId
    );
    const prev = idx > 0 ? ALL_ROUTES[idx - 1] : null;
    const next = idx < ALL_ROUTES.length - 1 ? ALL_ROUTES[idx + 1] : null;

    viewFooterEl.innerHTML = `
      <div>
        ${
          prev
            ? `<button type="button" class="footer-nav-btn" data-nav="${prev.sectionId}/${prev.submenuId}">
                ← ${escapeHtml(prev.sectionLabel)}: ${escapeHtml(prev.submenuLabel)}
              </button>`
            : ""
        }
      </div>
      <div>
        ${
          next
            ? `<button type="button" class="footer-nav-btn" data-nav="${next.sectionId}/${next.submenuId}">
                ${escapeHtml(next.sectionLabel)}: ${escapeHtml(next.submenuLabel)} →
              </button>`
            : ""
        }
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Main Render
  // --------------------------------------------------------------------------
  function renderContent() {
    let html = "";
    if (state.sectionId === "intro") {
      html = renderIntroView();
    } else if (state.sectionId === "anexos") {
      html = renderAnexosView();
    } else if (WORKBOOK_DATA.cases[state.sectionId]) {
      html = renderCaseView(state.sectionId);
    }
    contentContainerEl.innerHTML = html;
  }

  function renderAll() {
    renderSidebarNav();
    renderTopControls();
    renderContent();
    renderFooterNav();
  }

  // --------------------------------------------------------------------------
  // Global Search Across All Cases & Annexes
  // --------------------------------------------------------------------------
  function runGlobalSearch(rawQuery) {
    const q = rawQuery.trim().toLowerCase();
    if (!q) {
      searchResultsPanel.classList.add("hidden");
      searchResultsPanel.innerHTML = "";
      return;
    }

    const matches = [];

    // Search Intro
    if (
      WORKBOOK_DATA.intro.contextoOrganizacional.toLowerCase().includes(q) ||
      "instrucciones canvas entrega progresion".includes(q)
    ) {
      matches.push({
        title: "Guía General — Contexto, Progresión y Entrega en Canvas",
        route: "intro/instrucciones",
        preview: "Reglas del módulo e instrucciones de entrega en Canvas."
      });
    }

    // Search Cases 1-5
    Object.entries(WORKBOOK_DATA.cases).forEach(([caseKey, c]) => {
      const narrativaText = JSON.stringify(c.narrativa).toLowerCase();
      const actividadText = JSON.stringify(c.actividad).toLowerCase();
      const evalText = JSON.stringify(c.evaluacion).toLowerCase();
      const metaText = JSON.stringify(c.metaTable).toLowerCase();

      if (c.title.toLowerCase().includes(q) || narrativaText.includes(q) || metaText.includes(q)) {
        matches.push({
          title: `${c.title} — Narrativa del Caso`,
          route: `${caseKey}/narrativa`,
          preview: c.visualCaption
        });
      }
      if (actividadText.includes(q)) {
        matches.push({
          title: `${c.title} — ${c.actividad.title}`,
          route: `${caseKey}/actividad`,
          preview: c.actividad.objetivo
        });
      }
      if (evalText.includes(q)) {
        matches.push({
          title: `${c.title} — Criterios de Evaluación`,
          route: `${caseKey}/evaluacion`,
          preview: c.evaluacion.alineacion
        });
      }
    });

    // Search Anexos
    const a1Text = JSON.stringify(WORKBOOK_DATA.anexos.anexo1).toLowerCase();
    if (a1Text.includes(q)) {
      matches.push({
        title: "Anexo 1: Glosario de Términos (20 términos)",
        route: "anexos/anexo-1",
        preview: "Coincidencia encontrada en los conceptos del Módulo 5."
      });
    }

    const a2Text = JSON.stringify(WORKBOOK_DATA.anexos.anexo2).toLowerCase();
    if (a2Text.includes(q)) {
      matches.push({
        title: "Anexo 2: Perfil Organizacional de Kinetix",
        route: "anexos/anexo-2",
        preview: "Estructura organizacional, sucursales e indicadores globales."
      });
    }

    searchResultsPanel.classList.remove("hidden");
    searchResultsPanel.innerHTML = `
      <div class="search-results-header">
        <strong>Resultados para "${escapeHtml(rawQuery)}" (${matches.length})</strong>
        <button type="button" class="mini-sub-btn" id="clearSearchBtn">Cerrar búsqueda</button>
      </div>
      ${
        matches.length
          ? matches
              .slice(0, 12)
              .map(
                (m) => `
              <div class="search-result-item" data-search-nav="${m.route}">
                <div>
                  <strong>${escapeHtml(m.title)}</strong>
                  <div style="font-size:0.82rem; color:var(--ink-600);">${escapeHtml(m.preview)}</div>
                </div>
                <span class="table-link-btn">Ver →</span>
              </div>
            `
              )
              .join("")
          : '<p style="margin:0; color:var(--ink-600);">No se encontraron coincidencias. Intenta con palabras como "Andares", "AeroStrata", "chatbot", "KPI", "Canvas" o "360".</p>'
      }
    `;
  }

  // --------------------------------------------------------------------------
  // Event Delegation
  // --------------------------------------------------------------------------
  document.addEventListener("click", (e) => {
    // Toggle sidebar submenu accordion
    const toggleBtn = e.target.closest("[data-toggle-group]");
    if (toggleBtn) {
      const grpId = toggleBtn.getAttribute("data-toggle-group");
      if (state.expandedGroups.has(grpId)) {
        state.expandedGroups.delete(grpId);
      } else {
        state.expandedGroups.add(grpId);
      }
      renderSidebarNav();
      return;
    }

    // Sidebar submenu item or top horizontal submenu tab
    const subBtn = e.target.closest("[data-section][data-submenu]");
    if (subBtn) {
      navigateTo(subBtn.getAttribute("data-section"), subBtn.getAttribute("data-submenu"));
      return;
    }

    // Any route link button
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      const [secId, subId] = navBtn.getAttribute("data-nav").split("/");
      navigateTo(secId, subId);
      return;
    }

    // Scroll to narrative anchor
    const jumpBtn = e.target.closest("[data-scroll-to]");
    if (jumpBtn) {
      const target = document.getElementById(jumpBtn.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Glossary filter pills
    const filterBtn = e.target.closest("[data-glossary-filter]");
    if (filterBtn) {
      state.glossaryFilter = filterBtn.getAttribute("data-glossary-filter");
      renderContent();
      return;
    }

    // Search result click
    const searchItem = e.target.closest("[data-search-nav]");
    if (searchItem) {
      const [secId, subId] = searchItem.getAttribute("data-search-nav").split("/");
      searchResultsPanel.classList.add("hidden");
      globalSearchInput.value = "";
      navigateTo(secId, subId);
      return;
    }

    if (e.target.id === "clearSearchBtn") {
      globalSearchInput.value = "";
      searchResultsPanel.classList.add("hidden");
      return;
    }

    if (e.target.id === "inlineCanvasGuideBtn") {
      openCanvasModal();
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "glossarySearchInput") {
      state.glossaryQuery = e.target.value;
      const cursorPos = e.target.selectionStart;
      renderContent();
      const restored = document.getElementById("glossarySearchInput");
      if (restored) {
        restored.focus();
        restored.setSelectionRange(cursorPos, cursorPos);
      }
    }
  });

  quickCaseSelectEl.addEventListener("change", (e) => {
    const [secId, subId] = e.target.value.split("/");
    navigateTo(secId, subId);
  });

  globalSearchInput.addEventListener("input", (e) => {
    runGlobalSearch(e.target.value);
  });

  mobileMenuBtn.addEventListener("click", () => {
    if (sidebarEl.classList.contains("is-mobile-open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  sidebarBackdrop.addEventListener("click", closeMobileMenu);

  document.getElementById("openCanvasModalBtn").addEventListener("click", openCanvasModal);
  document.getElementById("mobileCanvasBtn").addEventListener("click", openCanvasModal);
  document.getElementById("closeCanvasModalBtn").addEventListener("click", closeCanvasModal);
  document.getElementById("confirmCanvasModalBtn").addEventListener("click", closeCanvasModal);
  canvasModal.addEventListener("click", (e) => {
    if (e.target === canvasModal) closeCanvasModal();
  });

  document.getElementById("printViewBtn").addEventListener("click", () => {
    window.print();
  });

  window.addEventListener("hashchange", () => {
    const parsed = parseHash();
    if (parsed) {
      navigateTo(parsed.sectionId, parsed.submenuId, false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCanvasModal();
      closeMobileMenu();
    }
  });

  // Initial Boot
  const initialRoute = parseHash();
  if (initialRoute) {
    state.sectionId = initialRoute.sectionId;
    state.submenuId = initialRoute.submenuId;
    state.expandedGroups.add(initialRoute.sectionId);
  }
  renderAll();
})();

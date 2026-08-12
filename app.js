(() => {
  "use strict";
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const node = (tag, className, text) => {
    const item = document.createElement(tag);
    if (className) item.className = className;
    if (text !== undefined) item.textContent = text;
    return item;
  };

  const escapeHtml = (value = "") => String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

  $("#profile-label").textContent = data.profile.label;
  $("#hero-title").textContent = data.profile.name;
  $("#profile-tagline").textContent = data.profile.tagline;
  $("#profile-summary").textContent = data.profile.summary;
  $("#github-link").href = data.profile.github;
  $("#email-link").href = `mailto:${data.profile.email}`;
  $("#email-text").textContent = data.profile.email;
  $("#phone-link").href = `tel:${data.profile.phone}`;
  $("#phone-text").textContent = data.profile.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3");
  $("#copyright-year").textContent = new Date().getFullYear();

  const detailsById = new Map(data.timeline.map((item) => [item.id, item]));
  const proofGrid = $("#proof-grid");
  data.proof.forEach((proof) => {
    const card = node("button", `proof-card tone-${proof.tone}`);
    card.type = "button";
    card.setAttribute("aria-label", `查看 ${proof.label} 详情`);
    card.innerHTML = `<small>${escapeHtml(proof.label)}</small><strong>${escapeHtml(proof.value)}</strong><span>${escapeHtml(proof.title)}</span><p>${escapeHtml(proof.note)}</p>`;
    card.addEventListener("click", () => openDetail(detailsById.get(proof.target)));
    proofGrid.append(card);
  });

  let activeFilter = "all";
  const filters = $("#filters");
  const timeline = $("#timeline-list");

  data.filters.forEach((filter, index) => {
    const button = node("button", `filter-tab${index === 0 ? " is-active" : ""}`, filter.label);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === 0));
    button.addEventListener("click", () => {
      activeFilter = filter.id;
      filters.querySelectorAll("button").forEach((tab) => {
        const selected = tab === button;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", String(selected));
      });
      renderTimeline();
    });
    filters.append(button);
  });

  const miniMarkup = (item) => {
    if (item.mini === "evo") {
      return `<div class="evo-loop-mini" aria-label="EvoWork 自改进闭环">
        <span><b>评测驱动</b>固定任务集</span><span><b>失败归因</b>轨迹分析</span>
        <span><b>技能进化</b>生成提案</span><span><b>回归门控</b>沙箱验证</span>
      </div>`;
    }
    if (item.mini === "architecture") {
      return `<div class="architecture-mini" aria-label="learn-workbuddy 架构">
        <span><b>Loop</b>有界运行</span><i></i><span><b>Memory</b>分层恢复</span><i></i><span><b>RAG</b>检索回归</span>
      </div>`;
    }
    return "";
  };

  const compactMetrics = (metrics = []) => metrics.length
    ? `<div class="compact-metrics${metrics.length === 3 ? " compact-metrics-three" : ""}">${metrics.map((metric) => `<span><b>${escapeHtml(metric.value)}</b>${escapeHtml(metric.label)}</span>`).join("")}</div>`
    : "";

  function renderTimeline() {
    timeline.replaceChildren();
    data.timeline.filter((item) => activeFilter === "all" || item.kind === activeFilter).forEach((item) => {
      const entry = node("li", "timeline-item reveal-on-scroll");
      entry.dataset.kind = item.kind;
      if (item.id === "evowork") entry.id = "opensource";
      const dot = node("span", "timeline-dot");
      dot.setAttribute("aria-hidden", "true");
      const card = node("button", `timeline-card${item.mini ? ` ${item.mini}-card` : ""}`);
      card.type = "button";
      card.setAttribute("aria-label", `查看 ${item.title} 详情`);
      card.innerHTML = `
        <div class="card-topline"><span>${escapeHtml(item.date)}</span><span class="category-pill">${escapeHtml(item.category)}</span></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="card-subtitle">${escapeHtml(item.subtitle)}</p>
        <p>${escapeHtml(item.lead)}</p>
        ${miniMarkup(item)}
        ${item.mini === "evo" ? compactMetrics(item.metrics) : ""}
        <div class="topic-row">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <span class="entry-more">查看${item.kind === "opensource" ? "系统设计与评测结果" : "完整详情"} <span aria-hidden="true">↗</span></span>`;
      card.addEventListener("click", () => openDetail(item));
      entry.append(dot, card);
      timeline.append(entry);
    });
    observeReveals();
  }

  data.skills.forEach((skill) => {
    const card = node("article");
    card.innerHTML = `<p>${escapeHtml(skill.eyebrow)}</p><h3>${escapeHtml(skill.title)}</h3><ul>${skill.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    $("#skills-grid").append(card);
  });

  data.achievements.forEach((achievement) => {
    const item = node("span");
    item.innerHTML = `<i>${escapeHtml(achievement.label)}</i>${escapeHtml(achievement.text)}`;
    $("#achievement-grid").append(item);
  });

  const backdrop = $("#detail-backdrop");
  const modal = $("#detail-modal");
  const content = $("#detail-content");
  const closeButton = $(".modal-close");
  let returnFocus = null;

  const flowMarkup = (items = []) => items.length ? `<section class="detail-section"><h3>系统链路</h3><div class="detail-flow">${items.map((item) => `<div class="flow-step${item.accent ? " is-accent" : ""}"><b>${escapeHtml(item.title)}</b><span>${escapeHtml(item.text)}</span></div>`).join("")}</div></section>` : "";
  const metricsMarkup = (items = []) => items.length ? `<section class="detail-section detail-results"><h3>核心指标</h3><div class="detail-metrics">${items.map((item) => `<div class="detail-metric"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join("")}</div></section>` : "";
  const listMarkup = (title, items = []) => items.length ? `<section class="detail-section"><h3>${title}</h3><ol class="detail-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol></section>` : "";

  function openDetail(item) {
    if (!item) return;
    returnFocus = document.activeElement;
    content.innerHTML = `
      <header class="detail-head"><p class="entry-meta">${escapeHtml(item.category)} · ${escapeHtml(item.date)}</p><h2 id="detail-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.subtitle)}</p></header>
      <div class="detail-body">
        <div class="detail-intro"><p>${escapeHtml(item.lead)}</p><div class="detail-tags">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div></div>
        ${metricsMarkup(item.metrics)}
        <section class="detail-overview"><article class="detail-context"><h3>背景与痛点</h3><p>${escapeHtml(item.background)}</p></article><article class="detail-context detail-role"><h3>我的角色</h3><strong>${escapeHtml(item.role)}</strong></article></section>
        ${flowMarkup(item.flow)}
        ${listMarkup("核心工作", item.contributions)}
        ${listMarkup("设计方法", item.approach)}
        ${item.link ? `<section class="detail-section"><a class="detail-link" href="${escapeHtml(item.link.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.link.label)} ↗</a></section>` : ""}
      </div>`;
    backdrop.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => { backdrop.classList.add("is-open"); modal.focus(); });
  }

  function closeDetail() {
    backdrop.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    setTimeout(() => { backdrop.hidden = true; if (returnFocus) returnFocus.focus(); }, 180);
  }
  closeButton.addEventListener("click", closeDetail);
  backdrop.addEventListener("click", (event) => { if (event.target === backdrop) closeDetail(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !backdrop.hidden) closeDetail(); });

  let observer;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal-on-scroll").forEach((item) => item.classList.add("is-visible"));
      return;
    }
    if (!observer) observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll(".reveal-on-scroll:not(.is-visible)").forEach((item) => observer.observe(item));
  }

  renderTimeline();
  observeReveals();
})();

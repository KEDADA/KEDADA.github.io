(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const qs = (selector, root = document) => root.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const profile = data.profile;
  qs("#eyebrow-text").textContent = profile.label;
  qs("#hero-name").textContent = profile.name;
  qs("#hero-tagline").textContent = profile.tagline;
  qs("#hero-summary").textContent = profile.summary;
  qs("#github-link").href = profile.github;
  qs("#footer-github").href = profile.github;
  qs("#email-link").href = `mailto:${profile.email}`;
  qs("#phone-link").href = `tel:${profile.phone}`;
  qs("#copyright-year").textContent = new Date().getFullYear();

  const metricsRoot = qs("#hero-metrics");
  data.metrics.forEach((metric) => {
    const card = el("article", "metric-card");
    card.append(
      el("p", "metric-value", metric.value),
      el("p", "metric-label", metric.label),
      el("p", "metric-note", metric.note),
    );
    metricsRoot.append(card);
  });

  const filtersRoot = qs("#filters");
  const timelineRoot = qs("#timeline-list");
  let activeFilter = "all";

  function categoryFor(id) {
    return data.filters.find((filter) => filter.id === id);
  }

  function metricNodes(metrics, compact = false) {
    const fragment = document.createDocumentFragment();
    metrics.forEach((metric) => {
      const box = el("div", compact ? "mini-metric compact" : "mini-metric");
      box.append(el("strong", "", metric.value), el("span", "", metric.label));
      fragment.append(box);
    });
    return fragment;
  }

  function renderTimeline() {
    timelineRoot.replaceChildren();
    const items = data.timeline.filter(
      (item) => activeFilter === "all" || item.category === activeFilter,
    );

    items.forEach((item, index) => {
      const category = categoryFor(item.category);
      const li = el("li", `timeline-item ${index % 2 ? "timeline-left" : "timeline-right"}`);
      li.dataset.category = item.category;

      const dot = el("span", "timeline-dot");
      dot.setAttribute("aria-hidden", "true");

      const button = el("button", "timeline-card");
      button.type = "button";
      button.setAttribute("aria-label", `查看 ${item.title} 详情`);

      const top = el("div", "card-topline");
      const date = el("span", "card-date", item.date);
      const type = el("span", "card-type", `${category.icon ? `${category.icon} ` : ""}${category.label}`);
      top.append(date, type);
      if (item.badge) top.append(el("span", "card-badge", item.badge));

      button.append(
        top,
        el("h3", "", item.title),
        el("p", "card-org", item.organization),
        el("p", "card-description", item.description),
      );

      const metrics = el("div", "mini-metrics");
      metrics.append(metricNodes(item.metrics));
      button.append(metrics, el("span", "card-arrow", "↗"));
      button.addEventListener("click", () => openModal(item));

      li.append(dot, button);
      timelineRoot.append(li);
    });

    observeReveals();
  }

  data.filters.forEach((filter, index) => {
    const button = el("button", `filter-button${index === 0 ? " is-active" : ""}`);
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", String(index === 0));
    button.textContent = `${filter.icon ? `${filter.icon} ` : ""}${filter.label}`;
    button.addEventListener("click", () => {
      activeFilter = filter.id;
      filtersRoot.querySelectorAll("button").forEach((node) => {
        const selected = node === button;
        node.classList.toggle("is-active", selected);
        node.setAttribute("aria-selected", String(selected));
      });
      renderTimeline();
    });
    filtersRoot.append(button);
  });

  const modal = qs("#detail-modal");
  const modalClose = qs(".modal-close", modal);

  function openModal(item) {
    const category = categoryFor(item.category);
    qs("#modal-meta").textContent = `${item.date} · ${category.icon || ""} ${category.label}${item.badge ? ` · ${item.badge}` : ""}`;
    qs("#modal-title").textContent = item.title;
    qs("#modal-org").textContent = item.organization;
    qs("#modal-description").textContent = item.description;

    const metrics = qs("#modal-metrics");
    metrics.replaceChildren();
    metrics.append(metricNodes(item.metrics, true));

    const details = qs("#modal-details");
    details.replaceChildren();
    item.details.forEach((detail) => details.append(el("li", "", detail)));

    modal.showModal();
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.close();
    document.body.classList.remove("modal-open");
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

  const skillsRoot = qs("#skills-grid");
  data.skills.forEach((group) => {
    const card = el("article", "stack-card");
    card.append(el("h3", "", group.title));
    const list = el("ul");
    group.items.forEach((item) => list.append(el("li", "", item)));
    card.append(list);
    skillsRoot.append(card);
  });

  const achievementRoot = qs("#achievement-grid");
  data.achievements.forEach((achievement) => {
    const item = el("div", "achievement-item");
    item.append(el("span", "achievement-icon", achievement.icon), el("span", "", achievement.text));
    achievementRoot.append(item);
  });

  let revealObserver;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
    }
    document.querySelectorAll(".reveal-on-scroll, .timeline-item:not(.is-visible)").forEach((node) =>
      revealObserver.observe(node),
    );
  }

  renderTimeline();
  observeReveals();
})();

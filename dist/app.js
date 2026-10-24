(function () {
  const container = document.getElementById("menu-categories");
  const searchInput = document.getElementById("menu-search");
  const status = document.getElementById("results-status");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const categoryLinks = [...document.querySelectorAll(".category-strip a")];
  const backToTop = document.getElementById("back-to-top");
  const openSearch = document.getElementById("open-search");
  let activeCategory = "all";

  const plural = (count) => `${count} ${count === 1 ? "dish" : "dishes"}`;
  const normalise = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const tagMarkup = (tags) => tags.map((tag) => `<span class="dietary-tag" aria-label="${tag}"><span aria-hidden="true">●</span> ${tag}</span>`).join("");

  const cardMarkup = (item) => {
    const image = item.image
      ? `<figure class="dish-image"><img src="${item.image}" alt="${item.name}" loading="lazy" /><figcaption>Featured dish</figcaption></figure>`
      : "";
    return `<article class="menu-card ${item.featured ? "is-featured" : ""}">
      ${image}
      <div class="dish-content">
        <div class="dish-title-row"><h4>${item.name}</h4><span class="price">$${item.price}</span></div>
        <p>${item.description}</p>
        ${item.tags.length ? `<div class="tags">${tagMarkup(item.tags)}</div>` : ""}
      </div>
    </article>`;
  };

  function matches(item, query) {
    const haystack = normalise(`${item.name} ${item.description} ${item.tags.join(" ")}`);
    return (activeCategory === "all" || item.category === activeCategory) && haystack.includes(query);
  }

  function render() {
    const query = normalise(searchInput.value.trim());
    const items = window.menuItems.filter((item) => matches(item, query));
    const groups = window.menuCategories.map((category) => ({
      ...category,
      items: items.filter((item) => item.category === category.id)
    })).filter((category) => category.items.length);

    container.innerHTML = groups.length
      ? groups.map((category) => `<section class="menu-category" id="${category.id}" aria-labelledby="${category.id}-title">
          <header class="category-heading"><p>${category.kicker}</p><h3 id="${category.id}-title">${category.name}</h3></header>
          <div class="dish-grid">${category.items.map(cardMarkup).join("")}</div>
        </section>`).join("")
      : `<div class="empty-state"><span aria-hidden="true">◌</span><h3>No dishes found</h3><p>Try a different search or browse the full menu.</p><button type="button" id="clear-search">Clear search</button></div>`;

    const filterName = activeCategory === "all" ? "the full menu" : window.menuCategories.find((c) => c.id === activeCategory).name;
    status.textContent = `Showing ${plural(items.length)} from ${filterName}.`;
    document.getElementById("clear-search")?.addEventListener("click", () => {
      searchInput.value = "";
      activeCategory = "all";
      setActiveFilter();
      render();
    });
  }

  function setActiveFilter() {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  filterButtons.forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    setActiveFilter();
    render();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
  }));

  categoryLinks.forEach((link) => link.addEventListener("click", () => {
    const category = link.getAttribute("href").slice(1);
    activeCategory = category;
    setActiveFilter();
    render();
  }));

  searchInput.addEventListener("input", render);
  openSearch.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => searchInput.focus(), 500);
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  setActiveFilter();
  render();
})();
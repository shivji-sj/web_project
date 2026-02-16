// ===== STATE =====
let activeCategory = "All";
let activeFilter = "all";
let searchQuery = "";

// ===== DOM =====
const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("search-input");
const categoriesContainer = document.getElementById("categories-container");
const toolCount = document.getElementById("tool-count");
const modalOverlay = document.getElementById("modal-overlay");
const scrollTopBtn = document.getElementById("scroll-top");
const navbar = document.getElementById("navbar");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");
const featuredScroll = document.getElementById("featured-scroll");
const filterToggles = document.getElementById("filter-toggles");

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initAurora();
    initTypingEffect();
    initCountUp();
    renderFeatured();
    renderCategories();
    renderTools();
    setupEventListeners();
});

// ===== AURORA CANVAS =====
function initAurora() {
    const canvas = document.getElementById("aurora-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
        { x: 0.15, y: 0.2, r: 350, color: [99, 102, 241], speed: 0.0004, phase: 0 },
        { x: 0.75, y: 0.3, r: 300, color: [168, 85, 247], speed: 0.0003, phase: 2 },
        { x: 0.5, y: 0.7, r: 280, color: [6, 182, 212], speed: 0.00035, phase: 4 },
        { x: 0.85, y: 0.8, r: 250, color: [236, 72, 153], speed: 0.00025, phase: 1 },
        { x: 0.3, y: 0.9, r: 220, color: [16, 185, 129], speed: 0.00045, phase: 3 },
    ];

    let time = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const orb of orbs) {
            const cx = canvas.width * (orb.x + Math.sin(time * orb.speed * 2 + orb.phase) * 0.08);
            const cy = canvas.height * (orb.y + Math.cos(time * orb.speed * 1.5 + orb.phase) * 0.06);

            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
            gradient.addColorStop(0, `rgba(${orb.color.join(",")}, 0.12)`);
            gradient.addColorStop(0.5, `rgba(${orb.color.join(",")}, 0.04)`);
            gradient.addColorStop(1, `rgba(${orb.color.join(",")}, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        time++;
        requestAnimationFrame(draw);
    }

    draw();
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const phrases = [
        "writing & content creation ✍️",
        "image generation & design 🎨",
        "video production & editing 🎬",
        "coding & development 💻",
        "music & audio creation 🎵",
        "data analysis & research 📊",
        "workflow automation ⚡",
        "3D modeling & rendering 🧊",
    ];

    const typedEl = document.getElementById("typed-text");
    if (!typedEl) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}

// ===== COUNT-UP ANIMATION =====
function initCountUp() {
    const statNumbers = document.querySelectorAll(".stat-number[data-target]");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target);
                    const suffix = el.dataset.suffix || "+";
                    animateCount(el, target, suffix);
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.5 }
    );

    statNumbers.forEach((el) => observer.observe(el));
}

function animateCount(el, target, suffix) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.round(current) + suffix;
    }, 25);
}

// ===== RENDER FEATURED =====
function renderFeatured() {
    const featured = AI_TOOLS.filter((t) => t.featured);
    featuredScroll.innerHTML = featured
        .map(
            (tool) => `
    <div class="featured-card" data-id="${tool.id}">
      <div class="featured-card-header">
        <div class="featured-card-icon">${tool.icon}</div>
        <div>
          <div class="featured-card-name">${tool.name}</div>
          <div class="featured-card-cat">${tool.category}</div>
        </div>
      </div>
      <p class="featured-card-desc">${tool.description}</p>
      <div class="featured-card-rating">
        ${renderStars(tool.rating)}
        <span>${tool.rating}</span>
      </div>
    </div>
  `
        )
        .join("");
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
    const counts = {};
    AI_TOOLS.forEach((t) => {
        counts[t.category] = (counts[t.category] || 0) + 1;
    });

    categoriesContainer.innerHTML = CATEGORIES.map(
        (cat) => `
    <button class="category-pill ${cat.name === activeCategory ? "active" : ""}"
            data-category="${cat.name}"
            aria-label="Filter by ${cat.name}">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="cat-count">${cat.name === "All" ? AI_TOOLS.length : counts[cat.name] || 0}</span>
    </button>
  `
    ).join("");
}

// ===== RENDER TOOLS =====
function renderTools() {
    const filtered = getFilteredTools();
    toolCount.textContent = `${filtered.length} tool${filtered.length !== 1 ? "s" : ""} found`;

    if (filtered.length === 0) {
        toolsGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No tools found</h3>
        <p>Try adjusting your search or filters</p>
      </div>`;
        return;
    }

    toolsGrid.innerHTML = filtered
        .map((tool, i) => {
            const catObj = CATEGORIES.find((c) => c.name === tool.category);
            const catColor = catObj ? catObj.color : "#6366f1";

            return `
      <div class="tool-card" data-id="${tool.id}" style="transition-delay: ${Math.min(i * 0.04, 0.6)}s">
        <div class="card-color-strip" style="background: linear-gradient(90deg, ${catColor}, ${catColor}88)"></div>
        <div class="card-body">
          <div class="card-top">
            <div class="card-top-left">
              <div class="tool-icon">${tool.icon}</div>
              <div class="card-name-group">
                <div class="tool-card-name">${highlightMatch(tool.name)}</div>
                <div class="card-rating">
                  <span class="stars">${renderStarsSmall(tool.rating)}</span>
                  <span class="rating-num">${tool.rating}</span>
                </div>
              </div>
            </div>
            <div class="card-badges">
              <span class="tool-pricing-badge pricing-${tool.pricing.toLowerCase()}">${tool.pricing}</span>
              ${tool.trending ? '<span class="trending-badge">🔥 Trending</span>' : ""}
            </div>
          </div>
          <p class="tool-card-desc">${tool.description}</p>
          <div class="tool-card-tags">
            ${tool.tags.slice(0, 3).map((t) => `<span class="tool-tag">${t}</span>`).join("")}
          </div>
          <div class="tool-card-footer">
            <span class="tool-category-label" style="color: ${catColor}">${tool.category}</span>
            <div class="tool-arrow">→</div>
          </div>
        </div>
      </div>`;
        })
        .join("");

    observeCards();
}

// ===== FILTER LOGIC =====
function getFilteredTools() {
    return AI_TOOLS.filter((tool) => {
        const matchesCategory = activeCategory === "All" || tool.category === activeCategory;

        let matchesFilter = true;
        if (activeFilter === "trending") matchesFilter = tool.trending;
        else if (activeFilter === "free") matchesFilter = tool.pricing === "Free";

        if (!searchQuery) return matchesCategory && matchesFilter;

        const q = searchQuery.toLowerCase();
        const matchesSearch =
            tool.name.toLowerCase().includes(q) ||
            tool.description.toLowerCase().includes(q) ||
            tool.tags.some((t) => t.toLowerCase().includes(q)) ||
            tool.category.toLowerCase().includes(q);

        return matchesCategory && matchesFilter && matchesSearch;
    });
}

// ===== STARS =====
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function renderStarsSmall(rating) {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return '<span class="star-filled">' + "★".repeat(full) + "</span>" +
        '<span class="star-empty">' + "★".repeat(empty) + "</span>";
}

// ===== HIGHLIGHT =====
function highlightMatch(text) {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${escapeRegex(searchQuery)})`, "gi");
    return text.replace(regex, '<mark style="background:rgba(99,102,241,0.3);color:inherit;border-radius:2px;padding:0 2px">$1</mark>');
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ===== INTERSECTION OBSERVER =====
function observeCards() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".tool-card").forEach((c) => observer.observe(c));
}

// ===== MODAL =====
function openModal(toolId) {
    const tool = AI_TOOLS.find((t) => t.id === toolId);
    if (!tool) return;

    const catObj = CATEGORIES.find((c) => c.name === tool.category);
    const catColor = catObj ? catObj.color : "#6366f1";

    document.getElementById("modal-content").innerHTML = `
    <div class="modal-header">
      <div class="modal-tool-info">
        <div class="modal-tool-icon">${tool.icon}</div>
        <div>
          <div class="modal-tool-name">${tool.name}</div>
          <div class="modal-tool-meta">
            <span class="modal-tool-category" style="color:${catColor}">${tool.category}</span>
            <span class="modal-tool-rating">${renderStars(tool.rating)} ${tool.rating}</span>
          </div>
        </div>
      </div>
      <button class="modal-close" id="modal-close-btn" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p class="modal-description">${tool.description}</p>

      <div class="modal-section">
        <div class="modal-section-title">Key Features</div>
        <div class="modal-features">
          ${tool.features.map((f) => `<div class="modal-feature"><span class="feature-check">✓</span><span>${f}</span></div>`).join("")}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Tags</div>
        <div class="modal-tags">
          ${tool.tags.map((t) => `<span class="modal-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Pricing</div>
        <div class="modal-pricing-info pricing-${tool.pricing.toLowerCase()}">${tool.pricing}</div>
      </div>

      <div class="modal-actions">
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="modal-btn-primary">Visit ${tool.name} ↗</a>
        <button class="modal-btn-secondary" id="modal-share-btn">Share</button>
      </div>
    </div>`;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    document.getElementById("modal-close-btn").addEventListener("click", closeModal);
    document.getElementById("modal-share-btn").addEventListener("click", () => {
        if (navigator.share) {
            navigator.share({ title: tool.name, text: tool.description, url: tool.url });
        } else {
            navigator.clipboard.writeText(tool.url);
            const btn = document.getElementById("modal-share-btn");
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = "Share"), 2000);
        }
    });
}

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Search
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderTools();
    });

    // Cmd+K focus
    document.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === "Escape") closeModal();
    });

    // Categories
    categoriesContainer.addEventListener("click", (e) => {
        const pill = e.target.closest(".category-pill");
        if (!pill) return;
        activeCategory = pill.dataset.category;
        renderCategories();
        renderTools();
    });

    // Filter toggles
    filterToggles.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-toggle");
        if (!btn) return;
        activeFilter = btn.dataset.filter;
        filterToggles.querySelectorAll(".filter-toggle").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderTools();
    });

    // Card clicks
    toolsGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".tool-card");
        if (card) openModal(parseInt(card.dataset.id));
    });

    // Featured card clicks
    featuredScroll.addEventListener("click", (e) => {
        const card = e.target.closest(".featured-card");
        if (card) openModal(parseInt(card.dataset.id));
    });

    // Modal
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Scroll effects
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
        scrollTopBtn.classList.toggle("visible", window.scrollY > 600);
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile menu
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const spans = mobileMenuBtn.querySelectorAll("span");
        const isOpen = navLinks.classList.contains("open");
        spans[0].style.transform = isOpen ? "rotate(45deg) translate(5px, 5px)" : "";
        spans[1].style.opacity = isOpen ? "0" : "";
        spans[2].style.transform = isOpen ? "rotate(-45deg) translate(5px, -5px)" : "";
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("open");
            mobileMenuBtn.querySelectorAll("span").forEach((s) => {
                s.style.transform = "";
                s.style.opacity = "";
            });
        }
    });
}

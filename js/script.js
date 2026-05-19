/* ============================================
   Camicissima Clone - script
   ============================================ */

// Product data (mock based on real site)
const products = [
  {
    name: "Camicia non iron popeline a righe sottili azzurre slim lisbon button down",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaLISBONH12317_LIGHTBLUE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 99.9,
    oldPrice: 199.9,
    formula: "4 x 399,60 €",
    discount: "-50%",
  },
  {
    name: "Camicia permanent pin point celeste slim livorno button down",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaLIVORNOH06676_AZURE_0_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 69.9,
    oldPrice: 149.9,
    formula: "4 x 279,60 €",
    discount: "-46%",
  },
  {
    name: "Camicia permanent royal oxford bianca slim monza francese",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaMONZAH02781_WHITE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 69.9,
    oldPrice: 149.9,
    formula: "4 x 279,60 €",
    discount: "-46%",
  },
  {
    name: "Camicia permanent royal oxford azzurra slim trento francese",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaTRENTOH07952_LIGHTBLUE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 69.9,
    oldPrice: 149.9,
    formula: "4 x 279,60 €",
    discount: "-46%",
  },
  {
    name: "Camicia permanent popeline rosa slim verona francese",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaVERONAH00081_PINK_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 69.9,
    oldPrice: 149.9,
    formula: "4 x 279,60 €",
    discount: "-46%",
  },
  {
    name: "Camicia fancy non iron dobby a fantasia blu slim francese",
    img: "https://www.camicissima.it/media/catalog/product/a/a/aaCCNHLMABG028962_BLUE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    price: 99.9,
    oldPrice: 199.9,
    formula: "4 x 399,60 €",
    discount: "-50%",
  },
];

function fmt(n) {
  return n.toFixed(2).replace(".", ",") + " €";
}

function renderProducts() {
  const track = document.getElementById("productsTrack");
  if (!track) return;
  track.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-img-wrap">
        <span class="product-discount">${p.discount}</span>
        <a href="#"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
      </div>
      <h3 class="product-name"><a href="#">${p.name}</a></h3>
      <div class="product-price">
        <div class="price-row-primary">
        <span class="price-formula text-black">1 x ${fmt(p.price)}</span>
        </div>
        <div class="price-row-secondary">
          <span class="price-formula strike text-secondary"> ${p.formula}</span>
        <span class="price-original text-black">${fmt(p.oldPrice)}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function setupCarouselArrows() {
  const track = document.getElementById("productsTrack");
  const prev = document.getElementById("prodPrev");
  const next = document.getElementById("prodNext");
  if (!track) return;
  const step = () =>
    track.querySelector(".product-card")?.offsetWidth + 18 || 240;
  prev?.addEventListener("click", () =>
    track.scrollBy({ left: -step() * 2, behavior: "smooth" }),
  );
  next?.addEventListener("click", () =>
    track.scrollBy({ left: step() * 2, behavior: "smooth" }),
  );
}

// Mega menu hover
function setupMegaMenu() {
  const items = document.querySelectorAll(".has-mega");
  const mega = document.getElementById("megaMenu");
  const panels = document.querySelectorAll(".mega-panel");
  let hideTimer;

  items.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const key = link.getAttribute("data-mega");
    item.addEventListener("mouseenter", () => {
      clearTimeout(hideTimer);
      panels.forEach((p) =>
        p.classList.toggle("active", p.dataset.panel === key),
      );
      mega.classList.add("open");
    });
    item.addEventListener("mouseleave", () => {
      hideTimer = setTimeout(() => mega.classList.remove("open"), 200);
    });
  });

  mega?.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  mega?.addEventListener("mouseleave", () => mega.classList.remove("open"));
}

// Mobile drawer
function setupMobileDrawer() {
  const btn = document.getElementById("mobileMenuBtn");
  const close = document.getElementById("closeDrawer");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const open = () => {
    drawer.classList.add("open");
    backdrop.classList.add("open");
  };
  const hide = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  };
  btn?.addEventListener("click", open);
  close?.addEventListener("click", hide);
  backdrop?.addEventListener("click", hide);
  drawer
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", hide));
}

// Cart click counter (demo)
function setupCartDemo() {
  const badge = document.querySelector(".cart-badge");
  const cartBtn = document.querySelector('[aria-label="cart"]');
  cartBtn?.addEventListener("click", () => {
    let n = parseInt(badge.textContent, 10) || 0;
    badge.textContent = ++n;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupCarouselArrows();
  setupMegaMenu();
  setupMobileDrawer();
  setupCartDemo();
});

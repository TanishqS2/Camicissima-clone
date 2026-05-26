const productsCamicie = [
  {
    title: "Camicia permanent royal oxford bianca extra slim fitted",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaTRAPANI002781_WHITE_0_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
  },

  {
    title: "Camicia permanent popeline bianca slim chieti francese",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaCHIETIH07545_WHITE_0_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
  },

  {
    title: "Camicia permanent popeline azzurra extra slim fitted",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaFAVIGNANA007553_LIGHTBLUE_0_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
  },

  {
    title: "Camicia permanent royal oxford bianca regular firenze",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaFIRENZER02781_WHITE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
  },
  {
    title:
      "Camicia permanent popeline bianca extra slim fitted oristano button down",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaORISTANO007545_WHITE_0_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
    noIron: false,
  },

  {
    title: "Camicia permanent popeline a righe blu regular cortina francese",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaCORTINAR01471_BLUE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-46%",
    singlePrice: "1 x 69,90 €",
    oldPrice: "279,60 €",
    finalPrice: "149,90 €",
    noIron: false,
  },

  {
    title: "Camicia non iron pin point bianca slim dublin italiano",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaDUBLINH11751_WHITE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-50%",
    singlePrice: "1 x 99,90 €",
    oldPrice: "399,60 €",
    finalPrice: "199,90 €",
    noIron: true,
  },

  {
    title: "Camicia non iron pin point bianca slim porto francese",
    image:
      "https://www.camicissima.it/media/catalog/product/a/a/aaDUBLINH11751_WHITE_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=558&width=450&canvas=450:558",
    discount: "-50%",
    singlePrice: "1 x 99,90 €",
    oldPrice: "399,60 €",
    finalPrice: "199,90 €",
    noIron: true,
  },
];

const productsGrid = document.getElementById("productsGrid");

productsCamicie.forEach((product) => {
  productsGrid.innerHTML += `
  
    <div class="product-card">

      <div class="product-image-wrap">
        <img src="${product.image}" 
             alt="${product.title}" 
             class="product-image">

        <div class="discount-badge">
          ${product.discount}
        </div>
      </div>

      <div class="product-content">

        <h3 class="product-name">
          ${product.title}
        </h3>

        <div class="price-formula text-black">
          ${product.singlePrice}
        </div>

        <div class="price-row">
          <span class="old-price">
            4 x ${product.oldPrice}
          </span>

          <span class="black-discount">
            ${product.discount}
          </span>

          <span class="final-price">
            ${product.finalPrice}
          </span>
        </div>

      </div>

    </div>

  `;
});

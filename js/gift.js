// GIFT CARD JS

const qtyInput = document.querySelector(".qty-input");
const plusBtn = document.querySelector(".qty-btn-plus");
const minusBtn = document.querySelector(".qty-btn-minus");

function updateButtons() {
  minusBtn.disabled = qtyInput.value <= 1;
}

plusBtn.addEventListener("click", () => {
  qtyInput.value++;
  updateButtons();
});

minusBtn.addEventListener("click", () => {
  if (qtyInput.value > 1) {
    qtyInput.value--;
  }

  updateButtons();
});

updateButtons();

function calcCartPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');

    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  // отображаем цену на странице
  totalPriceEl.innerText = totalPrice;
}

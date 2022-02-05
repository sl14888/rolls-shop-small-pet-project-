function toggleCartStatus() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.querySelector('[data-cart-empty]');
  const cartTotal = document.querySelector('[data-cart-total]');
  const orderForm = document.querySelector('#order-form');
  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add('none');
    cartTotal.classList.remove('none');
    orderForm.classList.remove('none');
  } else {
    cartEmpty.classList.remove('none');
    cartTotal.classList.add('none');
    orderForm.classList.add('none');
  }
}

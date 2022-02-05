// ищем на всей странице
window.addEventListener('click', function (e) {
  // глобальная переменная
  let counter;
  // проверка. Действительно ли кликнули по кнопке счетчика
  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
    //ищем родителя счетчика
    const counterWrapper = e.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }
  // проверяем является ли элемент счётчиком по data-actiosn
  if (e.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }
  if (e.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
    //проверяем лежит ли товар в корзине
    else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      // удаляем товар из корзины
      e.target.closest('.cart-item').remove();
      toggleCartStatus();
      // пересчет корзины
      calcCartPrice();
    }
  }
  // проверяем на клик + или - в корзине
  if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
    calcCartPrice();
  }
});

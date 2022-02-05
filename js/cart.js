// обертка куда добовляется в корзину
const cardWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (e) {
  // проверяем что клик был совершон по кнопке
  if (e.target.hasAttribute('data-cart')) {
    // найти карточку товара
    const card = e.target.closest('.card');
    // собираем данные с товара и записываем их в объект
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    // проверка по id есть ли такой тавар в корзине
    const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    // проверка был ли найден такой элемент
    if (itemInCard) {
      // находим значение в счетчике
      const counterEl = itemInCard.querySelector('[data-counter]');
      counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
      // если товара нет в корзине
    } else {
      const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox}  / ${productInfo.weight}</div>
										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">
                          <span class="cart__one-price">${productInfo.price}</span>                     
                        </div>
											</div>
										</div>
									</div>
								</div>
							</div>`;
      // отображаем товар в корзине
      cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
    }
    // сбрасываем счетчик
    card.querySelector('[data-counter]').innerText = '1';
    // отображение статуса корзины пуста или нет
    toggleCartStatus();
    // подсчет стоимости товаров в корзине
    calcCartPrice();
  }
});

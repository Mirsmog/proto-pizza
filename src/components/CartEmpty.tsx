import ButtonBack from './ButtonBack';

function CartEmpty() {
  return (
    <div className='cart cart--empty'>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src='/img/empty-cart.png' alt='Empty cart' />
      <ButtonBack />
    </div>
  );
}

export default CartEmpty;

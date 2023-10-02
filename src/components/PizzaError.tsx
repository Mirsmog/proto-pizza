function PizzaEror() {
  return (
    <div className='cart cart--empty cart--error'>
      <h2>
        Что-то пошло не так <span>😕</span>
      </h2>
      <p>Произошла ошибка, пожалуйта попробуйте перезагрузить страницу или вернутся позже.</p>
      <span className='button button--black' onClick={() => window.location.reload()}>
        Обновить страницу
      </span>
    </div>
  );
}
export default PizzaEror;

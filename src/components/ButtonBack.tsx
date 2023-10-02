import { Link } from 'react-router-dom';

function ButtonBack() {
  return (
    <Link to='/' className='button button--black'>
      <span>Вернуться назад</span>
    </Link>
  );
}
export default ButtonBack;

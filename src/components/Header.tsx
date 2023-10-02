import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import logo from '../img/pizza-logo.svg';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={logo} alt='Pizza logo' />
            <div>
              <h1>Proto pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;

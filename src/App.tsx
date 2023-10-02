import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FullCard from './pages/FullCard';
import React, { FC } from 'react';
const Cart = React.lazy(() => import('./pages/Cart'));

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='cart'
              element={
                <React.Suspense fallback={<div>Идёт загруска корзины</div>}>
                  <Cart />
                </React.Suspense>
              }
            ></Route>
            <Route path='/pizza/:id' element={<FullCard />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

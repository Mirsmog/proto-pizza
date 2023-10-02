import React, { FC } from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Card/skeleton';
import Search from '../components/Search';
import Paginate from '../components/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import { fetchPizza } from '../redux/slices/pizzaSlice';
import PizzaEror from '../components/PizzaError';
import { rootState, useAppDispatch } from '../redux/store';
import PizzaContent from '../components/PizzaContent';



const Home: FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const { items, status } = useSelector((state: rootState) => state.pizza);
  const { pageCount, categoryId, sortOrder, sort, searchValue } = useSelector(
    (state: rootState) => state.filter
  );

  const onChangeCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  const setPage = (number: number) => {
    dispatch(setPageCount(number));
  };

  React.useEffect(() => {
    const getPizza = async () => {
      const categoryBy = categoryId ? `category=${categoryId}` : '0';
      const sortBy = `&sortBy=${sort.sortProp}`;
      const orderBy = `&order=${sortOrder}`;
      const searchBy = searchValue && `&search=${searchValue}`;
      const pageBy = `&page=${pageCount}&limit=12`;

      appDispatch(fetchPizza({ categoryBy, sortBy, orderBy, searchBy, pageBy }));
    };
    getPizza();
  }, [categoryId, sort, sortOrder, searchValue, pageCount]);

  const skeletons = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const pizza = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <Card key={obj.id} {...obj} />);

  return (
    <>
      <div className='content__top'>
        <Categories category={categoryId} onClickCategory={onChangeCategory} />
        <Search />
      </div>
      <Sort sortBy={sort} />
      <h2 className='content__title'>Все пиццы</h2>
      {status === 'error' ? (
        <PizzaEror />
      ) : (
        <>
          <PizzaContent skelet={skeletons} items={pizza} status={status} />
          <Paginate onChangePage={setPage} />
        </>
      )}
    </>
  );
};

export default Home;

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSort, setSortOrder } from '../redux/slices/filterSlice';

type SortItem = {
  name: string;
  sortProp: 'rating' | 'price' | 'title';
};

interface SortProps {
  sortBy: SortItem;
}

const sortList: SortItem[] = [
  { name: 'популярности', sortProp: 'rating' },
  { name: 'цене', sortProp: 'price' },
  { name: 'алфавиту', sortProp: 'title' },
];
const Sort: FC<SortProps> = ({ sortBy }) => {
  const [popupVisible, setPopupVisible] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const onPopupClick = (obj: SortItem) => {
    dispatch(setSort(obj));
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      const target = e as MouseEvent & {
        composedPath: Node[];
      };

      if (sortRef.current && !target.composedPath().includes(sortRef.current)) {
        setPopupVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOut);

    return () => document.body.removeEventListener('click', handleClickOut);
  }, []);

  return (
    <div className='sort' ref={sortRef}>
      <div className='sort__label'>
        <svg
          style={popupVisible ? { transform: 'rotate(360deg)' } : { transform: 'rotate(180deg)' }}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopupVisible(!popupVisible)}>{sortBy.name}</span>
      </div>
      {popupVisible && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, index) => {
              return (
                <li
                  key={obj.name + index}
                  onClick={() => onPopupClick(obj)}
                  className={sortBy.sortProp === obj.sortProp ? 'active' : ''}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
          <div className='sort-order'>
            <label onClick={() => dispatch(setSortOrder('asc'))}>
              <input name='typesort' type='radio' />
              По возростанию
            </label>
            <label onClick={() => dispatch(setSortOrder('desc'))}>
              <input defaultChecked name='typesort' type='radio' />
              По убыванию
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;

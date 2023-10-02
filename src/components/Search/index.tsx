import React, { FC } from 'react';
import debounce from 'lodash.debounce';
import style from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
const Search: FC = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClearInput = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e)}
        type='text'
        placeholder='Поиск...'
      />
      {value && (
        <svg
          onClick={() => onClearInput()}
          width='40px'
          height='40px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
            stroke='gray'
            strokeWidth='1'
            strokeLinecap='round'
          />
        </svg>
      )}
    </div>
  );
};

export default Search;

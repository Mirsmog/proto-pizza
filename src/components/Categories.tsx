import { FC } from 'react';

type CategoriesProps = {
  category: number;
  onClickCategory: (index: number) => void;
};
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: FC<CategoriesProps> = ({ category, onClickCategory }) => {
  return (
    <div className='categories'>
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={value + index}
              onClick={() => onClickCategory(index)}
              className={category === index ? 'active' : ''}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

import { useNavigate, useParams } from 'react-router-dom';
import style from './FullCard.module.scss';
import React, { FC } from 'react';
import axios from 'axios';
import ButtonBack from '../../components/ButtonBack';
import IPizza from '../../redux/slices/types/types';

const FullCard: FC = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState<IPizza[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchFullPizza() {
      try {
        const { data } = await axios.get(`https://6514093b8e505cebc2ea978b.mockapi.io/items/`, {
          params: { id },
        });
        if (data.length) {
          setItem(data);
        } else {
          alert('Пицц нет');
          navigate('/');
        }
      } catch {
        console.log('error во время получение страницы пицы');
      }
    }
    fetchFullPizza();
  }, []);

  return (
    <>
      {item.map(({ id, title, price, imageUrl }) => {
        return (
          <div key={id} className={style.root}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <div>Цена: {price}₽</div>
            <ButtonBack />
          </div>
        );
      })}
    </>
  );
};
export default FullCard;

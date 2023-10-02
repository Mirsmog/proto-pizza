import { FC } from 'react';
import style from './NotFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <h1 className={style.root} style={{ marginTop: '150px' }}>
      <span>
        <div className=''>4</div>
        <img src='img/sad.svg' alt='bad-request' />
        <div className=''>4</div>
      </span>
      <div>Не чего не найдено</div>
      <p>К сожеление данная стараница не существует!</p>
    </h1>
  );
};

export default NotFoundBlock;

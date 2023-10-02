import React, { FC } from 'react';

interface PizzaContentProps {
  status: string;
  skelet: React.ReactNode[];
  items: React.ReactNode[];
}

const PizzaContent: FC<PizzaContentProps> = ({ skelet, status, items }) => {
  return <div className='content__items'>{status === 'loading' ? skelet : items}</div>;
};
export default PizzaContent;

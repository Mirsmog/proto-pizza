import ReactPaginate from 'react-paginate';
import style from './Paginate.module.scss';
import { FC } from 'react';

type PaginateProps = {
  onChangePage: (page: number) => void;
};

const Paginate: FC<PaginateProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel='...'
      nextLabel='&rarr;'
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={10}
      pageCount={4}
      previousLabel='&#8592;'
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;

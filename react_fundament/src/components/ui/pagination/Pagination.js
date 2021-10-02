import React, {useMemo} from 'react';

export const Pagination = ({setParams, params, totalPage}) => {
  const pagesArray = useMemo(() =>
    new Array(totalPage).fill(0).map((_,i)=> ++i),[totalPage]);

  return (
    <div className='pagination_wrapper'>
      {pagesArray.map((item) =>
        <span
          key = {item}
          onClick = {() => setParams({...params, page: item})}
          className={item === params.page ? 'pagination page_active' : 'pagination'}>
          {item}
        </span>)
      }
    </div>
  );
};

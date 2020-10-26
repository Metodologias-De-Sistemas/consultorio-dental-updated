import React from 'react';

const TableButton = ({ className, text, handleClick, id }) => {
  return (
    <button className={className} onClick={handleClick} id={id}>
      {' '}
      {text}{' '}
    </button>
  );
};

export default TableButton;

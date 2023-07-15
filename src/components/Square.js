import React from 'react'

export const Square = ({ value, onSquareClick }) => {

  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}

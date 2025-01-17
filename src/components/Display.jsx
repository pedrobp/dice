import React, { useContext } from 'react'
import RollsContext from '../context/RollsContext';

export default function Display() {
  const { total, rolls, isRolling } = useContext(RollsContext);
  const hasRolls = rolls && rolls.length > 1;

  return (
    <div className='display'>
      <span className='display-total'>{total || '---'}</span>
      <span className='display-rolls'>{hasRolls ? (`[${rolls.join(', ')}]`) : 'ㅤ'}</span>
    </div>
  )
}

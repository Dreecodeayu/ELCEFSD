import React, { useState } from 'react'

const State1 = () => {
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState('black');

  return (
    <div>
        <button onClick={() => {setTotal(total + 1);}}>Increase</button>
        <button onClick={() => {setTotal(total - 1);}}>Decrease</button>
        <h2>{total}</h2>
        <h1>My favourite color is {' '}
            <span style={{ color: color }}>{color}</span>
        </h1>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <button onClick={() => setColor('pink')}>Pink</button>
        <button onClick={()=>setColor('red')}>Red</button>

    </div>
  ) 
}

export default State1
import React from 'react'

export default function Btn({dispatch}) {
    const handle = (Id) => {
        dispatch(
            {
                type: "UpdateCard",
                payload:{
                    id:Id
                }
            }
        );
    }
  return (
    <div className='Card-List'>
            <h3>Card Lists</h3>
            <div className='Card-Btn'>
              <button onClick={() => handle(0)}>Card 1</button>
              <button onClick={() => handle(1)}>Card 2</button>
              <button onClick={() => handle(2)}>Card 3</button>
              <button onClick={() => handle(3)}>Card 4</button>
              <button onClick={() => handle(4)}>Card 5</button>
              <button onClick={() => handle(5)}>Card 6</button>
            </div>
        </div>
  )
}

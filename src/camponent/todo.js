import React from 'react'

const todo = (props) => {



  return <>
  <div className='todo style'>
<button className='todo-button' onClick={()=>{
  props.onSelact(props.id)
}}>-</button>
  
    <li>
       {props.text }
    </li>
    </div>
    </>
};

export default todo;

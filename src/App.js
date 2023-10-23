import React from 'react'
import './camponent/style.css';

const App = () => {
  const [inputlist, setInputlist]= React.useState("")
  const [Items,setItems] = React.useState([ ])

const Itemevent=(event)=>{
setInputlist(event.target.value)
}

const listOfitems=() => {
setItems((oldItems)=> [...oldItems,inputlist])
setInputlist("");}

const deleteItem=(index)=>{
  setItems((oldItems) => oldItems.filter((_, itemIndex) => itemIndex !== index));
} 


  return (
    <>
      <div className='main-container'>
     <div className='main'>
      <h1>Todo List </h1>
      <input type='text' placeholder='add a todo'value={inputlist}  onChange={Itemevent}/>
      <button onClick={listOfitems}>+ </button>
     
      <ol>
            {Items.map((Itemval, index) => (
               <li key={index}>
                 {Itemval}
                <button onClick={() => deleteItem(index)}>Delete</button>
              </li>
            ))}
          </ol>
     
      </div> 
      </div>
    </>
  )
}

export default App

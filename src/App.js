
import { useState } from 'react';
import './App.css';
import ToDoInput from './Components/ToDoInput';
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListToDo] = useState([]);
  let addList = (inputTest)=>{
      setListToDo([...listTodo, inputTest])
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListToDo([...newListTodo])
  }
  return (
   <>
    <div className="App">
        <div className='center-container'>
         <ToDoInput addList={addList}/>
         <h1>TO DO LIST</h1>
         <hr />
         {listTodo.map((listItem, i)=>{
      return (
      <TodoList item={listItem} key={i} index={i} deletItem={deleteListItem}/>)
    })} 
        </div>
        
    </div>
    
    </>
  );
}

export default App;

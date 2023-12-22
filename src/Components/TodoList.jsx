
import './Todolist.css';
import React from 'react';

function TodoList(props) {
    return (
        <div className='list_items-set'>
            <li className='list-items'>{props.item} <span><i className="fa fa-trash" aria-hidden="true" onClick={(e)=>{
                props.deletItem(props.index)
            }}></i></span></li>
        </div>
    );
}

export default TodoList;
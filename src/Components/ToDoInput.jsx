import React, { useState } from 'react';
import './ToDoInput.css';

function ToDoInput(props) {
    const [inputText, setInputText] = useState('');

    return (
        <>
            <div className='input-container'>
                <input type="text" placeholder='Enter here todo'
                 value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
                <button className='add-btn' onClick={() => {
                    props.addList(inputText)
                    setInputText('')
                }}>+</button>
            </div>
        </>
    );
}

export default ToDoInput;
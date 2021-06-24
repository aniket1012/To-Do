import React, {useState} from 'react'

const Form = () => {

   const [inputText, setInputText] =  useState('')
    
   const inputHandler = (event) => {
       setInputText(event.target.value)
       console.log(inputText);
   }

    return (
        <form>
            <input type='text' className='todo-input' onChange={inputHandler}/>
            <button className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button> 
            <div className='select'>
                <select   name ='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form 
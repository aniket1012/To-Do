import React from 'react'


const Form = (props) => {

   
    
   const inputTextHandler = (event) => {
       props.setInputText(event.target.value)
   }

   const submitHandler = (event) => {
    event.preventDefault()
    props.setToDos([
        ...props.todos, {id: Math.random() * 1000, text: props.inputText, completed: false, }
    ])
    props.setInputText('')
   }

   const statusHandler = (event) => {
    props.setStatus(event.target.value)
   }

    return (
        <form>
            <input type='text' className='todo-input' onChange={inputTextHandler} value={props.inputText}/>
            <button className='todo-button' type='submit' onClick={submitHandler}>
                <i className='fas fa-plus-square'></i>
            </button> 
            <div className='select'>
                <select   name ='todos' className='filter-todo' onChange={statusHandler} >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form 
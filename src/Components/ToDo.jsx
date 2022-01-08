import React from 'react'





function ToDo({todo, handleToggle}) {

     const handleClick = (e) => {
       e.preventDefault();
       handleToggle(e.currentTarget.id);
     };


    return (
      <div
        id={todo.id}
        key={todo.id + todo.title}
        name="todo"
        value={todo.id}
        className={todo.complete ? "cross" : ""}
        onClick={handleClick}
      >
        {todo.title}
      </div>
    );
}

export default ToDo;

import React from 'react'





function ToDo({todo, handleToggle, keyz}) {

     const handleClick = (e) => {
       e.preventDefault();
       handleToggle(e.currentTarget.id);
     };


    return (
      <div
        id={todo.id}
        key={keyz}
        name="todo"
        value={todo.id}
        className={todo.complete ? "cross" : ""}
        onClick={handleClick}
      >
        <input value="yes" defaultChecked={todo.complete} type="checkbox" onClick={handleClick} /> {todo.title}
      </div>
    );
}

export default ToDo;



/*
     <div
        id={todo.id}
        key={todo.id + todo.title}
        name="todo"
        value={todo.id}
        className={todo.complete ? "cross" : ""}
        onClick={handleClick}
      >
       <input value="yes" type="radio"/> {todo.title}
      </div>
      */

/*
<ul>


  <li onClick={handleClick} key={todo.id}   className={todo.complete ? "cross" : ""}>
  <input id={todo.id} onClick={handleClick} type="checkbox" defaultChecked={todo.completed}/>
  <p>{todo.id} {todo.title} </p>
  </li>


</ul>
*/
import React from 'react'
import ToDo from './ToDo'

function TodoList({dataList, handleToggle}) {
    return (
      <div>
        {dataList.map((todo) => {
          return <ToDo keyz={todo.id} todo={todo} handleToggle={handleToggle} />;
        })}
        
      </div>
    );
}

export default TodoList;



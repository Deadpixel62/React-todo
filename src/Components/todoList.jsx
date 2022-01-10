import React from 'react'
import ToDo from './ToDo'

function TodoList({dataList, handleToggle, count, deleteComp}) {
    return (
      <ul>
        {dataList.map((todo) => {
          return <ToDo keyz={todo.id} todo={todo} handleToggle={handleToggle} />;
        })}
        <li className="bottomList">{count} Completed <a onClick={deleteComp} href="#">Delete Completed</a></li>
      </ul>
    );
}

export default TodoList;



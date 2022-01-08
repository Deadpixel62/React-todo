import React from 'react'
import ToDoList from "./todoList";
import Form from "./form";
import data from "./data.json";
import { useState } from "react";

function Papp() {

    const [dataList, setData] = useState(data);

        const handleToggle = (id) => {
          let mapped = dataList.map((task) => {
            return task.id === Number(id)
              ? { ...task, complete: !task.complete }
              : { ...task };
          });

          setData(mapped);
        };

        const addTask = (userInput) => {
          dataList.push({
            id: dataList.length + 1,
            title: userInput,
            completed: false,
          });

          console.log(dataList);
        };


    return (
      <div>
        <Form addTask={addTask} />
        <ToDoList dataList={dataList} handleToggle={handleToggle} />
      </div>
    );
}

export default Papp

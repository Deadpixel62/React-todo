import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import './father.css'
import sun from './images/icon-sun.svg'
import moon from './images/icon-moon.svg'
import axios from 'axios'
import ToDoList from './todoList'
import Form from './form'
import data from './data.json'




function Father() {
const [pic, setPic] = useState(moon)
const [theme, setTheme] = useState('light');
const [dataList, setData] = useState(data);


  /* useEffect(() => {
     return () => {
       axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
         setData(res.data);
       
         
       
         
       } ) ;
     };
   }, );
   */

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


}


const switchTheme = () => {

    setTheme(theme === 'light' ? 'dark' : 'light')
    setPic(theme==='light' ? sun : moon)
}


    return (
      <div className="App" data-theme={theme}>
        <div className="todo">
          <h1>TO DO </h1>

          <button className="toggleTheme" onClick={switchTheme}>
            {" "}
            <img src={pic} />{" "}
          </button>
        </div>
        <Form addTask={addTask} />
        <ToDoList dataList={dataList} handleToggle={handleToggle} />
      </div>
    );
}

export default Father






/*
 const handleToggle = (id) => {
   let mapped = toDoList.map((task) => {
     return task.id == id ? { ...task, complete: !task.complete } : { ...task };
   });
   setToDoList(mapped);
 };


  {
   "id": 13,
   "task": "Exercise",
   "complete": false
 }

 */



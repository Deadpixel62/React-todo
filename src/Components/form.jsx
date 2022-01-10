import React from 'react'
import {useState} from 'react'

function Form({addTask}) {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) =>{
        setUserInput(e.target.value)
    }

     const handleSubmit = (e) => {
       e.preventDefault();
       addTask(userInput);
       setUserInput("");
     };


    return (
      <form className="inputForm" onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <input type="submit" />
      </form>
    );
}

export default Form


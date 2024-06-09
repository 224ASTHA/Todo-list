import React,{useState} from "react";

function TodoInput(props){
    const [inputText,setInputText] = useState('');

    return(
        <div className="input-container">
            <input type="text" placeholder="Enter your today's todolist" className="input-box"
            value={inputText}
            onChange={e=>{
                    setInputText(e.target.value)
                }}></input>
            <button className="add-btn" onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }}>+</button>
           
        </div>
    )
}

export default TodoInput
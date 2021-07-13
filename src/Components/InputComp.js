
  
import React, { useState } from 'react';
import {connect} from "react-redux";

function InputComp(props){
    const [value,setValue]=useState("");
    return (
        <div className="input">
        <input type="text" onChange={(e)=>{
            setValue(e.target.value);
        }}></input>
        <button onClick={()=>{props.addTask(value)}}>add task</button>
    </div>
    )
    
}

const mapStateToProps=(state)=>{
    return state.input;
}




const mapDispatchToProps=(dispatch)=>{
    return({
        addTask:  (val)=>{
            return dispatch({
                type:"add_task",
                payload:val
            })
        }
    })
}






const higherOrderFunction=connect(mapStateToProps,mapDispatchToProps)(InputComp);
export default higherOrderFunction;
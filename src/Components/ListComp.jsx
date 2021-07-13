import React,{useEffect} from "react";

import {connect} from "react-redux";
import store from "../store";


function ListComp(props) {

    return (
        <div>
            <h1>task list</h1>
            {props.list.map((str)=>{
                return(
                   <li style={{listStyle: "none"}}>{str}</li>
                )
            })}
        </div>
    )
}
const mapStateToProps=(store)=>{
    return store.input;
}
const mapDispatchToProps=(dispatch)=>{
    return({
        createList:()=>{
            return dispatch({
                type:"create_list",
            })
        }
    }
    )
}

const higherOrderFunc=connect(mapStateToProps,mapDispatchToProps)(ListComp);
export default higherOrderFunc;






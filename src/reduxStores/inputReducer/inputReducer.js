let initialState={
    list:["hello world"]
}
function inputReducer(state=initialState,action){
    
        switch(action.type){
            case "add_task":
                let newState={
                    ...state,
                    list:[...state.list,action.payload]
                }
                return newState;
                

            default: return state;
        }
}
export default inputReducer;
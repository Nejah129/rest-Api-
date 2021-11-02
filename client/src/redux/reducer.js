import { ADD, DELETE, EDITE, GET } from "./actionTypes";



let init={
    users:null,isLoading:true
}
 

export const userReducer=(state=init,{type,payload})=>{
switch (type) {
    case GET:
        
     return{
         ...state,users:payload,isLoading:false
     };
     case DELETE:
         return{
             ...state,isLoading:false,users:state.users.filter(el=>el._id!==payload)
         };
         case EDITE:
             return{
                 ...state,isLoading:false,users:state.users.map(el=>el._id===payload?{...el,...payload}:el)
             }
             case ADD:
                 return{
                     ...state,isLoading:false,users:[...state.users,payload]
                 }

    default:
        return state
}
}
import axios from "axios";
import { ADD, DELETE, EDITE, GET } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/user/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
export const delteUser = (_id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
  }
};

export const editeUser = (_id, name, email, number) => async (dispatch) => {
  try {
    let editedUser = { name, email, number };
    let res = await axios.put(`/user/put/${_id}`, editedUser);
    dispatch({
      type: EDITE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
  }
};

export const addUser=(name,email,number)=>async(dispatch)=>{
    try {
        let newUser={name,email,number}
        let res=await axios.post("/user/post",newUser)
        dispatch({
            type:ADD,payload:res.data
        })
    } catch (error) {
        
    }
}
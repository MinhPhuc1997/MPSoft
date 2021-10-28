import axios from "axios";
import { Dispatch } from "redux"
import { LoginType } from "../action-type"
import { ActionLogin } from "../action/login";

interface ValueType{
    username:string,
    password:string,
    remember:boolean
}



export const LoginAcion = (value:ValueType) => {

    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/users',
      
      });

      const username= value.username;
      const password= value.password;
      const remember= value.remember;

      console.log(username);
      console.log(password);
      console.log(remember);


    return (dispatch: Dispatch<ActionLogin>) => {
      dispatch({
          type:LoginType.NORMAL_LOGIN,
          payload:value
      })
    }
}

export const LoginRemember = (value:object) => {
    return  (dispatch: Dispatch<ActionLogin>) => {
      
    }
}

export const Logout = () => {
  //  storeData(false, "IsLogin");
   // storeDataObject("", "dataLogin");
    return (dispatch: Dispatch<ActionLogin>) => {
        dispatch({ type: LoginType.DO_LOGOUT })
    }
}

export const ChangeLoading = () => {
      return (dispatch: Dispatch<ActionLogin>) => {
          dispatch({ type: LoginType.ON_LOADING })
      }
  }
  

import { LOGIN_USER_SUCCESS, AUTH_FAIL,REGISTER_USER_SUCCESS,LOGOUT,GET_AUTH_USER,SET_LOADING  } from "../const";
 import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
     toast.configure();
   

 //getauthuser
 export const getAuthUser = ()  => async dispatch => {
   dispatch({type:SET_LOADING})

 try {

  const config = {
      headers: {
      authorization: localStorage.getItem("token"),
      "content-type": "application/json"
       
      },
    };
    const response = await axios.get("/auth/profil", config);
 console.log("response",response)
    dispatch({
      type: GET_AUTH_USER,
      payload:response.data,
    })
    
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    
    });
  }
  
 }   

//login
export const login = ({email, password},history) => async (dispatch) => {
   dispatch({type:SET_LOADING})
  try {
    const config = {
      headres: {
        "content-type": "application/json",
      },
    };
    let {data} = await axios.post("/auth/login", { email, password }, config);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data, // email password
    });
     history.push("/profil")
  } catch (error) {
  

    error.response.data.forEach((elt) => {
      toast.error(elt.msg);
    });
  
    
    dispatch({
      type: AUTH_FAIL,
 payload:error.response.data.msg,
    });
  }
};

//logout


export const logout = () =>  {
  
  return{ type: LOGOUT };
};


//register

export const register = ({name,lastname,email,password,pic},history) => async dispatch => {
 dispatch({type:SET_LOADING})
try {
  const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    let {data}= await axios.post("/auth/register", { name, lastname, email, password , pic}, config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS ,
      payload: data, // name , pic ,email, password
    });
   history.push("/profil")
} catch (error) {
  error.response.data.forEach((elt) => {
      toast.error(elt.msg);
    });
  
    
    dispatch({
      type: AUTH_FAIL,
      payload:error.response.data.msg,
    });
}


}

//profil


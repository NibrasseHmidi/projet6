import { LOGIN_USER_SUCCESS, AUTH_FAIL,REGISTER_USER_SUCCESS, SET_LOADING, LOGOUT, GET_AUTH_USER} from "../const/index";
const initialState = {
  user: {},
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {...state, isLoading:true}
    case LOGIN_USER_SUCCESS:
   localStorage.setItem("token", payload.token)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
        
      };
       case REGISTER_USER_SUCCESS:
          localStorage.setItem("token", payload.token)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
        
      };
      case GET_AUTH_USER:
        return{
          ...state, 
        user: payload.user,
        isLoading: false,
        isAuth: true,
       

        };
case AUTH_FAIL:

  return{
    ...state,
    user: null,
  token: null,
  isLoading: false,
  isAuth: false,
  }
  case LOGOUT:
    localStorage.removeItem("token")
    return{

      user: null,
  token: null,
  isLoading: false,
  isAuth: false,
    }

    default:
      return state;
  }
};
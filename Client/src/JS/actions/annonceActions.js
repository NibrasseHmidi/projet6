import {
  AJOUT_ANNONCE_SUCCESS,
  AJOUT_FAIL,
  SET_LOADING,
} from "../const/productconst";

import axios from "axios";

export const addproduct =({name,numero,address,tarifJ,tarifS,tarifM,caution,message,ville,category,pic})=>
  async (dispatch) => {
    dispatch({ type: SET_LOADING });
     const config = {
        headers: {
          "Content-type": "application/json",
        }
      };
    try {
     

      let { data } = await axios.post("/product/add",{name,numero,address,tarifJ,tarifS,tarifM,caution, message,ville,category,pic},config);

      dispatch({
        type: AJOUT_ANNONCE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
  };
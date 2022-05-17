import * as actions from './types';
import data from '../../data/shirts';


// import {useDispatch} from "react-redux";

// const dispatch = useDispatch();

export const fetchSearchedProducts = (keyword) => (dispatch)=>{console.log(dispatch);dispatch({ type: actions.SEARCH_PRODUCTS, payload: keyword});}
export const fetchAllproducts = () =>(dispatch)=> {
    console.log("dispatch:",dispatch);
    dispatch({type: actions.FETCH_ALL_PRODUCTS, payload:data})
}
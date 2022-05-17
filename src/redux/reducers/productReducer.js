import * as actions from '../actions/types';
import products from '../../data/shirts';

const initialState = {
    searchKeyword: "hello",
    products : products,
    searchedList : [],
    wishlist : [],
    
}

export default function(state = initialState , action={type:"", payload:{}}) {
    switch(action.type){

        case actions.FETCH_ALL_PRODUCTS:
            return{
                ...state,
                products:action.payload
            }

        case actions.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist : action.payload
            };
        

        case actions.SEARCH_PRODUCTS:
            const newList = state.products.filter((item) => item.pname.includes(state.searchKeyword)) ;

            console.log("newlist is", newList,"and keyword is" , state.searchKeyword);
            return{
                ...state,
                searchedList:[...state.searchedList,newList]
            }

        default:
            return state;
    }
}
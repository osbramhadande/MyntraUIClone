import NavBar from './components/navigation/NavBar';
import './App.css';

import ProductList from './components/list/ProductList';
import Filters from './components/filters/Filters';
import Recommendations from './components/addons/Recommendations';
import SearchedproductList from './components/list/SearchedProductList';
import {useSelector, useDispatch} from 'react-redux';

import {fetchAllproducts, fetchSearchedProducts} from './redux/actions/product'

import { useEffect } from 'react';
import * as actions from './redux/actions/types'

function App() {
  const keyword = useSelector((state) => state.searchKeyword)
  console.log("in app.js keyword is" , keyword)
  const wishlist = useSelector((state) => state.wishlist)
  console.log("wishlist" , wishlist)
  const dispatch = useDispatch()
  
  const products = useSelector((state) => state.products.products)
  console.log("here in app.js",products, "and keyword is", keyword)

  //let searchedList = dispatch({type:actions.SEARCH_PRODUCTS, payload: keyword});
  let searchedList = dispatch(fetchSearchedProducts(keyword))
  console.log("SearchedList is", searchedList)

 

  return (
    
    <div className="App">
      <div>
      <NavBar />
      </div>
      <div style={{display: 'flex' , flexDirection: 'row'}}>
      <div >
        <Filters />
      </div>
      <div style={{flexGrow: '1'}}>
      <Recommendations />
      <ProductList products={products}/>
      {keyword === "" ?<ProductList products={products}/>: <SearchedproductList />}
      
      </div>
      </div>
    </div>
    
  );
}

export default App;

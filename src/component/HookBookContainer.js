import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {buyBook} from '../redux'
function HookBookContainer(){

   const numberOfBooks = useSelector(state => state.numberOfBooks);
   const dispatch = useDispatch();
    return (
       <div>
          <h1>Hool Container </h1>
          <h1>Number of book = {numberOfBooks} </h1>
          <button onClick={()=>dispatch(buyBook())}>BuyBook</button>
       </div>
    )
}

export default HookBookContainer;
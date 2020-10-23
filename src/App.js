import React from "react";
import "./styles.css";
import store from './redux/store'
import {Provider} from 'react-redux'
import BookContainer from './component/BookContainer';
import HookBookContainer from './component/HookBookContainer';
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Hello CodeSandbox</h1>
      <BookContainer /> 
      <HookBookContainer />
    </div>
    </Provider>
    
  );
}

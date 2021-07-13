import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store';
import InputComp from './Components/InputComp';
import ListComp from "./Components/ListComp"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputComp></InputComp>
        <ListComp></ListComp>
      </div>
    </Provider>
  );
}

export default App;

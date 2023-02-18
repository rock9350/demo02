
import { Route, Router } from "react-router-dom";
import "./App.css";
import House_list from "./comp/house_list";
import NavBar from "./comp/NavBar";
import Filter from './comp/filter';
import { useState } from 'react';

function App() {
  let [filter_data,set_filter_data] = useState({});

  return <div className="App">
     <NavBar/>
     <Filter set_filter_data={set_filter_data}/>
    <House_list filter_data={filter_data}/>
  </div>;
}

export default App;

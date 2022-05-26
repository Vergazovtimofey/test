import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {EuiSuperDatePicker} from "./components/date_picker/super_date_picker/super_date_picker";



function App() {


  return (
    <div className="App">
      <EuiSuperDatePicker onTimeChange={}/>

    </div>
  );
}

export default App;

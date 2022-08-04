import logo from './logo.svg';
import './App.css';
import React from 'react';
import NameList from './Componants/NameList/NameList';
import ListItems from './Componants/ListItems/ListItems'
import Headerbar from './Componants/HeaderBar/Headerbar';
import Login from './Componants/Login/Login';

function App() {
  return(
    <div>
          <Headerbar/>
         <NameList/>
    </div>
  )
}

export default App;

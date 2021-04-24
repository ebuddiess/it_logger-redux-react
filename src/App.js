import React , {useEffect} from 'react';

import store from './store';

  
import {Provider }from 'react-redux';
 

import TechListModal from './Components/techs/TechListModal';


import AddTechModal from './Components/techs/AddTechModal';




import AddLogModel from './Components/AddLogModel';


import AddButton from './Components/Layouts/AddButton';


import Logs from './Components/logs/Logs';


import Navbar from './Components/Layouts/Navbar';

import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css/dist/js/materialize.min'

import './App.css';
import EditLogModel from './Components/EditLogModel';

const App = () => {

  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <div className="container">
        <AddButton />
        <AddLogModel />
        <EditLogModel/>
        <AddTechModal />
        <TechListModal />
        <Logs /> </div>   
      
    </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Users from './componentes/vistausuarios';
import Dash from './componentes/dashboard';

import {BrowserRouter, Route} from 'react-router-dom';

//tasks es el nombre que se importa desde el archivo. 

 const App =() =>(
      
    <BrowserRouter>
      <React.Fragment>
        <Route path="/visitausuarios" component = {Users} />
        <Route path="/dashboard" component = {Dash} />
      </React.Fragment>
      
    </BrowserRouter>
)




export default App;
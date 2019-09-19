import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './componentes/vistausuarios';
import Dash from './componentes/dashboard';
import registro from './componentes/ingresarregistro';

const App =() =>(
    <BrowserRouter>
      <React.Fragment>
        <Route path="/visitausuarios" component = {Users} />
        <Route path="/dashboard" component = {Dash} />
        <Route path="/ingresarregistro" component = {registro} />
      </React.Fragment>
    </BrowserRouter>
)

const container = document.getElementById('root')
ReactDOM.render(<App/>,container)

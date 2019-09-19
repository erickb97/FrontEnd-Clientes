import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
   return ( 
     
    <React.Fragment>

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li class="active"><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/visitausuarios">Clientes con Deuda</Link></li>
          <li><Link to="/ingresarregistro">Ingresar Pago</Link></li>
        </ul>
      </div>
    </nav>
   
    </React.Fragment>
  );
  
};
        
export default Nav;
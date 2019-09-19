import React from 'react';
import datos from '../datos_tmp.json';
import Nav from './navigation';

class Users extends React.Component{
  state = {
    datos: datos
  }
  

  render(){
    return(
      
      <div>
        <Nav />
        <div class="container">
          <h2>Clientes con deudas </h2>
          <p>Listado de los clinetes registrados con creditos:</p>            
          <table class="table table-striped">
            <thead>
              <tr>
                <th>No. </th>
                <th>Primer Nombre</th>
                <th>Apellido</th>
                <th>DPI</th>
                <th>Telefono</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.datos.map(e => <tr >
                <td>{e.No}</td>
                <td>{e.nombre}</td>
                <td>{e.Apellido}</td>
                <td>{e.DPI}</td>
                <td>{e.Celular}</td>
                </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Users;
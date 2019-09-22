import React from 'react';
import datos from '../datos_tmp.json';
import Nav from './navigation';

class Users extends React.Component{
  state = {
    datos: []
  }
  
  componentDidMount() {
    fetch('http://localhost:8080/proyectopw/webresources/user/all')
        .then(res => res.json())
        .then((data) => {
            this.setState({ datos: data })
        })
        .catch(console.log)
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
                <th>Segundo Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>DPI</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Correo</th>

              </tr>
            </thead>
            <tbody>
              
              {this.state.datos.map(e => <tr >
                <td>{e.Id_Clientes}</td>
                <td>{e.nombre1}</td>
                <td>{e.nombre2}</td>
                <td>{e.apellido1}</td>
                <td>{e.apellido2}</td>
                <td>{e.dpi}</td>
                <td>{e.direccion}</td>
                <td>{e.telefono}</td>
                <td>{e.correo}</td>

                </tr>)}              
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Users;
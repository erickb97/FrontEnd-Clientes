import React from 'react';
import Nav from './navigation';
import {Link} from 'react-router-dom';

class Users extends React.Component{
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  state = {
    datos: [],
  }

  datos = {
    firstName: '',
    lastName: ''
}

handleChange(event) {
  let person = this.datos;
  person[event.target.name] = event.target.value;
  this.setState({person});
}  
  componentDidMount() {
    fetch('http://localhost:8080/proyectopw/webresources/user/all')
        .then(res => res.json())
        .then((data) => {
            this.setState({ datos: data })
        })
}
  render(){
    return(
      
      <div>
        <Nav />
          
        <h2>Clientes con deudas </h2>

        <div class="col-md-8">
          <h3>Listado de Clientes</h3>

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
                <th>Acciones</th>

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
                <td>
                    <Link to="/registrapagos">pago</Link>
                </td>

                </tr>)}              
            </tbody>
          </table>
        </div>
        <div class="col-md-4">
             <h3>Buscar cliente</h3>               
             {/*   <Iframe url='http://localhost:3000/ingresarregistro'
                  width="500px%"
                  height="500px%"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/> */}
                  <form action="./caputra.php" method="post">
                        <div class="input-group mb-3">
                            <label>Primer Nombre</label>
                            <input type="text"name="firstName"  />
                        </div>
                        
                        <div class="input-group mb-3">
                            <label>Primer Apellido</label>
                            <input type="text"name="lastName"  />
                        </div>
                        <button type="submit">enviar</button>
                    </form>

                  <table class="table table-striped">
                <thead>
                <tr>
                    <th>Primer Nombre</th>
                    <th>Primer Apellido</th>

                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{this.datos.firstName}</td>
                    <td>{this.datos.lastName}</td>

                    </tr>           
                </tbody>
            </table>
               
         </div>
         
         
        </div>
    )
  }

}

export default Users;
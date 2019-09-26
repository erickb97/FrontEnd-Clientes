import React from 'react';
import Nav from './navigation';
import axios from 'axios'
class ingresaRegistro extends React.Component{
      state = {
                nombre1: '',
                nombre2: '',
                apellido1: '',
                apellido2: '',
                tel: '',
                dpi: '',
                correo: '',
                direccion: ''
        }

    handleChange(event) {
        let person = this.state;
        person[event.target.name] = event.target.value;
        this.setState({person});
    }

    handleSubmit = event => {
        event.preventDefault();
     
        const usuario = this.state;
     
        axios.post('http://localhost:8080/proyectopw/webresources/user/inc/'+this.state.nombre1+'/'+this.state.nombre2+'/'+
        this.state.apellido1+'/'+this.state.apellido2+'/'+this.state.tel+'/'+this.state.dpi+'/'+this.state.correo+'/'+this.state.direccion+'/')
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
     
      render(){
        return(
            <div>
                <Nav/>
                <form onSubmit={this.handleSubmit}>
                        <div class="input-group mb-3">
                            <label>Primer Nombre</label>
                            <input type="text"name="nombre1" value={this.state.nombre1} onChange={this.handleChange.bind(this)} />
                        </div>
                        
                        <div class="input-group mb-3">
                            <label>Segundo Nombre</label>
                            <input type="text"name="nombre2" value={this.state.nombre2} onChange={this.handleChange.bind(this)} />
                        </div>

                        <div class="input-group mb-3">
                            <label>Primer Apellido</label>
                            <input type="text"name="apellido1" value={this.state.apellido1} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div class="input-group mb-3">
                            <label>Segundo Apellido</label>
                            <input type="text"name="apellido2" value={this.state.apellido2} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div class="input-group mb-3">
                            <label>DPI</label>
                            <input type="text"name="dpi" value={this.state.dpi} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div class="input-group mb-3">
                            <label>Telefono</label>
                            <input type="text"name="tel" value={this.state.tel} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div class="input-group mb-3">
                            <label>Correo</label>
                            <input type="text"name="correo" value={this.state.correo} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div class="input-group mb-3">
                            <label>Direccion</label>
                            <input type="text"name="direccion" value={this.state.direccion} onChange={this.handleChange.bind(this)} />
                        </div>

                        <button type="submit" class="btn btn-default">Agregar</button>
                    </form>
            </div>

           
        );
      }
    
}

export default ingresaRegistro;

import React from 'react';
import Nav from './navigation';

class Pagos extends React.Component{

    state = {
        nombre1: '',
        apellido1: '',
        dpi: '',
        monto: ''
    }   

    handleChange(event) {
    let person = this.state;
    person[event.target.name] = event.target.value;
    this.setState({person});
    }

    handleSubmit = event => {
    event.preventDefault();

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
                <div class="container panel panel-default">
                <div class="panel-heading"><h3>Realizar Pagos</h3></div>
                <div class="panel-body">

                
                <form class="form-horizontal">
                    <div class="form-group">
                    <label class="control-label col-sm-2" for="nombre1">Primer Nombre:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="nombre1" placeholder="Ingrese su nombre" name="nombre1"></input>
                    </div>
                    </div>

                    <div class="form-group">
                    <label class="control-label col-sm-2" for="apellido">Apellido:</label>
                    <div class="col-sm-10">          
                        <input type="text" class="form-control" id="apellido" placeholder="Ingrese su nombre" name="apellido"></input>
                    </div>
                    </div>

                    <div class="form-group">
                    <label class="control-label col-sm-2" for="dpi">Ingrese su DPI:</label>
                    <div class="col-sm-10">          
                        <input type="text" class="form-control" id="dpi" placeholder="Ingrese su DPI (1895123542201)" name="dpi"></input>
                    </div>
                    </div>

                    <div class="form-group">
                    <label class="control-label col-sm-2" for="dpi">Cantidad a abonar:</label>
                    <div class="col-sm-10">          
                        <input type="text" class="form-control" id="dpi" placeholder="Q 0.00" name="dpi"></input>
                    </div>
                    </div>
                    
                    <div class="form-group">        
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>
            </div>    
        )
            
    }
}

export default Pagos;
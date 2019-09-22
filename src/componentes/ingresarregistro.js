import React from 'react';
import Nav from './navigation';

const ingresaRegistro = () =>{
    return(
        <div>
            <Nav />
        <div class="jumbotron text-center">
            <h1>Registro de pagos</h1>
        </div>
        <div class="container">

            <form>
            <div class="input-group mb-3">
                <label>Primer Nombre</label>
                <input type="text" class="form-control"></input>
            </div>
            
            <div class="input-group mb-3">
                <label>Primer Apellido</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="input-group mb-3">
                <label>No. DPI</label>
                <input type="text" class="form-control"></input>
            </div> <br/>
                <button>buscar cliente</button>

            </form>

            <div class="jumbotron text-center">
            <h3>coincidencias: </h3>
            </div>
        </div>
        </div>
    );
}

export default ingresaRegistro;
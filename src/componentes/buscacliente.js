import React from 'react';
class buscaCliente extends React.Component{
    render() {
        return(
            <div class="container">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Primer Nombre</th>
                    <th>Primer Apellido</th>

                </tr>
                </thead>
                <tbody>
                    {this.state.person.map(e => <tr >
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>

                    </tr>)}              
                </tbody>
            </table>
         </div>
        )
    }
} 

export default buscaCliente;
import './assets/bootstrap.min.css'
import React, { Component } from 'react';

import Header from './components/Header'
import NuevaCita from './components/NuevaCita'


class App extends Component {

    state = {
        citas: []
    };

    crearNuevaCita = (datos) => {

        console.log(datos);

        this.setState({
        citas : [...this.state.citas, datos]
        })

    }
    render() {
        return (
            <div className="container">
                <Header titulo="administrador" />

                <div className="row">
                    <div className="col-md-10 mx-auto">

                        <NuevaCita
                            crearNuevaCita={this.crearNuevaCita}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
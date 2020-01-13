
import React, { Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {

    state = {
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            sintomas: ''
        },
        error: false
    }

    handleChange = (e) => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const { mascota, propietario, fecha, sintomas } = this.state.cita;
        if (mascota === '' || propietario === '' || fecha === '' || sintomas === '') {
            this.setState( { error : true});
            return;
        }

        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();
        this.props.crearNuevaCita(nuevaCita)
    }
    render() {
        return (
            <div className="card-mt-5 py-5">

                <div className="card-body">

                    <h4 className="card-title text-center mb-5">
                        Llenar formulario para crear una nueva cita
                  </h4>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label" >Nombre dueño</label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre propietario"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label" >Fecha</label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label" >Sintomas</label>

                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Describe los sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center" >
                            <button type="submit" className="btn btn-success"> Guardar </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default NuevaCita;
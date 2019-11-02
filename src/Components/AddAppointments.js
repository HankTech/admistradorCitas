import React, { Component } from 'react';
import uuid from 'uuid';

class AddAppointments extends Component {

    //  refs del formulario
    petNameRef = React.createRef();
    ownersNameRef = React.createRef();
    dateRef = React.createRef();
    hourRef = React.createRef();
    symptomRef = React.createRef();


    state = { 
        error: false
     }


    createNewAppointment = (e) => {
        //  prevenir default
        e.preventDefault();

        //  crear objeto con los datos
        const petName = this.petNameRef.current.value;
        const ownersName = this.ownersNameRef.current.value;
        const date = this.dateRef.current.value;
        const hour = this.hourRef.current.value;
        const symptom = this.symptomRef.current.value;

        if (petName === '' || ownersName === '' || date === '' || hour === '' || symptom === '') {

            this.setState({
                error: true
            })
        }
        else {

            const newAppointment = {
                id: uuid(),
                petName,
                ownersName,
                date,
                hour,
                symptom
            }

            //  envia el objeto por props al App(padre) para actualizar el state
            this.props.createAppointment(newAppointment);

            //  reset formulario
            e.currentTarget.reset();

            //  Eliminando el Error
            this.setState({
                error: false
            });
        }
        


    }

    render() {

        //  para el Mensaje de Alerta
        const thereError = this.state.error;

        return (

            <div className="card mt-5">
                <div className="card-body">

                    <h2 className="card-title text-center text-info mb-5">Agregar tus citas aquí</h2>

                    <form onSubmit={this.createNewAppointment}>
                        <div className="form-group row">
                            <label className="col-sm-3 col-lg-2 pr-1">Nombre Mascota</label>
                            <div className="col-sm-9 col-lg-10 pl">
                                <input ref={this.petNameRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                             </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-lg-2">Nombre Dueño:</label>
                            <div className="col-sm-9 col-lg-10">
                                <input ref={this.ownersNameRef} type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" />
                             </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">Fecha:</label>
                            <div className="col-sm-8 col-lg-5 mb-4 mb-lg-0">
                                <input ref={this.dateRef} type="date" className="form-control" />
                            </div>

                            <label className="col-form-label col-sm-4 col-lg-1 pl-0 pr-0">Hora:</label>
                            <div className="col-sm-8 col-lg-4 pl-4">
                                <input ref={this.hourRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2 pr-0">Sintomas:</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.symptomRef} className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>                            
                        </div> 

                    </form>

                    {thereError ? <div className="alert alert-danger text-center">¡Todos los campos son Obligatorios!</div> : ''}

                </div>
                
            </div>

        )
    }
}

export default AddAppointments;
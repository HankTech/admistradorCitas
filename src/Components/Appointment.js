import React, { Component } from 'react';

class Appointment extends Component {

    deleteAppointment = () => {        
        this.props.deleteAppointment(this.props.info.id);       
    }

    render() {

        const { petName, ownersName, date, hour, symptom } = this.props.info;

        return (
            <div className="media border-bottom mt-3 pb-3">
                <div className="media-body">
                    <h3 className="">{ petName }</h3>
                    <p className="card-text mt-0 mb-0"><span className="font-weight-bold mr-2">Nombre del Dueño:</span>{ ownersName }</p>
                    <p className="card-text mt-0 mb-0"><span className="font-weight-bold mr-2">Fecha:</span>{ date }</p>
                    <p className="card-text mt-0 mb-0"><span className="font-weight-bold mr-2">Hora:</span>{ hour }</p>
                    <p className="card-text mt-0 mb-0"><span className="font-weight-bold mr-2">Sintomas:</span></p>
                    <p className="card-text">{ symptom }</p>

                    <button onClick={ this.deleteAppointment } className="btn btn-danger">
                        Borrar &times;
                    </button>

                </div>                
            </div>
        )
    }

}

export default Appointment;
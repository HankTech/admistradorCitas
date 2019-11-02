import React, { Component } from 'react';

import '../css/App.css'

//  Components
import Header from './Header';
import AddAppointments from './AddAppointments';
import AppointmentList from './AppointmentList';

class App extends Component {

    state = { 
        Appointments: []
    }


    componentDidMount() {
        const AppointmentsLS = localStorage.getItem('Appointments');
        if (AppointmentsLS) {
            this.setState({
                Appointments: JSON.parse(AppointmentsLS)
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'Appointments',
            JSON.stringify(this.state.Appointments) 
        )
    }


    createAppointment = (newAppointment) => {
        //  creando copia del state y le pasamos la nueca cita
        const Appointments = [...this.state.Appointments, newAppointment]

        //  actualizando el state
        this.setState({
            Appointments
        });
    }

    deleteAppointment = (id) => {
        //  creando copia del state
        const currentAppoinment = [...this.state.Appointments];       

        //  borrar elemento del state
        const Appointments = currentAppoinment.filter( Appointments => Appointments.id !== id );

        //  actualizar el state
        this.setState({
            Appointments
        });
    }

    render () {

        return (
            <div className="container">
                <Header title='Administrador de Pasientes de Veterinario' />

                <div className="row">

                    <div className="col-sm-6 col-md-6">
                        <AddAppointments 
                            createAppointment={this.createAppointment}
                        /> 
                    </div>

                    <div className="col-sm-6 col-md-6">
                        <AppointmentList 
                            appointmentList={this.state.Appointments}
                            deleteAppointment={this.deleteAppointment}
                        />
                    </div>
                   

                </div>                
            </div>
        )
    }
}

export default App;

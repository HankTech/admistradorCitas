import React, { Component } from 'react';

//  Components
import Appointment from './Appointment';

class AppointmentList extends Component {

    render() {

        //  para validar el mensaje de alerta
        const appointmentsList = this.props.appointmentList;
        
        const message = Object.keys(appointmentsList).length === 0 ? 'No hay Citas' : 'Administra tus citas aquí';

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center text-info">{message}</h2>

                    <div className="">
                        {Object.keys(this.props.appointmentList).map(appointment => (
                            
                            <Appointment
                                key={appointment} //la key del arreglo
                                info={this.props.appointmentList[appointment]}
                                deleteAppointment={this.props.deleteAppointment}
                            />

                        ) )}
                    </div>
                    
                </div>

            </div>
        )

    }
}

export default AppointmentList;
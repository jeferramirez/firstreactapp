import React from 'react';
import Cita from './Cita'
const ListaCitas = ({ citas }) =>  (
        <div className="card mt-2 py-5">
            <div className="card-body">

                <h2 className="card-title text-center">
                    Administre sus citas aquí
                </h2>

                <div className="lista-cita">
                  {
                      citas.map( cita => {

                       return <Cita
                         key = {cita.id}
                         cita= {cita}
                       />
                
                      })
                  }
                </div>
            </div>
        </div>
    );

export default ListaCitas;
import React from 'react';

const Cita = ({ cita }) => {
    return (
        <div className="media mt-3">

            <div className="media-body">
                <h3 className="mt-0 text-center">{cita.mascota}</h3>
            </div>

        </div>
    );
};

export default Cita;
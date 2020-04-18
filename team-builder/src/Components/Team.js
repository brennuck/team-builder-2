import React from 'react';

const Team = props => {
    return (
        <div>
            {props.teammate.map(mate => (
                <div>
                    <h3> {mate.name} </h3>
                    <p> {mate.role} </p>
                </div>
            ))}
        </div>
    )
}

export default Team;
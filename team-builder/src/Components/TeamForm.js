import React, { useState } from 'react';

const TeamForm = props => {
    const [teammate, setTeammate] = useState({ name: "", email: "", role: "" });

    const handleChanges = e => {
        setTeammate({ ...teammate, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeammate(teammate);
        setTeammate({ name: "", email: "", role: "" })
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={teammate.name}
                />
                <label>Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleChanges}
                    value={teammate.email}
                />
                <label>Role</label>
                <input
                    id="role"
                    type="text"
                    name="role"
                    onChange={handleChanges}
                    value={teammate.role}
                />
                <button type="submit">Add Teammate</button>
            </form>
        </div>
    )
}

export default TeamForm;
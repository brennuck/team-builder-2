import React, { useState } from 'react';

import Team from './Components/Team';
import TeamForm from './Components/TeamForm';

function App() {
  const [teammate, setTeammate] = useState([
    {
      id: 1,
      name: "Brennon",
      role: "Full Stack Web Deleloper",
      email: "brennuck@gmail.com"
    },
    {
      id: 2,
      name: "Cameron",
      role: "Big Brother",
      email: "bigbro@gmail.com"
    }
  ]);

  const addNewTeammate = mate => {
    const newTeammate = {
      id: Date.now(),
      name: mate.name,
      role: mate.role,
      email: mate.email
    };
    setTeammate([ ...teammate, newTeammate ])
  }

  return (
    <div className="App">
      <h1>The Team</h1>
      <TeamForm addNewTeammate={addNewTeammate} />
      <Team teammate={teammate} />
    </div>
  );
}

export default App;

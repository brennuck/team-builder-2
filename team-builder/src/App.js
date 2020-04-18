import React, { useState } from 'react';
import Team from './Components/Team';

function App() {
  const [teammate, setTeammate] = useState([
    {
      id: 1,
      name: "Brennon",
      role: "Full Stack Web Deleloper"
    },
    {
      id: 2,
      name: "Cameron",
      role: "Big Brother"
    }
  ]);

  return (
    <div className="App">
      <h1>The Team</h1>
      <Team teammate={teammate} />
    </div>
  );
}

export default App;

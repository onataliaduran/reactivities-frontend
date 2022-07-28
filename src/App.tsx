import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Activity } from './app/models/activity';
import Navbar from './app/layout/navbar/Navbar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        console.log('act', response);
        // setActivities(response);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

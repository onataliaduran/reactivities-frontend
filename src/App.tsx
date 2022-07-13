import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      console.log('act', response);
      // setActivities(response);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />

      <List>
        {activities.map((p: any) => (
          <List.Item key={p.id}>{p.title}</List.Item>
        ))}
      </List>

    </div>
  );
}
 
export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <List>
        {activities.map((p) => (
          <List.Item key={p.id}>{p.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;

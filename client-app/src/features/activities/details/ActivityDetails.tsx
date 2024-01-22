import React from 'react'
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
// import ActivityDetailedChat from "./ActivityDetailedChat";
// import ActivityDetailedInfo from "./ActivityDetailedInfo";
// import ActivityDetailedSideBar from "./ActivityDetailedSideBar";
// import ActivityDetailsHeader from "./ActivityDetailsHeader";

const ActivityDetails: React.FC = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent content="Loading app" />;

  return (
    // <Grid>
    //   <Grid.Column width={10}>
    //     <h1>{activity.id}</h1>
    //     {/* <ActivityDetailsHeader /> */}
    //     {/* <ActivityDetailedInfo /> */}
    //     {/* <ActivityDetailedChat /> */}
    //   </Grid.Column>
    //   <Grid.Column width={6}>{/* <ActivityDetailedSideBar /> */}</Grid.Column>
    // </Grid>
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={`/manage/${activity.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            as={Link}
            to="/activities"
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);

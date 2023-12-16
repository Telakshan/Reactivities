import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";

interface ActivityDashboardProps {
  activities: Activity[];
}

const ActivityDashboard: React.FC<ActivityDashboardProps> = ({
  activities
}) => {
  const { activityStore } = useStore();
  const { loadActivities } = activityStore;
  const { selectedActivity, editMode } = activityStore;


  // useEffect(() => {
  //   loadActivities();
  // }, [activityStore]);

  if(activityStore.loadingInitial) return <LoadingComponent content="Loading app"/>

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);

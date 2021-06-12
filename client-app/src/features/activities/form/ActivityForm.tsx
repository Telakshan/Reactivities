import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

interface ActivityFormProps {
  closeForm: () => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ closeForm }) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" />
        <Form.TextArea placeholder="Description" />
        <Form.Input placeholder="Category" />
        <Form.Input placeholder="Date" />
        <Form.Input placeholder="City" />
        <Form.Input placeholder="Venue" />
        <Button float="right" positive type="submit" content="Submit" />
        <Button float="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
};

export default ActivityForm;

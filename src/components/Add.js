import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "../App.css";

function Add() {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/users").then((response) => {
      if(response.data.length > 0) {
        this.setState({
          user: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }


  render() {

  
  return (
    <div>
      <h3>Add Bicycle Rides</h3>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        
      </Form>
    </div>
  );
}
}

export default Add;

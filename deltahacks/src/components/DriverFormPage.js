import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/riderForm.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

class DriverFormPage extends React.Component{
  //search bar label
  state = {direction: "To"};

  //when 'From Mac' is selected
  onClickFrom = (event) => {
    this.setState({
      direction: 'To'
    });
    //highlight correct button
    event.target.style.backgroundColor = "#aa2441";
    document.getElementById("to").style.backgroundColor = "#751c2f";
  }

  //when 'To Mac' is selected
  onClickTo = (event) => {
    this.setState({
      direction: 'From'
    });
    //highlight correct button
    event.target.style.backgroundColor = "#aa2441";
    document.getElementById("from").style.backgroundColor = "#751c2f";
  }

  render()
  {
    return (
      <div className="DriverFormPage">
        <h2><b>DRIVER</b></h2>
        <p></p>
        <p>Please answer the following</p>
        <hr></hr>
        <p>Direction</p>
        <div>
          <ButtonGroup className="toggleButtons" aria-label="Basic example">
            <Button id="from" className="directionButton" variant="danger" onClick={this.onClickFrom}>From McMaster</Button>
            <Button id="to" className="directionButton" variant="danger" onClick={this.onClickTo}>To McMaster</Button>
          </ButtonGroup>
        </div>
        <p></p>
        <div>
          <Form>
            <Form.Group controlId="formGridCity">
              <Form.Label id="textLabel">{this.state.direction}</Form.Label>
              <Form.Control placeholder="Search By City Name"/>
            </Form.Group>
          </Form>
        </div>
        <span>
          <Button className="submit" variant="danger">Post a Ride</Button>
        </span>
        <br></br>
        <br></br>
        <p><i>DeltaHacksVI Project 2020</i></p>
      </div>
    );
  }
}

export default DriverFormPage;

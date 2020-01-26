import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/welcome.css';
import Button from 'react-bootstrap/Button';

function WelcomePage() {
  return (
    <div className="WelcomePage">
        <h2><b>WELCOME</b></h2>
        <p></p>
        <p>Please choose an option</p>
        <div>
            <span>
                <Button className="welcomeButton" variant="danger">RIDER</Button>
                <Button className="welcomeButton" variant="danger">DRIVER</Button>

            </span>
        </div>
        <p><i>DeltaHacksVI Project 2020</i></p>
    </div>
  );
}

export default WelcomePage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/welcome.css';
import Button from 'react-bootstrap/Button';
import RiderFormPage from "./RiderFormPage";
import DriverFormPage from "./DriverFormPage";
import ReactDOM from 'react-dom';

export class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRider = () =>
    {
        ReactDOM.render(<RiderFormPage/>, document.getElementById('root'));
    }

    handleDriver = () =>
    {
        ReactDOM.render(<DriverFormPage/>, document.getElementById('root'));
    }


    render()
    {
        return (
            <div className="WelcomePage">
                <h2><b>WELCOME</b></h2>
                <p></p>
                <p>Please choose an option</p>
                <div>
                    <span>
                        <Button className="welcomeButton" variant="danger" onClick={this.handleRider}>RIDER</Button>
                        <Button className="welcomeButton" variant="danger" onClick={this.handleDriver}>DRIVER</Button>
                    </span>
                </div>
                <p><i>DeltaHacksVI Project 2020</i></p>
            </div>
        );
    }
}

export default WelcomePage;

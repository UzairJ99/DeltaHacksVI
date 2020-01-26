import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/login.css';
import loginImg from "../images/login.svg";
import WelcomePage from "./WelcomePage";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props); 
  }

  handleLogin = () =>
  {
    ReactDOM.render(<WelcomePage/>, document.getElementById('root'));
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={this.handleLogin} className="btn">Login</button>
          </div>
        </div>
    );
  }
}

export default LoginPage;

import React, {Component} from "react";
import '../../css/OM.css';
import users from './users.json';

class Login extends Component {
  //Setting the component's initial state
  state = {
    // user's info. Assumption: there is a way to sign in users and there is a db to handle this information.
    userId: "",
    password: ""
  };
  
  handleInputChange = event => {
    //Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Update the input's state
    this.setState({
      [name]: value
    });
  };

  // Validate users' login
  validateUser = event => {
    //Preventing default event (refreshing the page)
    event.preventDefault();
    console.log(` User: ${this.state.userId} \n ID: ${this.state.password}`);
    this.setState({
      userId: "",
      password: ""
    });
  };

  render() {

    return (
      <div className = 'container3' >
        <div className='loginForm'>
          <div className='selectWidth95'>
            <input
              value={this.state.userId}
              name="userId"
              id="userId"
              className='inputboxBg'
              size='15'
              maxLength='15'
              placeholder='User ID'
              onChange={this.handleInputChange}
              type='text'
            />
          </div>
          <div className='spacer1' />
          <div className='selectWidth95'>
            <input
              value={this.state.password}
              name='password'
              type='password'
              className='inputboxBg'
              size='15'
              maxLength='15'
              placeholder='Password'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='container alignCenter'>
            <span className='floatLeft marginTop15'>
              <a href='#' title='Login Information'>
                <button className='roundedButtoninfo' type='button' align='top'></button>
              </a>
            </span>
            <input onClick={this.validateUser} className='loginButtonblue' id='' type='submit' value='Login' />
          </div>
        </div>
      </div>
    );
  };
};  
export default Login;

  
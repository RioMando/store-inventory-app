import React, {Component} from "react";
import '../../css/OM.css'

class Login extends Component {
  
  state = {
    // user's info. Assumption: there is a way to sign in users and there is a db to handle this information.
    users: [
      { userId: 'AB1234', password: 'hello' },
      { userId: 'CD5678', password: 'morning'}
    ]
  };
  
  //validate users
  validateUser = event => {
    event.preventDefault();
    // console.log('button was clicked');
    console.log(` User: ${this.state.userId} \n ID: ${this.state.password}`);
  }

  render() {

    return (
      <div className = 'container3' >
        <div className='loginForm'>
          <div className='selectWidth95'>
            <input name='userId' id='userId' type='text' className='inputboxBg' size='15' maxLength='15' placeholder='User ID' value={this.state.usereId} />
          </div>
          <div className='spacer1' />
          <div className='selectWidth95'>
            <input name='password' type='password' className='inputboxBg' size='15' maxLength='15' placeholder='Password' value={this.state.password} />
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

  
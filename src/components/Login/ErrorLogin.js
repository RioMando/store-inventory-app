import React from "react";
import '../../css/OM.css'

const ErrorLogin = () => (
  
  <div className='container1 selectWidth50'>
    <div id='alertBox'>
      <div className='alertboxContent'>
        <div className='spacer1'>
          <div>
            <p>Unable to login,</p>
            <p>please try again.</p>
          </div>
          <div className='spacer2'></div>
          <div>
            <input type='submit' value='OK' className='alertButtonblue' />
          </div>
          <div className='clear' />
          <div className='sapcer1' />
        </div>  {/* close spacer1 */}
      </div>  {/* close alertboxContent */}
    </div>  {/* close alertBox */}
  </div>


  
);

export default ErrorLogin;
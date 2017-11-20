import React from 'react';
import AboutComponent from './AboutComponent';
import EmailComponent from './EmailComponent';
import ReasonsComponent from './ReasonsComponent';
class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="main container-fluid">
          <div className="row logo" >
            LOGO
          </div>
          <div className="row" >

            <AboutComponent />
            <div className="col-md-4 col-md-offset-2">
              <EmailComponent />
            </div>
          </div>
          <br />
          <div className="row">
            <h4 className="sentence col-md-6 col-md-offset-3">It's about what you say not what you bet !</h4>
          </div>
          <hr />


          <ReasonsComponent />



        </div>
      </div>
    );
  }
}

export default MainComponent;
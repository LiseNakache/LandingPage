import React from 'react';
import AboutComponent  from './AboutComponent';
import EmailComponent from './EmailComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
          <br />
        <AboutComponent/>
        <br />
        <EmailComponent/>
        <br />
        <span>It's about what you say not what you bet !</span>
        {/* <ReasonsComponent/> */}
      </div>
    );
  }
}

export default MainComponent;
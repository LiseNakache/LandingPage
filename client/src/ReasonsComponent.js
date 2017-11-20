import React from 'react';
import FirstReason from './FirstReason';
import SecondReason from './SecondReason';
import ThirdReason from './ThirdReason';
import EmailComponent from './EmailComponent';

class ReasonsComponent extends React.Component {
  render() {
    return (
      <div className="reasons">
        <h1 className="reason-join row"> 3 reasons to join</h1>
        <div className="row">
          <FirstReason />
          <SecondReason />
          <ThirdReason />
        </div>
        <div className="row">
          <EmailComponent />
        </div>
      </div>
    );
  }
}

export default ReasonsComponent;

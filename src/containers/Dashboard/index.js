import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import '../Dashboard/d';

export class Dashboard extends Component {
  render() {
    return (
      <div>
       <div className="header">
     {/* <h1><img src="logo-express.png" alt="" height="102" width="300"></h1>  */}
        </div> 
    <nav>
      <ul></ul>
    </nav>
    <div className="fullWidthDiv">
      <div className="headerText">
        <h1>Your Business<br/>SIMPLIFIED</h1>
     </div>
    </div>
  
   
   <div className="leftSideMenu">
     <ul>
       <li>Home</li>
       <li>Create An Account</li>
       <li>View Accounts</li>
       <li>Log Out</li>
     </ul>
   </div> 
   
   <div className="main">
     <h1>Your Account</h1>
     <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
     <p>Resize the browser window to see how the content respond to the resizing.</p>
   </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Dashboard);
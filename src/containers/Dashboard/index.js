import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 align-center">
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            buttons go here...
          </div>
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
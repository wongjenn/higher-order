import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton(){
    if (this.props.authenicated) {
      return (
        <button onClick={() => this.props.authenicate(false)}>Sign Out</button>
      )
    }
    return (
      <button onClick={() => this.props.authenicate(true)}>Sign In</button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
       <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="nav-item">
          {this.authButton()}
        </li>
       </ul>
      </nav>
    );
  }
}

function mapStateToProps({authenicated}){
  return { authenicated };
}

export default connect(mapStateToProps, actions)(Header);

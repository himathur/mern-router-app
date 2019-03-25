import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogoutBtnClick = (event) => {
    event.preventDefault();
    // const location = {
    //   pathname: '/login',
    //   state: {}
    // }
    // this.props.history.push(location);
  }

  render() {
    console.log("\n dahboard props:  ", this.props);
    return (
      <div>
        <h3>Dashboard</h3>
        <br/>
        <button onClick={this.onLogoutBtnClick}>
            Logout
        </button>
      </div>
    );
  }
}

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  // render method -> returns a piece of jsx that is rendered on screen
  render() {
    const { name } = this.props;
    return (
      <div className="user">
        <h2>Name: {name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: @pravirMarch21</h4>
      </div>
    );
  }
}

export default UserClass;

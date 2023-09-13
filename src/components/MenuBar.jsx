import React, { Component } from "react";

class MenuBar extends Component {
  handleClick = () => {
    console.log("Menu bar clicked!");
    // Add any other logic you want to perform on menu bar click here
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {/* Your menu bar content */}
        Menu Bar
      </div>
    );
  }
}

export default MenuBar;

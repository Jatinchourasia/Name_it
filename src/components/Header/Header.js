import React, { useState, Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="head-container">
        <img
          className={`head-image ${
            this.props.headerExpanded
              ? `head-image-expanded`
              : `head-image-contracted`
          } `}
          src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
          alt=""
        />
        <h1
          className={`head-text ${
            this.props.headerExpanded
              ? `head-text-expanded`
              : `head-text-contracted`
          }`}
        >
          {this.props.headTitle}
        </h1>
        <br />
      </div>
    );
  }
}

export default Header;

import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Craftee</li>
          <ul className="nav-push-right">
            <li className="login">Login</li>
            <li className="signup">Signup</li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

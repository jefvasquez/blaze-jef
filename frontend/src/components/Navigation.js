import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
    render() {
      const show = (this.state.menu) ? "show" : "" ; 
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  {/* <div className="container"> */}
                    <Link className="navbar-brand" to="/">Blaze Test</Link>
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse " + show} id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">Customers <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/ag-grid">AG Grid</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/create">Create Customer</Link>
                        </li>
                      </ul>
                    </div>
                  {/* </div> */}
                </nav>
        )
    }
}

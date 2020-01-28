import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Form from '../Form/Form'

class Header extends Component {




  render() {
    return (
      <header id='header'>
        <a id='logo'>Logo Maybe</a>
        <Link to='/'><button id='head-content'>Dashboard</button></Link>
        <Link to='/form'><button id='head-content'>Add Inventory</button></Link>
      </header>
    );
  }
}

export default Header;

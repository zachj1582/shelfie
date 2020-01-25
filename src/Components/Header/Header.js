import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Form from '../Form/Form'

class Header extends Component {




  render() {
    return (
      <header id='header'>
        <a>Logo Maybe</a>
        <Link to='/'><button>Dashboard</button></Link>
        <Link to='/form'><button>Add Inventory</button></Link>
      </header>
    );
  }
}

export default Header;

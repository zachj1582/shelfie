import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  delete = id => {
    axios.delete(`/api/item/${id}`).then(() => {
      this.props.reRender();
    });
  };

  edit = id => {
    this.props.history.push(`/form/${id}`);
  };

  render() {
    return (
      <div id="content-slides">
        <img
          id="pic"
          src={
            `${this.props.img}` ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jAgW9NT8SwT5h-w6aGtilGIVtjZHnQKGASXY4XjB4KcBtKtwhw&s"
          }
          alt="product pic"
        />
        <div id="name-price">
          <p id="info">{this.props.name}</p>
          <p id="info">${this.props.price}</p>
        </div>
        <div id='buttons'>
          <button id='button' onClick={() => this.delete(this.props.id)}>Delete</button>
          <button id='button' onClick={() => this.edit(this.props.id)}>Edit</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);

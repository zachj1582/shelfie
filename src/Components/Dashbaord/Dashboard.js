import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount = () => {
    this.reRender();
  };

  reRender = () => {
    axios.get("/api/inventory").then(res =>
      this.setState({
        inventory: res.data
      })
    );
  };

  render() {
    return (
      <div>
        {this.state.inventory.map(e => {
          return (
            <Product
              key={e.id}
              name={e.name}
              price={e.price}
              img={e.img}
              id={e.id}
              reRender={this.reRender}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;

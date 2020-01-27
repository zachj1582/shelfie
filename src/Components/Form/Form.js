import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      price: 0,
      img: '',
      editing: false
    };
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount = () => {
      console.log(this.props);
      if (this.props.match.params.id) {
          axios.get(`api/item/${this.props.match.params.id}`).then(res =>
            this.setState({
                id: res.data.id,
                name: res.data.name,
                price: res.data.price,
                img: res.data.img,
                editing: true
            })
            );
    }
  };

  componentDidUpdate=(prevProps)=>{
      if (!this.props.match.params.id && prevProps.match.params !== this.props.match.params)
      this.setState({
          id: 0,
          name: '',
          price: 0,
          img: '',
          editing: false
      })
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCancel() {
    this.setState({ img: "", name: "", price: 0 });
  }

  handleAdd = (name, price, img) => {
    axios
      .post("/api/inventory", { name, price, img})
      .then(() => {
        this.setState({ img: "", name: "", price: 0, editing: false });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleEdit = (name, price, img, id) => {
    axios
      .put(`/api/item/${id}`, { name, price, img })
      .then(() => {
        this.setState({ img: "", name: "", price: 0, editing: false });
        this.props.history.push('/')
      })
      .catch(err => console.log(err));
  };

  render() {
    const { name, price, img, editing, id } = this.state;
    console.log(id)
    return (
      <div>
        <div></div>
        <p>Image URL:</p>
        <input
          name="img"
          value={this.state.img}
          onChange={e => this.handleChange(e)}
        />
        <p>Product Name:</p>
        <input
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <p>Price:</p>
        <input
          name="price"
          value={this.state.price}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.handleCancel()}>Cancel</button>
        {editing ? (
          <button onClick={() => this.handleEdit(name, price, img, id)}>
            Save Changes
          </button>
        ) : (
          <button onClick={() => this.handleAdd(name, price, img)}>
            Add to Inventory
          </button>
        )}
      </div>
    );
  }
}

export default Form;

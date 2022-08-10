import React from "react";
import ShopInputQuantity from "../ShopInputQuantity";
import ShopForm from "./ShopForm";

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }


  update = (id, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    console.log(" vypise id>> " + id + "vypise val>> " + newValue);
  };

  handleEdit = (value) => {
    this.props.edit(this.props.object.id, value)
    this.setState(
        {...this.state, isEditing: false}
    )
  }
  handleSubmit=(event)=>{
    if(!this.state.isEditing) {
        this.setState(
            {...this.state, isEditing: true}
        )
    }
    }


  //   edit = (id, newValue) => {
  //     this.state.arr.map((i) => (i.id === id ? (i.text = newValue) : i.text));
  //     return newValue;
  //   };

  // toggle = (id) => {
  //   this.state.arr.map((i) => i.id === id ? i.render= true : i.render = false);

  // }
  render() {
    console.log(this.props);
    return this.state.isEditing ? (
      <li>
        <ShopForm addShop = {this.handleEdit} editValue={this.props.object.text}/>
        <ShopInputQuantity/>
      </li>
    ) : (
      <li>
        {this.props.object.text} {this.props.object.quantity}
        <button
          className={
            this.props.arrayInput < 1 ? "not-visible" : "btn btn-custom"
          }
          onClick={() => this.props.removeItem(this.props.object.id)}
        >Remove</button>
        <button onClick={this.handleSubmit} >edit</button>
        {/*<button className={!object.text ? "not-visible" : "btn-edit"} onClick={() => this.props.toggle(object.id)}></button> </li>) */}
      </li>
    );
  }
}
export default ShopItem;

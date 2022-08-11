import React from "react";
import ShopForm from "../Shop_todo/ShopForm";
import Shop from "../Shop_todo/Shop";

class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

  // addQuantity = (item) => {
  //   this.numberValidation(item);
  // }

  addShop = (item) => {
    console.log(item);
    if (!item.value || /^\s*$/.test(item.value)) {
      return;
    } 

    if( /^\d+$/.test(item.value)){
      return;
    }
    const index = Math.floor(Math.random() * 1000);
    const contObject = { id: index, quantity: item.quantity , text: item.value, render: false};
    const newShops = [contObject, ...this.state.arr];
    console.log(this.state.arr);
    this.setState({ arr: newShops });
  };

  removeItem = (id) => {
    console.log(this.state);
    let newArr = this.state.arr.filter((i) => i.id !== id);
    console.log(id);
    this.setState({
      arr: newArr,
    });
  };

  edit = (id, newValue) => {
    console.log("setting new value ", id, newValue)
    const newArr = this.state.arr.map((i) => (i.id === id ? {...i, quantity: newValue.quantity, text: newValue.value} : i));
    console.log(newArr)
    this.setState({
      arr: newArr,
    });
  };

  render() {
    return (
      <div>
        <ShopForm addShop={this.addShop} />
        <Shop arrayInput={this.state.arr} removeItem={this.removeItem} edit={this.edit} />
      </div>
    );
  }
}

export default ShopList;

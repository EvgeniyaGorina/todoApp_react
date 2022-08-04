import React from 'react'
import ShopForm from './ShopForm'
import Shop from './Shop';

class ShopList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }

    addShop = (item) =>{
    if(!item || /^\s*$/.test(item)){
        return;
    }
    const newShops = [item, ...this.state.arr];
    console.log(this.state.arr);
    this.setState({arr:newShops})
 }
  render() {
    return (
      <div>
        <ShopForm addShop = {this.addShop}/>
        <Shop arrayInput={this.state.arr}/>
      </div>
    )
  }
}

export default ShopList;
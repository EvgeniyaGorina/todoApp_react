import React from 'react'
import ShopForm from '../Shop_todo/ShopForm'
import Shop from '../Shop_todo/Shop';

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
    const index = Math.floor(Math.random() * 1000);
    const contObject = {"id":index, "text": item};
    const newShops = [contObject, ...this.state.arr];
    console.log(this.state.arr);
    this.setState({arr:newShops});
 };

  render() {
    return (
      <div>
        
        <ShopForm addShop = {this.addShop}/>
        <Shop arrayInput={this.state.arr}  />
 
      </div>
    )
  }
  
}

export default ShopList;
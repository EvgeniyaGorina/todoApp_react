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
    const contObject = {"id":index, "text": item, "render":false};
    const newShops = [contObject, ...this.state.arr];
    console.log(this.state.arr);
    this.setState({arr:newShops});
 };

  removeItem =(id) => {
  console.log(this.state);
  let newArr = this.state.arr.filter((i) => i.id !== id);
  console.log(id);
  this.setState({
    arr: newArr
  })
}
// update =(id, newValue)=>{
//   if(!newValue || /^\s*$/.test(newValue)){
//     return;
// }
//   console.log('id>> ' +id + 'val>> ' + newValue);
// }
// edit = (id, newValue) => {
//   this.state.arr.map((i) => i.id === id ? i.text= newValue : i.text);
//   return newValue;
// }

// toggle = (id) => {
//   this.state.arr.map((i) => i.id === id ? i.render= true : i.render = false);

// }
  render() {
    return (
      <div>
        <ShopForm addShop = {this.addShop}/>
        <Shop arrayInput={this.state.arr} removeItem ={this.removeItem}/> 
        {/* update={this.update} toggle={this.toggle} edit={this.edit} */}
      </div>
    )
  }
  
}

export default ShopList;
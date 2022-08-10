import React from "react";
import ShopItem from "./ShopItem";
import "./Shop.css";

class Shop extends React.Component {
  state = {
    inputArr: this.props.arrayInput,
  };
  // Function looks like for nothing
  //  handleRemove(objectId){
  //  this.props.removeItem(objectId)
  //  }
  render() {
    // let liElements = []
    // for (let i = 0; i < value.length;i++){
    //     liElements.push(<li>{value[i]}</li>)
    // }
    // console.log(liElements);

    console.log("Props", this.props);
    return (
      <div>
        {/* Render array from props as <ul>, cycle through array */}
        <ul className="list">
          {this.props.arrayInput.map((object) => (
            <ShopItem key={object.id} object ={object} edit={this.props.edit} removeItem={this.props.removeItem}/>
          ))}
        </ul>

        {/* <ul>
            {
            liElements
            }
        </ul> */}

        {/* funkci removeItem přesuň z Shop.js do ShopList.js
Podívej se, jak máš udělané přidávání přes addShop, odebírání bude skoro úplně stejné */}
      </div>
    );
  }
}
export default Shop;

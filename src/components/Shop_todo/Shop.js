import React from 'react'
import ShopForm from '../Shop_todo/ShopForm'
import ShopList from './ShopList';
import './Shop.css';


class Shop extends React.Component {

  state = {
        inputArr:this.props.arrayInput
      }

 handleRemove(objectId){
 this.props.removeItem(objectId)
 }
//   removeItem(id) {
//     let arrRem = this.state.inputArr.splice(0,1)
//     console.log(JSON.stringify(this.state.inputArr));
//     let newArr = this.state.inputArr.filter((i) => i.id !== id);
//     console.log(id);
//     console.log(JSON.stringify(this.state.inputArr));
//     console.log(JSON.stringify(newArr));
//     this.setState({
//       // inputArr: newArr
//       inputArr: arrRem
//     });
//     // objArr.splice(0, 1)

    render() {
    // let liElements = []
    // for (let i = 0; i < value.length;i++){
    //     liElements.push(<li>{value[i]}</li>)
    // }

    // console.log(liElements);
  
    console.log('Props', this.props)
    return (
      
      <div>
        {/* Render array from props as <ul>, cykl pres pole */}
        <ul>
            {
            this.props.arrayInput.map((object)=> <li>{object.text}       
             <button className={this.props.arrayInput.length < 1 ? "remove-not-visible" : "remove"} onClick= {() => this.props.removeItem(object.id)}>remove
            </button> </li>)
            }
        </ul>

        {/* <ul>
            {
            liElements
            }
        </ul> */}

        {/* funkci removeItem přesuň z Shop.js do ShopList.js
Podívej se, jak máš udělané přidávání přes addShop, odebírání bude skoro úplně stejné */}
      </div>
    )
  }
}
export default Shop
import React from 'react'
import ShopForm from '../Shop_todo/ShopForm'
import ShopList from './ShopList';
import './Shop.css';


class Shop extends React.Component {

  state = {
        inputArr:this.props.arrayInput
      }
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
  
    console.log('Props', this.props)
    return (
      
      <div>
        {/* Render array from props as <ul>, cycle through array */}
        <ul className='list'>
            {
            this.props.arrayInput.map((object)=> <li>{object.text}
            {/* <form className={!object.render ? "not-visible" : "edit-input"} onSubmit={this.props.update(object.id, object.text)}>
            <input type="text" value={object.text} onChange={this.props.edit(object.id, object.text)}/>
            <button>Update</button>
            </form> */}
             <button className={this.props.arrayInput.length < 1 ? "not-visible" : "btn btn-custom"} onClick= {() => this.props.removeItem(object.id)}>
            </button>
              {/*<button className={!object.text ? "not-visible" : "btn-edit"} onClick={() => this.props.toggle(object.id)}></button> </li>) */}
              </li>)
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
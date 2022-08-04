import React from 'react';
class ShoppingList  extends React.Component {
    render () {
      return(
        <div className = "shopping-list">
          <h1> Shopping list for {this.props.name} {this.props.lastName}</h1>
          <Btn val='button'/>
          <ul>
            <li>Neco1</li>
            <li>Neco2</li>
            <li>Neco3</li>
          </ul>
        </div>
      )
    }
   
  }
  class Btn extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => console.log('click')}>
          {this.props.val}
        </button>
      );
    }
  }
  export default ShoppingList;
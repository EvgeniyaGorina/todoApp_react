import React from 'react'
import ShopForm from './ShopForm'

class Shop extends React.Component {
  render() {
    // let liElements = []
    // for (let i = 0; i < value.length;i++){
    //     liElements.push(<li>{value[i]}</li>)
    // }

    // console.log(liElements);

    return (
      <div>
        {/* Render array from props as <ul>, cykl pres pole */}
        <ul>
            {
            this.props.arrayInput.map((inputText)=> <li>{inputText}</li>)
            }
        </ul>
        {/* <ul>
            {
            liElements
            }
        </ul> */}
      </div>
    )
  }
}
export default Shop
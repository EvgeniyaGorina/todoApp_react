import React from 'react';

    class ShopForm  extends React.Component {
    constructor(props){
    super(props); //Add props to parent constructor
    this.state = { // create a new object for state
        value:' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event){
    this.setState({value:event.target.value});
}

handleSubmit(event){
    const value = this.state.value //Define local variable
    event.preventDefault(); //Stop updating the form
    this.props.addShop(value) // Call function with adding parameters 
    console.log("aaaa", value) 
    this.setState({value:""}); // Set state with a new object

}

    render () {
        return (
        <form className='shop-form container' >
            <input type='text' onChange={this.handleChange}
            placeholder='Add your purchase' 
            value={this.state.value} name='text' 
            className='shop-input'></input>
            <button className='shop-btn' onClick={this.handleSubmit}>ok</button>
        </form>
        )

}
}

export default ShopForm

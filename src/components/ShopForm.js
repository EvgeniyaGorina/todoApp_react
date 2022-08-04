import React from 'react';

class ShopForm  extends React.Component {
constructor(props){
    super(props);
    this.state = {
        value:'Neco'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event){
    this.setState({value:event.target.value});
}
handleSubmit(event){
    const value = this.state.value
    event.preventDefault();
    // this.props.onSubmit({
    //     id:Math.floor(Math.random()*100),
    //     text:this.state.value
    // })
    this.props.addShop(value)
    console.log("aaaa", value)
    this.setState({value:""});

}

    render () {
        return (
        <form className='shop-form' >
            <input type='text' onChange={this.handleChange}
            placeholder='Add your purchase' 
            value={this.state.value} name='text' 
            className='shop-input'></input>
            <button className='shop-btn' onClick={this.handleSubmit}>shopping add</button>
        </form>
        )
}
}

export default ShopForm

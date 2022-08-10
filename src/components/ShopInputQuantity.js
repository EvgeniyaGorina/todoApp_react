import React from "react";
// import ShopForm from "./Shop_todo/ShopForm";

class ShopInputQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: false
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  validate = () =>{
    const value = this.state.value
    if(!value && !/^\d+$/.test(value)){
       console.log("NOK");
       this.setState({error:true})
       return false;
     }
     if (parseInt(value) <= 0) {
       console.log("Should be greater than 0");
       this.setState({error:true})
       return false;
     }
     console.log("OK");
     this.setState({error:false})
     return true
   }

  getValue = () => {
    return this.state.value
  }

  render() {
    const classes = "shop-input";
    const alerClasses = "shop-input alert";
    const textClasses ="visible";
    const textAlertClasses = "hidden";
    return (
      <div>
        <input
          type="number"
          min="0"
          placeholder="Quantity"
          onChange={this.handleChange}
          className={!this.state.error ? classes : alerClasses}
        />
        <div className={!this.state.error ?  textAlertClasses : textClasses}>Error</div>
      </div>
    );
  }
}
export default ShopInputQuantity;
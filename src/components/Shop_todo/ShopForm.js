import React from "react";
import ShopInputQuantity from "../ShopInputQuantity";

class ShopForm extends React.Component {
  constructor(props) {
    super(props); //Add props to parent constructor
    this.state = {
      // create a new object for state
      value: this.props.editValue,
      validate: true, //we created an editValue for saving the last input was saved 1 then defined this new state in value into component ShopItem editValue={this.props.object.text}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //Ref Managing focus, text selection, or media playback  React.createRef(), then into render need put ref={this.myRef}, then acessing Ref through current which we use in this.quantityInput.current 
    this.quantityInput = React.createRef(); // Need for taking the function call from anther component to getting executing block from function

  }
  handleChange(event) {
    this.setState({ quantity: 0, value: event.target.value, validate: true });
  }

  handleSubmit(event) {
    const stateValue = this.state; //Define local variable
    event.preventDefault(); //Stop updating the form
    const quantityInput = this.quantityInput.current // Accessing to Refs 

    if (!quantityInput.validate()) { //Call function from  ShopQuantity.js calidate()
        return;
    }

    if (!stateValue || /^\s*$/.test(stateValue.value)) {
      this.setState({ quantity: 0, value: stateValue.value, validate: false });
    } else if (/^\d+$/.test(stateValue.value)) {
      this.setState({ quantity: 0, value: stateValue.value, validate: false });
    } else {
      this.props.addShop({...stateValue, quantity: quantityInput.getValue()}); //Call function for getting the value from state which is locate in a shopinputquantity
    }

    console.log("aaaa", stateValue.value);
    this.setState({ quantity: 0, value: "" }); // Set state with a new object
  }

  render() {
    // precist state a vzhodnotit classes
    const classes = "shop-input";
    const alerClasses = "shop-input alert";
    const textClasses ="visible";
    const textAlertClasses = "hidden";
    return (
      <form className="shop-form container">
        {/* ref={this.quantityInput} use it for make a callback to shopItemQuantity to ShopForm we use it for function validate() */}
        <ShopInputQuantity ref={this.quantityInput} value={this.state.quantity} />
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Add your purchase"
          value={this.state.value}
          name="text"
          className={this.state.validate ? classes : alerClasses}
        ></input>
        <button className="shop-btn" onClick={this.handleSubmit}>
          ok
        </button>
        <div className={this.state.validate ? textAlertClasses : textClasses}>
          Input shoud contain text
        </div>
      </form>
    );
  }
}

export default ShopForm;

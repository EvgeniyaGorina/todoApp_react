import React from "react";
import ShopInputQuantity from "../ShopInputQuantity";
import ShopInputText from "../ShopInputText";

class ShopForm extends React.Component {
  constructor(props) {
    super(props); //Add props to parent constructor
    const {editValue} = props
    this.state = {
      // create a new object for state 
      quantity: editValue ? editValue.quantity : 0, //Validating editValue in editing
      value: editValue ? editValue.text : "",
      validate: true, //we created an editValue for saving the last input was saved 1 then defined this new state in value into component ShopItem editValue={this.props.object.text}
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //Ref Managing focus, text selection, or media playback  React.createRef(), then into render need put ref={this.myRef}, then acessing Ref through current which we use in this.quantityInput.current 
    this.quantityInput = React.createRef(); // Need for taking the function call from anther component to getting executing block from function
    this.textInput = React.createRef();//+
}
//   handleChange(event) {
//     this.setState({ quantity: 0, value: event.target.value, validate: true });
//   }

  handleSubmit(event) {

    const stateValue = this.state; //Define local variable
    event.preventDefault(); //Stop updating the form
    const quantityInput = this.quantityInput.current // Accessing to Refs 
    const textInput = this.textInput.current //+
    //this.setState({ quantity: quantityInput.getValue(), text: textInput.getTextValue(), render: false });
    if (!quantityInput.validate()) { //Call function from  ShopQuantity.js calidate()
        return;
    }
    if(!textInput.validateText()){
        return;
    }

    else {
        const result = {...stateValue,value: textInput.getTextValue(), quantity: quantityInput.getValue()}
        console.log("shopform submit", result)
      this.props.addShop(result); //Call function for getting the value from state which is locate in a shopinputquantity
      this.clearState()
    }
  }

  clearState = () => {
    this.setState(
        {
            // create a new object for state 
            quantity: 0, //Validating editValue in editing
            value: "",
            validate: true, //we created an editValue for saving the last input was saved 1 then defined this new state in value into component ShopItem editValue={this.props.object.text}
          }
    )
  }

  render() {
    // precist state a vzhodnotit classes
    const textClasses ="visible";
    const textAlertClasses = "hidden";
    return (
      <form className="shop-form container">
        {/* ref={this.quantityInput} use it for make a callback to shopItemQuantity to ShopForm we use it for function validate() */}
        <ShopInputQuantity ref={this.quantityInput} value={this.state.quantity} />
        <ShopInputText ref={this.textInput} value={this.state.value}/>
        <button className="shop-btn" onClick={this.handleSubmit}>
          ok
        </button>
      
      </form>
    );
  }
}

export default ShopForm;

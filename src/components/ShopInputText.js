import React from "react";

class ShopInputText extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            value: this.props.value,
            validate: false
            }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, validate: false });
    }

    getTextValue = () =>{
        return this.state.value
      }

    validateText = () =>{
        const stateValue=this.state.value;
        console.log("val: "+ stateValue);
        if((!stateValue)){
            this.setState({ value: stateValue, validate:true });
            console.log("NOT VALUE");
            return false;
        }
        if (/^\s*$/.test(stateValue)) {
            this.setState({ value: stateValue, validate: true});
            console.log("GAP");
            return false;
          } 
        if (/^\d+$/.test(stateValue)) {
            this.setState({ value: stateValue, validate: true});
            console.log("NUMBER");
            return false;
          }
          console.log("aaaa", stateValue);
          this.setState({value: "" });
          return true;
      }



    render(){
    const classes = "shop-input";
    const alertClasses = "shop-input alert";
    const textClasses ="visible";
    const textAlertClasses = "hidden";

        return (
            <div>
                <input
                    value = {this.state.value}
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Add your purchase"
                    name="text"
                    className={this.state.validate ? alertClasses : classes }
                ></input>
                  <div className={this.state.validate ? textClasses : textAlertClasses}>
          Input shoud contain text
        </div>
            </div>
        )
    }
}
export default ShopInputText;
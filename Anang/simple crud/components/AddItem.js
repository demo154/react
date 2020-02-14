import React, { Component } from "react";

class AddItem extends Component{
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.nameInput.value,this.priceInput.value);

        this.nameInput.value='';
        this.priceInput.value='';
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h4>Add Item</h4>
                <input placeholder="brandName" ref={nameInput=>this.nameInput=nameInput} /><br/>
                <input placeholder="price" ref={priceInput=>this.priceInput=priceInput} /><br/>
                <button>Add</button>

                <hr/>
            </form>
        )
    }

}
export default AddItem;
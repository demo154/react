import React, { Component } from 'react';

class DeleteItem extends Component{
    constructor(props){
        super(props);
        this.state={isEdit:false};


        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }
    onDelete(){
        const {onDelete,bName}=this.props;
        onDelete(bName);
    }

    onEdit(){
        this.setState({isEdit:true})
    }

    onEditSubmit(event){
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value,this.priceInput.value,this.props.bName)

        this.setState({isEdit:false});

    }

    render(){
        const { bName,price}=this.props;
        return(
            <div >
                {
                this.state.isEdit
                ?(
               <form onSubmit={this.onEditSubmit}>
                    <input placeholder="brandName" ref={nameInput=>this.nameInput=nameInput} defaultValue={bName} /><br/>
                <input placeholder="price" ref={priceInput=>this.priceInput=priceInput} defaultValue={price} /><br/>
                <button>Save</button>
               </form>
                )
                :
                (
                    <div>
                    <span>{bName}</span> :
                    <span>{price}</span> 
                    <button onClick={this.onEdit}>Edit</button> |
                   <button onClick={this.onDelete}>Delete</button>
                   </div>
                )
               }

           
        </div>
        )
    }

}
export default DeleteItem;
import React, { Component } from 'react';
import './App.css';
import DeleteItem from './components/DeleteItem';
import AddItem from './components/AddItem';

const products=[
  {
    bName:'realme',
    price:8000
  },
  {
    bName:'samsung',
    price:10000
  }
];
localStorage.setItem('products',JSON.stringify(products));
class App extends Component {
constructor(props){
  super(props)
  this.state={
    products:JSON.parse(localStorage.getItem('products'))
  };

  this.onAdd=this.onAdd.bind(this);
  this.onDelete=this.onDelete.bind(this);
  this.onEditSubmit=this.onEditSubmit.bind(this);
}
 componentWillMount(){
   const products=this.getProducts();
   this.setState({products});
 }
  getProducts(){
    return this.state.products;
    
  }
  onDelete(bName){
    const products=this.getProducts();
    const filteredProducts=products.filter(pro=>{
      return pro.bName !== bName;
    });
    this.setState({products:filteredProducts});

  }
  onAdd(bName,price){
    const products=this.getProducts();
    products.push({bName,price});
    this.setState({products});
  }
  onEditSubmit(bName,price,newName){
    let products=this.getProducts();

    products=products.map(pro=>{
      if(pro.bName===newName){
        pro.bName=bName;
        pro.price=price;
      }
      return pro;
    });
    this.setState({products});
  }
  render(){
  return (
    <div className="App">
     <h2>Product Items</h2> 
     <hr/>

     <AddItem onAdd={this.onAdd}/>
     {
       this.state.products.map(pro=>
        {
          return(
            <DeleteItem 
            key={pro.bName}
            {...pro}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
       
              />
          )
        })
     }
    </div>
  );
}
}


export default App;

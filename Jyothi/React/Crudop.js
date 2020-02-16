import React,{Component} from 'react';
import ReactDataGrid from "react-data-grid";
//import {Editors} from 'react-data-grid-addons';
const columns = [
    { key: "id", name: "ID",editable:true },
    { key: "expense", name: "expense",editable:true },
    { key: "price", name: "price" ,editable:true}
  ];
  const data=[];
class Crudop extends Component{
    constructor(props){
        super(props);
       let d=JSON.parse(localStorage.getItem('data'));
       if(d)
       {
           this.state = {
               data: d,
               expense: '',
               price: '',
               total: '',
               id:''
           }
       }else{
           this.state = {
               data:[],
               expense: '',
               price: '',
               total:'',
               id:''
           }
       }
       
        this.add=this.add.bind(this);
        this.update=this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.total = this.total.bind(this);
    }
    add(e){
        e.preventDefault();
        let data=this.state.data;
        // console.log('data: ',data);
        let expense=this.state.expense;
        let price = this.state.price;
        let id=0;
        if (price && expense){
            data.push({ id:id+1,expense: expense, price: price, delete: false });
            console.log("updated data: ",data);
            this.setState({ data: data, expense: '', price: '' });
            localStorage.setItem('data', JSON.stringify(data));
            this.total();
        }
       
    }
    update(event){
        let price=this.state.price;
        let expense = this.state.expense;
        event.target.id == 'expense' ? (this.setState({ expense : event.target.value })) : (this.setState({ price : event.target.value})) ;
       let check=this.state;
        // console.log('check:',check);
    }
    delete(index){
        console.log(index);
        let data=this.state.data;
        data.splice(index,1);
        this.setState({data});
        localStorage.setItem('data', JSON.stringify(data));
        this.total();
    }
    total(){
        let data=this.state.data;
        if(data)
        {
            let result = 0;
            data.forEach(element => {
                console.log('total:', element);
                result += parseFloat(element.price);
            });
            console.log('result', result);
            this.setState({ total: result });
        }
     
    }
    componentDidMount(){
        this.total();
    }
render(){    
    return(
       
        <div className="wrapper">
        <div className="userinput">
        <div><h1>List of Expense</h1></div>
        <h3>Add Your Expense</h3>
        <form>
                <input type="text" className="myInput" onChange={this.update} id="expense" placeholder="Expense:" value={this.state.expense}/>
                <input type="number" className="myInput" onChange={this.update} id="price" placeholder="Price:" value={this.state.price}/>
                <button type="submit" className="add" onClick={this.add}>+</button>
        </form>
        </div>
            <div className="ListShow">
        <ul>
            {this.state.data.map((data,index)=>{
                // console.log('map: ',data);
                       return <ListShow data={data} index={index} key={index} delete={this.delete}/>
            })}
        </ul>
        </div>
        
        <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.data[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}/>
                    <Total total={this.state.total}/>

        </div>
      
    )
}
}

class ListShow extends Component{
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
          const data = state.data.slice();
          for (let i = fromRow; i <= toRow; i++) {
            data[i] = { ...data[i], ...updated };
          }
          return { data };
        });
      };
    render(){
        return(
            <div></div>
            // <li><span className="expenses">{this.props.data.expense}</span><span className="price">{this.props.data.price}</span><button className="delete" onClick={(e)=>{
            //     e.stopPropagation();  
            //     this.props.delete(this.props.index)}}>-</button></li>
    
                
        )
    }
}

const Total=(props)=>{
    
return(
    <div className="total">
        Total: {props.total}
        </div>
)
}
// class App extends React.Component{
//     render(){
//         return (<wrapper><Crudop/>
//             </wrapper>
//             )
//     }
// }
export default Crudop

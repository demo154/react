import React, { Component } from 'react';
import axios from 'axios';
 import ReactDataGrid from "react-data-grid";


const defaultColumnProperties = {
    resizable: true,
    width: 200
  };
const columns = [
    { key: "id", name: "ID",editable:true },
    { key: "name", name: "name",editable:true },
    { key: "username", name: "UserName" ,editable:true},
    { key: "email", name:"Email", editable:true}
   
  ].map(c => ({ ...c, ...defaultColumnProperties }));
 

 class Userlist extends Component {
     
    constructor(props) {
        super(props)
     
        this.state = {
             users:[],
             //tablename:'This is table data',
             visible:false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        console.log(props)
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response)
            this.setState({users: response.data})
            
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'Error: Data couldnt be retreived'})
        })
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
   
    render() {
        const{users ,errorMsg}= this.state
        
        return (
             <div style={{color:'blue'}}>  
                 <button onClick={this.toggleMenu} style={{backgroundColor:'pink',padding:'10px', color:'blue'}}>User table </button>
     
                 {this.state.visible&&<div>
                 <h2><u>{this.state.tablename}</u></h2>
                 

              
             <ReactDataGrid
          columns={columns}
         rowGetter={i => this.state.users[i]}
         rowsCount={20}
         minWidth={1000}
         onGridRowsUpdated={this.onGridRowsUpdated}
         enableCellSelect={true}
        
         /> 
                  
                             {/* {
                     users.length?
                    users.map(user => 
                    <table border="1"> 
                    <tbody  key={user.id}>
                        
                        </tbody> 

                         </table>
                        
                         ):
                     null
                 } */}
                
                 {errorMsg ? <div>{errorMsg}</div> :null}
                </div>}
                        
                
             </div>
        )
    }
}

export default Userlist;
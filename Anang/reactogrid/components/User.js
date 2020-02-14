import React, { Component } from 'react'
 var data=[];
class User extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
             username:'',
             password:'',
             email:'',
            
        };
    this.Changehandler=this.Changehandler.bind(this);
    this.Postdata=this.Postdata.bind(this);
   
    }
    Changehandler=(event)=>{
        let a=event.target.name;
        let b = event.target.value;
       
        this.setState({
            [a]:b   //to display inputs side by side
            
      
        });
       
    }
    Postdata=(eve)=>{
         eve.preventDefault();
           console.log(this.state);
            data.push(this.state.username,this.state.password,this.state.email);
          document.getElementById('x').innerHTML=data;
        
      
     }
 
    render() {
        
         { console.log(this.state);
        return (
            <div>
                <form onSubmit={this.Postdata}>
                    <label>Username:-</label><br/>
                    <input type="text" name="username"   onChange={this.Changehandler}/><br/>
                    <label>Email:-</label><br/>
                    <input type="text" name="email" onChange={this.Changehandler} /><br/>
                    <label>Password:-</label><br/>
                    <input type="password" name="password"    onChange={this.Changehandler}/><br/>
                    <input type="submit"  value="submit"/>
                   
                       
                </form>
               
        
               <div id="x">
                  
             
               </div>
                

                 
            </div>
        )
         }
                
    }
}
 
export default User;
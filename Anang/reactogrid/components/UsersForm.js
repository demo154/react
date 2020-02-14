import React, { Component } from 'react'

class UsersForm extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
             username:'',
             password:'',
             email:'',
             mobile:'',
             branch:'',
             
          
        };
        
    this.Changehandler=this.Changehandler.bind(this);
    this.Postdata=this.Postdata.bind(this);
    }
    Changehandler=(event)=>{
        let a=event.target.name;
        let b = event.target.value
        this.setState({
            [a]:b   //to display inputs side by side
        });
    }
    Postdata=(event)=>{
          //prevents page from reloading
       
        event.preventDefault();
     document.getElementById("uname").innerHTML = this.state.username;
     document.getElementById("email").innerHTML = this.state.email;
     document.getElementById("branch").innerHTML = this.state.branch;
     document.getElementById("mobile").innerHTML = this.state.mobile;
     
       
     }

     
    //  getValue=()=>{
    //      var x=document.getElementById("a");
    //       var p=x.options[x.selectedIndex].value;
    //      document.getElementById("p").innerHTML = p;
    //  }
     
    render() {
        return (
            <div>
                <form onSubmit={this.Postdata}>
                    <label>Username:-</label><br/>
                    <input type="text" name="username"  onChange={this.Changehandler}/><br/>
                    <label>Email:-</label><br/>
                    <input type="email" name="email"  onChange={this.Changehandler}/><br/>
                   
                    <label>Branch:-</label><select  name="branch"   onChange={this.Changehandler}> 
                        {/* <option></option>  */}
                        <option >ECE</option>
                        <option>CSE</option>
                        <option>IT</option>
                        <option>Mech</option>
                    </select><br/>
                    <label>Mobile No.:-</label><br/>
                    <input type="number" name="mobile"  onChange={this.Changehandler}/><br/>
                    <label>Password:-</label><br/><input type="password" name="password"  onChange={this.Changehandler}/><br/>
                    <input type="submit"  value="submit"/>
                       
                </form>
               
                   <hr/>
               
                <center><table border="1">
                    <thead>
                        
                        <tr >
                            <td>UserName</td>
                            <td>Email</td>
                            <td>Branch</td>
                            <td>Mobile</td>
                        </tr>

                    </thead>
                    <tbody>
                        
                    
                        <tr>
                        <td id="uname"></td>
                        <td id="email"></td>
                        <td id="branch"></td>
                        <td id="mobile"></td>
                        </tr>
                       
                    
                    </tbody>
                </table></center>
    
            </div>
        )
    }
}

export default UsersForm;
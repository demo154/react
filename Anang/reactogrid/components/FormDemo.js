import React, { Component } from 'react'
 var data=[];
class FormDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
             username:'',
             password:''
            
        };
    this.Changehandler=this.Changehandler.bind(this);
    this.Postdata=this.Postdata.bind(this);
    //  this.show=this.show.bind(this);
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
           data.push(this.state.username,this.state.password);
           document.getElementById('x').innerHTML=data;
           this.setState({formData: data});


           
        // alert(this.state.username)

    //  this.show();
        // let username=this.state.username;
        // let password=this.state.password;

    //  return (<h1>{this.state.username}</h1>)
        
    // this.setState({formData: eve})
      
     }

    //  show =(e)=>{
    //     return e.username;
    //     // let n = this.state.password; 
    //     // this.setState({m,n})
    // //    return document.getElementById('data').innerHTML = 
    // //     document.getElementById("m").value;
    //  }
 
    render() {
        // const {username,password} = this.state;
        { console.log(this.state.formData);
        return (
            <div>
                <form onSubmit={this.Postdata}>
                    <label>Username</label><input type="text" name="username"   onChange={this.Changehandler}/><br/>
                    <label>Password</label><input type="password" name="password"    onChange={this.Changehandler}/><br/>
                    <input type="submit"  value="submit"/>
                   
                       
                </form>
                {/* <p><span id='data'></span></p> */}
        
               <div id="x">
                  {/* {this.show} */}
             
               </div>
                

                 
            </div>
        )
                }
    }
}
 
export default FormDemo;
import React, { Component } from 'react'

export class FormDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             comments:'',
             topic:''
        };
        // this.changeHandle=this.changeHandle.bind(this);
        // this.subHandle=this.subHandle.bind(this);
    }
    
    changeHandle=(event)=>{
       
        let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]: val});

            
        }
        subHandle=(event)=>{
           
            document.getElementById("demo").innerHTML=this.state.username;
            document.getElementById("one").innerHTML=this.state.password;
            document.getElementById("two").innerHTML=this.state.comments
            document.getElementById("onn").innerHTML=this.state.topic;
            event.preventDefault()

        }
        
        
    
    render() {
       
        return (
            <form >
               <div>
               <h1>Hello {this.state.username}</h1>
                <label>Name:</label><input type="text" name="username" onChange={this.changeHandle} /><br/>
                <label>Password:</label><input type="password" name="password"  onChange={this.changeHandle} /><br/>
                <label>Comments</label><textarea  name="comments" onChange={this.changeHandle}/><br/>
                <label>Language</label><select  name="topic" onChange={this.changeHandle}>
                <option value="none"selected disabled hidden >
                Select an Option 
            </option> 
                <option value='React' >React</option>
                <option value='Nodejs'>Nodejs</option>
                <option value='Vb.net'>Vb.net</option>
                <option value='Java'>Java</option></select>    <br/>

                <button onClick={this.subHandle}>Submit</button><br/>
               
                <center><table border="2" >
                <thead>
                <tr><th>Name</th>
               <th>Password</th>
                <th>Comments</th>
                <th>Topic</th></tr>

                </thead>
                <tbody>
                <tr>
                <td><div id="demo"></div></td>
                <td><div id="one"></div></td>
                <td><div id="two"></div></td>
                <td> <div id="onn"></div></td></tr>
                </tbody>
                </table>
                </center>
               </div>

               
              
            </form>
        );
    }
}

export default FormDemo
//name is used for binding here without it u cant write into the box
//to put a value as defult in select put 'selected value="Nodejs"'
// 

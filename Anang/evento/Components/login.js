import React, { PureComponent } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import '../Components/login.css';
import { Button} from 'react-bootstrap';



 class Login extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false, redirect: false, elementHide: false, alertFunc:null
    
        }

        this.email=this.email.bind(this);
        this.password=this.password.bind(this);
        this.signIn=this.signIn.bind(this);   
    }
    email(event) {
        this.setState({ email: event.target.value })
    }
    password(event) {
        this.setState({ password: event.target.value})
    }

    signIn(event) {
        return fetch('http://localhost:8080/user/login ',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body: JSON.stringify({
              
                password: this.state.password,
                email: this.state.email
  
        }  )
    })
    // .then(function(response) {
    //     if (!response.ok) {
    //       alert("Login Fail");
    //     }
    //     return response.json();
    // })
    // .then(function(responseData) {
    //     if (!(responseData.data && responseData.data.success)) {
         
    //       alert("Login Successful");
    //       window.location.href = '/Homepage';

    //     }
    // });
    .then(function(response) {
    if (!response.ok) {
         
        alert("Login Successful");
        window.location.href = '/Homepage';

      }else{
        alert("Login Fail");
      }
    });
}


    render(){
        return (
    
        <div className="login">
            <div className="loginBox">
            <img src={require('../Images/user.jpg')} style={{width:'100px', height:'100px'}} className="user" />
            {/* <legend><h3>Login Here</h3></legend> */}<br /><br /><br /><br />
            <Form>
            <div className="Row">
                <div className="Col-md-6">
                    <label>Email:</label>
                    <Input type="text" onChange={this.email} placeholder="Enter Email" required></Input>
                </div>
                
                <div className="Col-md-6">
                    <label>Password:</label>
                </div>
                <Input type="text" onChange={this.password} placeholder="Enter Password" required></Input>
            </div>
            <br></br>
            <Button className="btn btn-primary" onClick={this.signIn}>SignIn</Button>  <br/> <br/>                 
            <a href="#" style={{color:"red"}}>forgot password</a>
            <h5 style={{color:"naviblue"}}>Don't have Evento account?<a href="/registration" style={{color:"red"}}> Sign Up!</a></h5>
            </Form>
            </div>
        </div>
    
        );
}
}

export default Login;
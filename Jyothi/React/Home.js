import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import  './Style.css';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    handleChange = (event) => {
       
        this.setState({[event.target.name]: event.target.value});
      }
    submitHandle=(event)=>{
        event.preventDefault()


    }
    render() {
        return (
            <div>
            <h1>Welcome and Greetings!!</h1>
            <div className="container">
              
                <Form className="two" onSubmit={this.submitHandle}>
                <Form.Group controlId="formGroupName">
                  <Form.Label >Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" name="name"  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupSalary">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" name="password"  onChange={this.handleChange} />
                </Form.Group>
                
              
                <Button variant="primary" type="submit">
                  Submit
                </Button>
               
              </Form>
              </div>
            </div>
        )
    }
}

export default Home

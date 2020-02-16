import React, { Component } from 'react'
import { Accordion,Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'


 class EmployeeList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {

            todos:[]
            
            
         }
         
     }

    componentDidMount() {
      //const {match:{params}}=this.props
      fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then((rel) => {
      
      this.setState({ todos: rel.data
        
       })
       
       
      console.log(this.state.todos)
      
      
     
      //console.log(this.props)
      })
      .catch(console.log)
    }
    
     
     
    render() {
        return (
            <div>
            <Accordion >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click To get the Data
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                

                <div className="container">
            <div className="col-xs-12">
            
            {this.state.todos.map((todo) => (
              <div className="card">
                <div className="card-body">
               <h5 className="card-title">ID:{todo.id} </h5>
                <Link to={`/Emp/id=${todo.id}`}><h5 className="card-title">Name:{todo.employee_name}</h5></Link> 
                



                 <h5 className="card-title">Salary: {todo.employee_salary}</h5>
                 <h5 className="card-title">Age: {todo.employee_age}</h5>

                </div>
              </div>
            ))}
            </div>
           </div>
                
                
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
          </Accordion>
            </div>
            
        )
    }
}

export default EmployeeList





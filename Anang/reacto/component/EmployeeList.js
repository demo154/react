import React,{Component} from 'react';
import {Nav} from 'react-bootstrap';



class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.state={
            employee:[],
           
        }
         
    }
   
    componentDidMount(){
       
       

        fetch('http://dummy.restapiexample.com/api/v1/employees')
             
          .then(res=> res.json())
        .then(response=>{
        this.setState({
             
         employee:response.data,
         
            
        })
        })
    }
    
   
    render(){
        const {employee}=this.state;
        
        return(
            
           
        <div style={{marginLeft:"30rem",marginTop:"5rem"}}>
                <h3 style={{marginRight:"18rem"}}>EmployeeList</h3>
 
                 <table border="1">
                <thead>
                   <tr>
                   <th>Id</th>
                   <th>Employee Name</th>
                   <th>Employee Salary</th>
                   <th>Employee Age</th>
                   <th>Profile Img</th>
                   </tr> 
                   </thead>
                   
                <tbody>
                   { (employee.length>0)?employee.map(user =>{
                        return(
                           
                            <tr key={user.id} >
                             <td>{user.id}</td>
                        <Nav.Link href={`/EmployeeDetails/id=${user.id}, Name=${user.employee_name}, Salary=${user.employee_salary}, Age=${user.employee_age}`}><td>{user.employee_name}</td></Nav.Link>
                            <td>{user.employee_salary}</td>
                            <td>{user.employee_age}</td>
                            <td>{user.profile_image}</td>
                        </tr>
                        )
                        
                          }):<tr><td>Loading...</td></tr>
                        }
                
                </tbody> 
                </table>

            </div>
            
        );
    }
   
     
}
export default EmployeeList;
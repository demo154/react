import React,{Component} from 'react';
import { Nav } from 'react-bootstrap';
  import './Navbar.css';
 
class  Navbar extends Component{
    constructor(props){
        super(props);
        
        
    }

    render(){
        return(
        
          
        <div className="menu">
         <Nav activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto">
           
         <Nav.Link href="/EmployeeList" >EmployeeList</Nav.Link>  
        
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="/AddEmployee" >AddEmployee</Nav.Link>
        </Nav.Item>
        
          </Nav> 
     </div>

        )
    }

}
export default Navbar;
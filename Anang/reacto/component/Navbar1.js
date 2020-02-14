import React,{Component} from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Navbar1.css';
  
class Navbar1 extends Component{
    render(){
        return(
            <Router>
                <div>
      <div className="menu1">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/EmployeeList">EmployeeList</Link>
          </li>
          <li >
            <Link to="/AddEmployee">AddEmployee</Link>
          </li>
        </ul>
     </div>

        <Switch>
          <Route  path="/Home">
            <Home />
          </Route>
          <Route path="/EmployeeList">
            <EmployeeList />
          </Route>
          <Route path="/AddEmployee">
            <AddEmployee />
          </Route>
        </Switch>
      </div>
    </Router>

        )
    }
}
export default Navbar1;
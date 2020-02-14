import React from 'react';
import logo from './logo.svg';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import EmployeeList from './component/EmployeeList';
import Navbar from './component/Navbar';
import AddEmployee from './component/AddEmployee';
import Navbar1 from './component/Navbar1';
import EmployeeDetails from './component/EmployeeDetails';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
         <Route path="/Home" component={Home}/> 
        <Route path="/EmployeeList" component={EmployeeList}/>
        <Route path="/Navbar" component={Navbar}/ >
         <Route path="/AddEmployee" component={AddEmployee}/>
         <Route path="/Navbar1" component={Navbar1}/>
         <Route path="/EmployeeDetails" component={EmployeeDetails}/>

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch, BrowserRouter as Router } from  "react-router-dom";
import Simplegrid from './components/Simplegrid';
import  Dropdown  from './components/Dropdown';
import Pageguide from './components/Pageguide';
import FormDemo from './components/FormDemo';
import User from './components/User';
import UsersForm from './components/UsersForm';
import UserF from './components/UserF';
import FetchHooks from './components/FetchHooks';
import PostHooks from './components/PostHooks';
import Crudop from './components/Crudop';
import Userlist from './components/Userlist';
import Agfilter from './components/Agfilter';
// import IceCakeRedux from './components/IceCakeRedux';
// import Charts from './components/Charts';
import Chart2 from './components/Chart2';

function App() {
  return (
    
    <div>
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Simplegrid" component={ Simplegrid }/>
        <Route path="/Dropdown" component={ Dropdown} />
        <Route path="/Pageguide" component={ Pageguide} />
        <Route path="/FormDemo" component={FormDemo} />
        <Route path="/User" component={User} />
        <Route path="/UsersForm" component={UsersForm} />
        <Route path="/UserF" component={UserF} />
        <Route path="/FetchHooks" component={FetchHooks} />
        <Route path="/PostHooks" component={PostHooks}/>
        <Route path="/Crudop" component={Crudop}/>
        <Route path="/Userlist" component={Userlist}/> 
        <Route path="/Agfilter" component={Agfilter}/>
        {/* <Route path="/IceCakeRedux" component={IceCakeRedux}/> */}
        {/* <Route path="/Charts" componenet={Charts}/> */}
        <Route path="/Chart2" component={Chart2}/>
      </Switch>
      </div>
      </Router>

    </div>
  );
}

export default App;

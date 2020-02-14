import React from 'react';
import './App.css';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/login.js';
import Registration from './Components/registration';
import Navbar from './Components/navbar';
import Sidenav from './Components/sidenav';
import Dashboard from './Components/Dashboard';
import ListofUsers from './Components/listofusers';
import Eventcreate from './Components/Eventcreate';
import Collapsible from './Components/Collapsible';
import Collapsible1 from './Components/Collapsible1';
import Attendance from './Components/attendance';
import Feedback from './Components/feedback';
import ListofEvents from './Components/listofevents';
import Sidenav2 from './Components/sidenav2';
import SpotRegistration from './Components/SpotRegistration';
import GetFeedback from './Components/getfeedback';
import FBack from './Components/fback';
import SimpleGrid from './Components/simplegrid';
import AltColor from './Components/altcolor';
import Homepage from './Components/Homepage';


class App extends React.Component {
  render() {
  return (
    <div style={{ width: "100%", height: "21px" }}>
        <div>
          <Router>
            <div className="App">
              <Switch>
                 <Route path="/Login" component={Login} /> 
                 <Route path="/registration" component={Registration} />
                 <Route path="/navbar" component={Navbar} />
                 <Route path="/sidenav" component={Sidenav} />
                 <Route path="/sidenav2" component={Sidenav2} />
                 <Route path="/dashboard" component={Dashboard} />
                 <Route path="/listofusers" component={ListofUsers} />
                 <Route path="/Eventcreate" component={Eventcreate} />
                 <Route path="/Collapsible" component={Collapsible} />
                 <Route path="/Collapsible1" component={Collapsible1} />
                 <Route path="/Attendance" component={Attendance} />
                 <Route path="/Feedback" component={Feedback} />
                 <Route path="/getFeedback" component={GetFeedback} />
                 <Route path="/listofevents" component={ListofEvents} />
                 <Route path="/SpotRegistration" component={SpotRegistration} />
                 <Route path="/fback" component={FBack} />
                 <Route path="/simplegrid" component={SimpleGrid} />
                 <Route path="/altcolor" component={AltColor} />
                 <Route path="/Homepage" component={Homepage} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
  );
}
}

export default App;

import React, { PureComponent } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { FaHome, FaChartLine, FaRegistered } from "react-icons/fa";
import {MdFeedback, MdEvent, MdPeopleOutline} from "react-icons/md";
import {GiTicket} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import Collapsible from './Collapsible';
import Collapsible1 from './Collapsible1';
import ListofUsers from './listofusers';
import GetFeedback from './getfeedback';
import Attendance from './attendance';


class Sidenav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            sidenavLeft:false,

        }
    }
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    // Fragments let you group a list of children without adding extra nodes to the DOM
                    <React.Fragment >
                        <SideNav 
                            onSelect={(selected) => {
                                const home = '/' + selected;
                                if (location.pathname !== home) {
                                    history.push(home);
                                }
                            }}

                            style={{backgroundColor: "darkBlue",height:"105rem"}}
                        >
                            
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="Collapsible">

                                {/* <NavItem eventKey="Event">
                                    <NavIcon>
                                        <MdEvent></MdEvent>
                                    </NavIcon>
                                    <NavText>
                                          Event
                                    </NavText>
                                </NavItem> */}
                                <NavItem eventKey="Collapsible">
                                <NavIcon>
                                        <MdEvent></MdEvent>
                                    </NavIcon>
                                    <NavText>
                                          Create New Event
                                    </NavText>
                                </NavItem>

                                {/* <NavItem eventKey="Registrations">
                                    <NavIcon>
                                        <FaRegistered></FaRegistered>
                                    </NavIcon>
                                    <NavText>
                                          Registrations
                                    </NavText>
                                </NavItem> */}
                                <NavItem eventKey="ListofUsers">
                                    <NavIcon>
                                        <MdPeopleOutline></MdPeopleOutline>
                                    </NavIcon>
                                    <NavText>
                                          View Participants
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="Collapsible1">
                                    <NavIcon>
                                        <FaRegistered></FaRegistered>
                                    </NavIcon>
                                    <NavText>
                                          Spot Registrations
                                    </NavText>
                                </NavItem>

                                <NavItem eventKey="Attendance">
                                    <NavIcon>
                                        <IoIosPeople></IoIosPeople>
                                    </NavIcon>
                                    <NavText>
                                          Attendance
                                    </NavText>
                                </NavItem>

                                <NavItem eventKey="sessions">
                                    <NavIcon>
                                        <GiTicket></GiTicket>
                                    </NavIcon>
                                    <NavText>
                                        Sessions
                                    </NavText>
                                </NavItem>

                                <NavItem eventKey="GetFeedback">
                                    <NavIcon>
                                        <MdFeedback></MdFeedback>
                                    </NavIcon>
                                    <NavText>
                                         View Feedback
                                    </NavText>
                                </NavItem>

                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Route path="/Collapsible" component={props => <Collapsible />} />
                            <Route path="/Collapsible1" component={props => <Collapsible1 />} />
                            <Route path="/ListofUsers" component={props => <ListofUsers />} />
                            <Route path="/Attendance" component={props => <Attendance />} />
                            <Route path="/GetFeedback" component={props => <GetFeedback />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        )
    }
}


export default Sidenav
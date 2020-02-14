import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class Sidenav2 extends Component {
    constructor(props){
        super(props);
}

    render(){
        const {} = this.props;
        return (
            
<aside className="main-sidebar sidebar-dark-primary elevation-4" style={{bottom: "0", float: "none", height: "100vh", left: "0", position: "fixed", width: "19%", top:"0"}}>
{/* <nav > */}
    {/* Brand Logo */}
    <a href="#" className="brand-link">
      <img src={require("../Images/AdminLTELogo.png")} alt=" Logo" className="brand-image img-circle elevation-3" style={{opacity: "0.6"}} />
      <span className="brand-text font-weight-light">EVENTO</span>
    </a>
     {/* Sidebar */}
    <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflowY os-host-resize-disabled  os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host">
            <div className="os-resize-observer observed" style={{left:" 0px", right: "auto"}}>
            </div>
        </div>
        <div className="os-size-auto-observer" style={{height: "calc(100% + 1px)", float: "left"}}>
            <div className="os-resize-observer observed">
            </div>
        </div><div className="os-content-glue" style={{margin: "0px -8px", width: "249px", height: "475px"}}></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: "scroll", right: "0px", bottom:"0px"}}><div className="os-content" style={{padding: "0px 8px", height: "100%", width: "100%"}}>
     {/* Sidebar user (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          {/* <img src={require("../Images/photo4.jpg")} className="img-circle elevation-2" alt="User Image" /> */}
        </div>
        <div className="info">
          <a href="#" className="d-block">Event</a>
        </div>
      </div>
       {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Event
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/createvent"  className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Create New Event</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Publish</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview ">
            <a href="#" className="nav-link ">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Registrations
                <i className="fas fa-angle-left right"></i>
                <span className="badge badge-info right"></span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/listofusers" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>View Participants</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Export/Import</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/eventregistration" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Spot Registration</p></a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
              <a href="/attendance" className="nav-link" >
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Attendance 
                  <span className="badge badge-info right"></span>
                </p>
              </a>
          </li>   
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
              <p>
                Sessions
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>List Sessions</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Create a Session</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tree"></i>
              <p>
                Feedback
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../getfeedback" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p> View Feedback</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* sidebar-menu */}
    </div></div></div>
    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-usable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div className="os-scrollbar-handle" style={{width: "100%", transform: "translate(0px, 0px)"}}></div>
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div className="os-scrollbar-handle" style={{height: "42.6714%", transform: "translate(0px, 0px)"}}></div>
      </div>
    </div>
    <div className="os-scrollbar-corner"></div>
  </div>
    {/* sidebar */}
{/* </nav> */}
</aside>
        );
    }
}

export default Sidenav2
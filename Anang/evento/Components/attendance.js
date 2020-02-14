import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import '../Components/attendance.css';

 class Attendance extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[],
            // eventRegistration:[],
            users:[],
            isLoaded: false,

        }
    }

    componentDidMount(){
        // fetch('http://localhost:1111/attendance/eventRegistration/getAll')
               
        // .then(res=> res.json())
        // .then(json=>{
        // this.setState({
        //     isLoaded: true,
        //     eventRegistration:json,
        // })
        // })
        fetch('http://localhost:8080/user/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            users:json,
        })
        })

          fetch('http://localhost:8080//attendance/event/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            events:json,
        })
        })


    }
    render(){
        // var {isLoaded, eventRegistration}=this.state;
        var {isLoaded, users} = this.state;
        var {isLoaded, events}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
           
            <div >
                 <div className="col-md-6" style= {{marginLeft : "30rem"}}>
                <legend><h3 style= {{marginLeft:'10rem' , width:'60%'}}><b >Attendance</b></h3></legend>
                        <Table striped bordered hover size="md">
                            <thead>
                                <tr > 
                                    <h4 className="card-title" style={{color:"darkblue"}} >Events <br></br>
                                    <select >
                                    { (events.length > 0) ? events.map (event => {
                                        return (
                                            
                                           <option key={event.index}>{event.title}</option>
                                        )
                                    }) : <tr><td colSpan="5">Loading...</td></tr> }  
                                    </select>
                                    </h4>
                                </tr>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                            { (users.length > 0) ? users.map (user => {
                                return (
                                <tr key={user.index } >
                                    <td></td> 
                                    <td>{user.first_name}</td>
                                    <td>{user.phone_no}</td>
                                    <td>{user.email}</td>
                                    <td><Input type="checkbox" value ="attendance"></Input></td>
                                    
                                </tr>
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr> } 
                            </tbody>
                        </Table>
                    {/* </div> */}
                </div>
            </div>
        
 
//             <div className="content-wrapper" >
//      <section className="content-header">
//              <div className="container-fluid">
//                      <div className="row mb-2">
//                              <div className="col-sm-6">
//                                      <h1></h1>
//                              </div>
                            
//                      </div>
//              </div>
//      </section>
//      <section className="content">
//          <Form>
//              <div hidden="submitted">
//                  <div className="row">
//                      <div className="col-md-12">
//                          <div className="card card-info">
//                              <div className="card-header">
//                                  <h3 className="card-title">Event 
//                                      <select>                                    
//                                          <option >{event.title}</option> 
//                                      </select>
//                                  </h3>
//                                      <div className="card-tools">
//                                          <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">-
//                                          </button>
//                                      </div>
                                    
//                              </div>
                                                                                    
//                              <div className="card-body">
//                                  <div className="row">
//                                      <div className="col-sm-12">
//                                          <div className="card-tools" align="right">
//                                              <Table  >
//                                                 <thead>
//                                                      <tr>
//                                                          <th>S.no</th>
//                                                          <th>name</th>
//                                                          <th>Contact</th>
//                                                          <th>Email</th>
//                                                          <th>Attendance</th>
//                                                      </tr>
//                                                  </thead>
//                                                  <tbody>
//                                                        <tr >
//                                                          <td>{i+1}</td>
//                                                          <td>{register.participant.first_name}</td>
//                                                          <td>{register.participant.phone_no}</td>
//                                                          <td>{register.participant.email}</td>
//                                                          <td><Input type="checkbox" value ="attendance" /></td>
//                                                      </tr> 
//                                                  </tbody>
//                                              </Table>
//                                          </div>      
//                                      </div>
//                                  </div>
//                              </div>
//                          </div>
//                      </div>
//                       <button type="submit" className="btn btn-success">Submit</button>
//                  </div>
//              </div>
//          </Form>
//      </section>
//  </div> 
        );
    }
}

export default Attendance
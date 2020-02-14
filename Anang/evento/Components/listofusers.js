import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import '../Components/listofusers.css';

class ListofUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            isLoaded: false,

        }
        
    }
   
    componentDidMount(){

        fetch('http://localhost:8080/user/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            users:json,
        })
        })
    }
    render(){
        var {isLoaded, users}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
        <div> 
            <div className="col-md-6" style= {{marginLeft : "30rem"}}>
                <legend><h3 style= {{marginLeft:'13rem' , width:'60%'}}><b >User's Data</b></h3></legend>

                {/* <div border="1" style={{width:'80%' , marginRight='4rem'}} > */}
                    <Table striped bordered hover size="md">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>E-mail</th>
                                <th>Phone Number</th>
                                {/* <th>Address</th>  */}
                            </tr>
                        </thead>
                        <tbody>
                        { (users.length > 0) ? users.map (user => {
                        return (
                            <tr key={user.index } >

                                <td></td> 
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_no}</td>
                                {/* <td>{user.address}</td> */}
                                {/* <td>{user.address.door_no},
                                    {user.address.building_name}<br></br>
                                    {user.address.street},<br></br>
                                    {user.address.locality}<br></br>
                                    {user.address.landmark},<br></br>
                                    {user.address.city}<br></br>
                                    {user.address.state},
                                    {user.address.pincode}<br></br>
                                </td> */}
                             </tr>
                             )
                            }) : <tr><td colSpan="5">Loading...</td></tr> }

                        </tbody>
                    </Table>
                {/* </div> */}
            </div>
        </div> 
        );
        
    }
}

export default ListofUsers
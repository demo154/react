import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
 import "../Components/registration.css";
import { Button } from 'muicss/react';
import reactDOM from 'react-dom';
 

 class RegistrationForm extends Component {

    constructor(props){
        super(props);
            this.state = this.getInitialState()
        }
        getInitialState() {
            const initialState = {
                user: {
                    first_name:'',
                    last_name:'',
                    gender:'',
                    email:'',
                    phone_no:'',
                    password:'',
                    address: {
                        door_no:'',
                        building_name:'',
                        street:'',
                        locality:'',
                        landmark:'',
                        city:'',
                        state:'',
                        pincode:''
                    }
                },
            errors: {}
        };
      
          return initialState;
    }
        
    

    handleChange (e)  {
        const user = this.state.user;
        var key = e.target.name;
        var value = e.target.value;
        user[key] = value;
        this.setState({
          user
        });
    }
    handleAddressChange = (e) => {
        const user = this.state.user;
        let address = user.address;
        var key = e.target.name;
        var value = e.target.value;
        address[key] = value;
        user.address = address;
        this.setState({
          user
        });
      }
    

    submit(event) {
        // alert('success')

        return fetch('http://localhost:1111/user/createUser', {
            method: 'POST',
            headers: {
                'content-Type' :'application/json'
            },
            body:JSON.stringify({
               user:{ first_name : this.state.first_name,
                last_name : this.state.last_name,
                gender : this.state.gender,
                email : this.state.email,
                phone_no : this.state.phone_no,
                password : this.state.password,
                address:{
                    door_no : this.state.door_no,
                    building_name : this.state.building_name,
                    street : this.state.street,
                    locality : this.state.locality,
                    landmark : this.state.landmark,
                    city : this.state.city,
                    state : this.state.state,
                    pincode : this.state.pincode
                }
            }
            })
        })
         .then(function(response) {
             if(!response.ok) {
                 throw new Error("Bad status from server");
             }
             return response.json();
         })

         .then(function(responseData) {
             if(!(responseData.data && responseData.data.success)) {
                 alert("Submit Successful");
                //  this.props.history.push('/HomePage')
             }      

         });
    }
 

    render(){
         const {first_name, last_name, gender, email, phone_no, password,address:{door_no,building_name, street, locality, landmark, city, state, pincode} } = this.state

        return (

    <div className="register">
      <div className="registerBox">
        <img src={require('../Images/reg.jpg')} style={{width:'100px', height:'100px',marginRight:"3rem"}} />
            <br/><br/>
            {/* <legend><h3>Login Here</h3></legend> */}
        <Form>   

            <div className="row">
                <div className="col-md-3">
                    <label>First Name:</label>
                </div>
                <Input value={user.first_name} name="first_name"
                    onChange={this.handleChange.bind(this)} 
                    placeholder=" Enter first name" /> 
                
                <div className="col-md-3">
                     <label>Last Name:</label>
                </div>
                <Input value={user.last_name}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter last name" />
            </div><br></br>

            <div className="row">

                <div className="col-md-3">
                    <label>Email:</label>
                </div>
                <Input value={user.email}
                    onChange={this.handleChange.bind(this)}
                    placeholder='Enter email' />

                <div className="col-md-3">
                    <label>Phone Number:</label>
                </div>
                <Input value={user.phone_no}
                    onChange={this.handleChange.bind(this)}
                    placeholder='Enter Phone No.' />
            </div><br></br>
                        
            <div className="row">
                <div className="col-md-3">
                    <label>Password:</label>
                </div>
                <Input value={user.password}
                    onChange={this.handleChange.bind(this)}
                    name="password" placeholder='Enter password' />

                <div className="col-md-3" style={{color:"white"}}>
                    <label>Gender:</label>
                </div>
                <Input value={user.gender}
                    onChange={this.handleChange.bind(this)}
                    type="radio" onChange={this.gender}  name="type"value="male" />Male
                <Input value={user.gender}
                    onChange={this.handleChange.bind(this)}
                    type="radio" onChange={this.gender} name="type"value="female"/>Female
            </div>  <br></br>
                        
            <div className="row">
                <div className="col-md-3">
                    <label>Door no:</label>
                </div>
                <Input value={user.address.door_no}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter door number" />

                <div className="col-md-3">
                    <label>Building Name:</label>
                </div>
                <Input value={user.address.building_name}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter building name" />
                </div>   <br></br>

            <div className="row">
                <div className="col-md-3">
                    <label>Street:</label>
                </div>
                <Input value={user.address.street}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter street" />

                <div className="col-md-3">
                    <label>Locality:</label>
                </div>
                <Input value={user.address.locality}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter locality" />
            </div>   <br></br>


            <div className="row">
                {/* <h3>Address</h3> */}
                <div className="col-md-3">
                    <label>LandMark:</label>
                </div>
                <Input value={user.address.landmark}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter landmark" />
                
                <div className="col-md-3">
                    <label>City:</label>
                </div>
                <div class="mui-select">
                    <select value={user.address.city}
                        onChange={this.handleAddressChange.bind(this)} >
                        <option>Select</option>
                        <option>Vizag</option>
                        <option>Hyderabad</option>
                        <option>Bangalore</option>
                        <option>Chennai</option>
                    </select>
                </div>
                        
            </div><br></br>

            <div className='row'>
                <div className="col-md-3">
                    <label>State:</label>
                </div>
                <div class="mui-select">
                    <select value={user.address.state}
                        onChange={this.handleAddressChange.bind(this)} >
                        <option>Select</option>
                        <option>Andhra Pradesh</option>
                        <option>Telangana</option>
                        <option>Karnataka</option>
                        <option>Tamilnadu</option>
                    </select>
                </div>

                <div className="col-md-3" style={{ marginRight: "3rem" }}>
                    <label>Pincode:</label>
                </div>
                <Input value={user.address.pincode}
                    onChange={this.handleAddressChange.bind(this)} 
                    placeholder="Enter pincode" />
            </div> <br/><br/>
                           
            <Button  onClick={this.submit}>Submit</Button>

        </Form>
      </div>
    </div>

        );
    }
}

export default RegistrationForm

// reactDOM.render(
//     <Registration/>, document.getElementById("root"));

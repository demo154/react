import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
 import "../Components/registration.css";
import { Button } from 'muicss/react';


 

 class Registration extends Component {

    constructor(props){
        super(props);
        this.state={
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
        }
        this.first_name = this.first_name.bind(this);
        this.last_name = this.last_name.bind(this);
        this.gender = this.gender.bind(this);
        this.email = this.email.bind(this);
        this.phone_no = this.phone_no.bind(this);
        this.password = this.password.bind(this);
        this.submit=this.submit.bind(this);
        // this.address.door_no = this.address.door_no.bind(this);
        // this.address.building_name = this.address.building_name.bind(this);
        // this.address.street = this.address.street.bind(this);
        // this.address.locality = this.address.locality.bind(this);
        // this.address.landmark = this.address.landmark.bind(this);
        // this.address.city = this.address.city.bind(this);
        // this.address.state = this.address.state.bind(this);
        // this.address.pincode = this.address.pincode.bind(this);
    }

    first_name(event) {
        this.setState({ first_name : event.target.value })
    }

    last_name(event) {
        this.setState({ last_name: event.target.value })
    }

    gender(event) {
        this.setState({ gender: event.target.value })
    }

    email(event) {
        this.setState({ email: event.target.value })
    }
    phone_no(event) {
        this.setState({ phone_no: event.target.value })
    }

    password(event){
        this.setState({password: event.target.value})
    }

    // door_no(event) {
    //     this.setState({ door_no: event.target.value })
    // }

    submit(event) {
        // alert('success')

        return fetch('http://localhost:8080/user/createUser', {
            method: 'POST',
            headers: {
                'content-Type' :'application/json'
            },
            body:JSON.stringify({
                first_name : this.state.first_name,
                last_name : this.state.last_name,
                gender : this.state.gender,
                email : this.state.email,
                phone_no : this.state.phone_no,
                password : this.state.password,
                // address:{
                //     door_no : this.state.door_no,
                //     building_name : this.state.building_name,
                //     street : this.state.street,
                //     locality : this.state.locality,
                //     landmark : this.state.landmark,
                //     city : this.state.city,
                //     state : this.state.state,
                //     pincode : this.state.pincode
                // }

            })
        })
        .then(function(response) {
            if (!response.ok) {
              throw new Error('Bad status code from server.');
            }
        
            return response.json();
          })
          .then(function(responseData) {
            if (!(responseData.data && responseData.data.success)) {
              
                alert("submitted successfully");
             
            }
      
       });
        
       
        }
      

    render(){
         const {first_name, last_name, gander, email, phone_no, password} = this.state

        return (

    <div className="register">
      <div className="registerBox">
        <img src={require('../Images/reg.jpg')} style={{width:'100px', height:'100px'}} className="register" />
            
            <h3 style={{color:"white"}}>Register Here</h3><br/>
        <Form>   

            
                <div className="col-md-6">
                    <label>First Name:</label>
                </div>
                <Input onChange={this.first_name} placeholder=" Enter first name" /> 
                <br></br>
                <div className="col-md-6">
                     <label>Last Name:</label>
                </div>
                <Input onChange={this.last_name} placeholder="Enter last name" />
           
            <br></br>

            

                <div className="col-md-6">
                    <label>Email:</label>
                </div>
                <Input onChange={this.email} placeholder='Enter email' />
                <br></br>
                <div className="col-md-6">
                    <label>Phone Number:</label>
                </div>
                <Input onChange={this.phone_no} placeholder='Enter Phone No.' />
           
            <br></br>
                        
        
                <div className="col-md-6">
                    <label>Password:</label>
                </div>
                <Input onChange={this.password} name="password" placeholder='Enter password' />
                <br></br>
                <div className="col-md-6" style={{color:"white"}}>
                    <label>Gender:</label>
                </div>
                <div className="row" style={{ color:"white"}}>
                <Input type="radio" onChange={this.gender}  name="type"value="male" style={{marginLeft:"75px", color:"white"}} />Male
                <Input type="radio" onChange={this.gender} name="type"value="female"/>Female
                </div>
          
            <br></br>
                        
            {/* <div className="row">
                <div className="col-md-3">
                    <label>Door no:</label>
                </div>
                <Input name="address.door_no" onChange={this.address.door_no}  placeholder="Enter door number" />

                <div className="col-md-3">
                    <label>Building Name:</label>
                </div>
                <Input onChange={this.building_name}  placeholder="Enter building name" />
                </div>   <br></br>

            <div className="row">
                <div className="col-md-3">
                    <label>Street:</label>
                </div>
                <Input onChange={this.street}  placeholder="Enter street" />

                <div className="col-md-3">
                    <label>Locality:</label>
                </div>
                <Input onChange={this.locality} placeholder="Enter locality" />
            </div>   <br></br>


            <div className="row">
                
                <div className="col-md-3">
                    <label>LandMark:</label>
                </div>
                <Input onChange={this.landmark} placeholder="Enter landmark" />
                
                <div className="col-md-3">
                    <label>City:</label>
                </div>
                <div class="mui-select">
                    <select onChange={this.city}>
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
                    <select onChange={this.state}>
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
                {/* <Input onChange={this.pincode} placeholder="Enter pincode" /> 
            </div> <br/><br/> */}
            <br></br>
            <Button className="btn btn-success" onClick={this.submit}>Submit</Button>

        </Form>
      </div>
    </div>

        );
    }
}

export default Registration

// reactDOM.render(
//     <Registration/>, document.getElementById("root"));

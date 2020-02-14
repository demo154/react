import React, { PureComponent } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
// import Upload from './upload';
import { Dropdown } from 'react-bootstrap';


class Address extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            // door_no:'',
            // building_name:'',
            // street:'',
            // locality:'',
            // landmark:'',
            // city:'',
            // state:'',
            // pincode:''
        }

        // this.door_no = this.door_no.bind(this);
        // this.building_name = this.building_name.bind(this);
        // this.street = this.street.bind(this);
        // this.locality = this.locality.bind(this);
        // this.landmark = this.landmark.bind(this);
        // this.city = this.city.bind(this);
        // this.state = this.state.bind(this);
        // this.pincode = this.pincode.bind(this);
    }

    // door_no(event) {
    //     this.setState({door_no : event.target.value})
    // }
    // building_name(event) {
    //     this.setState({building_name : event.target.value})
    // }
    // street(event) {
    //     this.setState({street : event.target.value})
    // } 
    // locality(event) {
    //     this.setState({locality : event.target.value})
    // } 
    // landmark(event) {
    //     this.setState({landmark : event.target.value})
    // } 
    // city(event) {
    //     this.setState({city : event.target.value})
    // } 
    // state(event) {
    //     this.setState({state : event.target.value})
    // } 
    // pincode(event) {
    //     this.setState({pincode : event.target.value})
    // }    


    render() {
        return (
            <div>
                <div>
                    <Form>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Door No:</label>
                            </div>
                            <Input onChange={this.door_no} placeholder=" Enter door no" /> 
                            <div className="col-md-3">
                                <label>Buiding Name:</label>
                            </div>
                            <Input onChange={this.building_name} placeholder="Enter building name" />
                        </div><br></br>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Street:</label>
                            </div>
                            <Input onChange={this.street} placeholder="Enter street"  />

                            <div className="col-md-3">
                                <label>Locality:</label>
                            </div>
                            <Input onChange={this.locality} placeholder='Enter Locality' />
                        </div><br></br>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Landmark:</label>
                            </div>
                            <Input onChange={this.landmark} placeholder='Enter landmark' />

                            <div className="col-md-3">
                                <label>City:</label>

                            </div>
                            <div class="mui-select">
                                <select>
                                    <option>Select</option>
                                    <Dropdown.Divider />
                                    <option>Vizag</option>
                                    <option>Hyderabad</option>
                                    <option>Bangalore</option>
                                    <option>Chennai</option>
                                </select>
                            </div>
                        </div><br></br>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <label>Pincode:</label>
                            </div>
                           
                           <Input onChange={this.pincode} placeholder="Enter Pincode" />



                            <div className="col-md-3">
                                <label>State:</label>
                            </div>
                            <div class="mui-select">
                                <select>
                                    <option>Select</option>
                                    <Dropdown.Divider />
                                    <option>Vizag</option>
                                    <option>Hyderabad</option>
                                    <option>Bangalore</option>
                                    <option>Chennai</option>
                                </select>
                            </div>  
                        
                     </div>   <br></br>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Address
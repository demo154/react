import React, { PureComponent } from 'react';
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component'
import { Container } from 'react-bootstrap';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import TextArea from 'muicss/lib/react/textarea';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'muicss/react';


class Collapsible extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            // visible: '',
            title: '',
            event_type:'',
            event_category: '',
            organizer_name: '',
            day: '',
            end_date: '',
            summary: '',
            text: '',
            ticket_type: '',
            number_of_tickets: '',
            ticket_price: '',
            register_start_Date: '',
            register_end_date: '',
            published: '',
            coordinates: '',
            tags: '',
            // address:{
            //     door_no:'',
            //     building_name:'',
            //     street:'',
            //     locality:'',
            //     landmark:'',
            //     city:'',
            //     state:'',
            //     pincode:''
            // }
        }
        this.title=this.title.bind(this);
        this.event_type=this.event_type.bind(this);
        this.event_category=this.event_category.bind(this);
        this.organizer_name=this.organizer_name.bind(this);
        this.day=this.day.bind(this);
        this.end_date=this.end_date.bind(this);
        this.summary=this.summary.bind(this);
        this.text=this.text.bind(this);
        this.ticket_type=this.ticket_type.bind(this);
        this.number_of_tickets=this.number_of_tickets.bind(this);
        this.ticket_price=this.ticket_price.bind(this);
        this.register_start_Date=this.register_start_Date.bind(this);
        this.register_end_date=this.register_end_date.bind(this);
        this.published=this.published.bind(this);
        this.coordinates=this.coordinates.bind(this);
        this.tags=this.tags.bind(this);
        
        // this.door_no = this.door_no.bind(this);
        // this.building_name = this.building_name.bind(this);
        // this.street = this.street.bind(this);
        // this.locality = this.locality.bind(this);
        // this.landmark = this.landmark.bind(this);
        // this.city = this.city.bind(this);
        // this.state = this.state.bind(this);
        // this.pincode = this.pincode.bind(this);
        this.create = this.create.bind(this);
    }

    title(event){
        this.setState({title: event.target.value})
    }

    event_type(event){
        this.setState({ event_type: event.target.value})
    }
    
    event_category(event){
        this.setState({event_category: event.target.value})
    }

    organizer_name(event){
        this.setState({organizer_name: event.target.value})
    }

    day(event){
        this.setState({day: event.target.value})
    }

    end_date(event){
        this.setState({end_date: event.target.value})
    }

    summary(event){
        this.setState({summary: event.target.value})
    }

    text(event){
        this.setState({text: event.target.value})
    }

    ticket_type(event){
        this.setState({ticket_type: event.target.value})
    }

    number_of_tickets(event){
        this.setState({number_of_tickets: event.target.value})
    }

    ticket_price(event){
        this.setState({ticket_price: event.target.value})
    }

    register_start_Date(event){
        this.setState({register_start_Date: event.target.value})
    }

    register_end_date(event){
        this.setState({register_end_date: event.target.value})
    }

    published(event){
        this.setState({published: event.target.value})
    }

    coordinates(event){
        this.setState({coordinates: event.target.value})
    }

    tags(event){
        this.setState({tags: event.target.value})
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

    create(event) {
        //alert('success')

        return fetch('http://localhost:8080/event/createEvent', {
            method: 'POST',
            headers: {
                'content-Type' :'application/json'
            },
            body:JSON.stringify({

                title:this.state.title,
                event_type:this.state.event_type,
                event_category:this.state.event_category,
                organizer_name:this.state.organizer_name,
                day:this.state.day,
                end_date:this.state.end_date,
                summary:this.state.summary,
                text:this.state.text,
                ticket_type:this.state.ticket_type,
                number_of_tickets:this.state.number_of_tickets,
                ticket_price:this.state.ticket_price,
                register_start_Date:this.state.register_start_Date,
                register_end_date:this.state.register_end_date,
                published:this.state.published,
                coordinates:this.state.coordinates,
                tags:this.state.tags

            })
        })
         .then(function(response) {
             if(!response.ok) {
                alert("Submit Fail");
             }
             return response.json();
         })

         .then(function(responseData) {
             if(!(responseData.data && responseData.data.success)) {
                alert("Submit Successful");
               
                window.location.href = '/Dashboard';
             }
         });
    }

    render() {
        const {title, event_type, event_category, organizer_name, day, end_date, summary, text, ticket_type, number_of_tickets, ticket_price, register_start_Date, register_end_date, published, coordinates,tags}=this.state
        return (
            <Container style={{marginLeft:"23rem"}}>
                <div>
                 {/* <Dashboard /> */}
                    <legend style={{ textAlign:"center"}}>EVENT CREATION</legend>
                     {/* Collapsible Section Component React component to wrap content in Collapsible element with trigger to open and close  */}
                    <CollapsibleComponent >
                        <CollapsibleHead className="additionalClassForHead">EVENT DETAILS</CollapsibleHead>
                        <CollapsibleContent className="additionalClassForContent"> <br></br>
                            {/* <Eventcreate/> */}
                            <div>
                                <Form>      
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Event Title:</label>
                                        </div>
                                        <Input onChange={this.title} placeholder="Enter title"/>

                                        <div className="col-md-3">
                                            <label>Event Category:</label>
                                        </div>
                                    <Input onChange={this.event_category}  placeholder="Enter Category"/>
                                    </div><br></br>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Organizer Name:</label>
                                        </div>
                                        <Input onChange={this.organizer_name}  placeholder="Enter org name "  />

                                        <div className="col-md-3">
                                            <label>Event Type:</label>
                                        </div>
                                        <Input onChange={this.event_type}  placeholder='Type of the Event' />
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Summary:</label>
                                        </div>
                                        <Input onChange={this.summary}  placeholder="Event Summary" />

                                        <div className="col-md-3">
                                            <label>Description:</label>
                                        </div>
                                        <TextArea onChange={this.text}  placeholder="Enter description " />
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Published:</label>
                                        </div>
                                        <Input onChange={this.published}  placeholder="True/false "  />

                                        <div className="col-md-3">
                                            <label>Co-ordinates:</label>
                                        </div>
                                        <Input onChange={this.coordinates}  placeholder='Enter co-ordinates' />
                                    </div><br></br>
                                    
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Tags:</label>
                                        </div>
                                        <Input onChange={this.tags}  placeholder="Enter tags "  />

                                        {/* <div className="col-md-3">
                                            <label>Owner:</label>
                                        </div>
                                        <Input onChange={this.owner}  placeholder='Enter owner' /> */}
                                    </div><br></br>
                                </Form>
                            </div>
                        </CollapsibleContent>
                        <div>
                            <br></br>
                        </div>
                        <CollapsibleHead >ADDRESS</CollapsibleHead>
                        <CollapsibleContent > <br></br>
                            {/* <Address /> */}
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
                                        <div className="mui-select">
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
                                        <div className="mui-select">
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
                        </CollapsibleContent>
                        <div>
                            <br></br>
                        </div>
                        <CollapsibleHead>DETAILS</CollapsibleHead>
                        <CollapsibleContent> <br></br>
                            {/* <Details /> */}
                            <div>
                                <Form>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Event Start Date:</label>
                                        </div>
                                        <Input type="date" onChange={this.day} placeholder="dd-mm-yyyy" />

                                        <div className="col-md-3">
                                            <label>Event Last Date:</label>
                                        </div>
                                        <Input type="date" onChange={this.end_date} placeholder="dd-mm-yyyy" />
                                    </div><br></br>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Number of Tickets :</label>
                                        </div>
                                        <input onChange={this.number_of_tickets} placeholder="No.of tickets"/>
                                        <div className="col-md-3">
                                            <label>Ticket Type:</label>
                                        </div>
                                        <Input type="radio"class="input"  name="type" value="payment"/>Payment
                                        <Input type="radio"class="input"  name="type" value="free"/>Free
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Ticket Price:</label>
                                        </div>
                                        <Input onChange={this.ticket_price} placeholder="Enter price"/>

                                        <div className="col-md-3">
                                            <label>Registration Start Date:</label>

                                        </div>
                                        <Input type="date" onChange={this.register_start_date} placeholder="dd-mm-yyyy"/>
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Registration End Date:</label>
                                        </div>
                                        <Input type="date" onChange={this.register_end_date} placeholder="dd-mm-yyyy"/>

                                    </div>
                                    <br></br>
                                </Form>
                            </div>
                        </CollapsibleContent>
                        <br/><br/>

                        <div className="row">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   
                    {/* <div className="col-md-1" style={{ marginRight: "1rem" }}> */}
                        </div>
                    {/* </div> */}
                        <div>
                            <br></br>
                        </div>
                        
                    </CollapsibleComponent>
                    <Button className='btn btn-success' onClick={this.create}>Submit</Button>
                </div>
            </Container>
        )
    }
}

export default Collapsible
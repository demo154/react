import React, { PureComponent } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import { Button } from 'muicss/react';

class SpotRegistration extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            course:'',
            branch:'',
            year:'',
            register_date:'',
            amount_paid:'',
            shortlist_status:'',
            ticket_id:'',
            registration_type:'',
            event_id:'',
            participant_id:''

        }

        this.course = this.course.bind(this);
        this.branch = this.branch.bind(this);
        this.year = this.year.bind(this);
        this.register_date = this.register_date.bind(this);
        this.amount_paid = this.amount_paid.bind(this);
        this.shortlist_status = this.shortlist_status.bind(this);
        this.ticket_id = this.ticket_id.bind(this);
        this.registration_type = this.registration_type.bind(this);
        this.event_id = this.event_id.bind(this);
        this.participant_id = this.participant_id.bind(this);
        this.submit = this.submit.bind(this);
    }

    course(event) {
        this.setState({course : event.target.value})
    }
    branch(event) {
        this.setState({branch : event.target.value})
    }
    year(event) {
        this.setState({year : event.target.value})
    }
    register_date(event) {
        this.setState({register_date : event.target.value})
    }
    amount_paid(event) {
        this.setState({amount_paid : event.target.value})
    }
    shortlist_status(event) {
        this.setState({shortlist_status : event.target.value})
    }
    ticket_id(event) {
        this.setState({ticket_id : event.target.value})
    }
    registration_type(event) {
        this.setState({registration_type : event.target.value})
    }
    event_id(event) {
        this.setState({event_id : event.target.value})
    }
    participant_id(event) {
        this.setState({participant_id : event.target.value})
    }

    submit(event) {
        //alert('success')

        return fetch('http://localhost:1111/eventRegistration/createEventRegistration', {
            method: 'POST',
            headers: {
                'content-Type' :'application/json'
            },
            body:JSON.stringify({

                course : this.state.course,
                branch : this.state.branch,
                year : this.state.year,
                register_date : this.state.register_date,
                amount_paid : this.state.amount_paid,
                shortlist_status : this.state.shortlist_status,
                ticket_id : this.state.ticket_id,
                registration_type : this.state.registration_type,
                event_id : this.state.event_id,
                participant_id : this.state.participant_id

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
                //  this.props.history.push('/Dashboard')
             }
         });
        }

    render() {
        return (
            <div>
                <div>
                    <Form>
                                 
                        <div className="row">
                            <div className="col-md-3">
                                <label>Course:</label>
                            </div>
                            <Input onChange={this.course} placeholder=" Enter course" /> 
                            
                            <div className="col-md-3">
                                <label>Branch:</label>
                            </div>
                            <Input onChange={this.branch} placeholder="Enter branch" />
                        </div><br></br>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Year:</label>
                            </div>
                            <Input onChange={this.year} placeholder="Enter year"  />

                            <div className="col-md-3">
                                <label>Register Date:</label>
                            </div>
                            <Input type="date" onChange={this.register_date} placeholder='dd-mm-yyyy' />
                        </div><br></br>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <label>Amount Paid:</label>
                            </div>
                            <Input onChange={this.amount_paid} placeholder='Enter amount' />

                            <div className="col-md-3">
                                <label>Shortlist Status:</label>
                            </div>
                            <Input onChange={this.shortlist_status} placeholder='Enter status' />

                    
                        </div><br></br>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <label>Ticket ID:</label>
                            </div>
                            <Input onChange={this.ticket_id} placeholder="Enter ticket id" />
                            
                            <div className="col-md-3">
                                <label>Registartion type:</label>
                            </div>
                            <Input onChange={this.registration_type} placeholder="Enter reg type" />
                        </div>   <br></br>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Event:</label>
                            </div> 
                            <Input onChange={this.event_id} placeholder="Enter event" />
                            
                            <div className="col-md-3">
                                <label>Participant:</label>
                            </div>
                            <Input onChange={this.participant_id} placeholder="Enter participant" />
                        </div>   <br></br>
                     
                        
                    </Form>
                    <Button  className="btn btn-success" onClick={this.submit}>Register</Button>
                </div>
            </div>

            
        )
    }
}

export default SpotRegistration
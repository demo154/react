import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
// import Input from 'muicss/lib/react/input';
import TextArea from 'muicss/lib/react/textarea';
import './feedback.css';


class Feedback extends Component {
    constructor(props){
        super(props);
        this.state={
            event_feedback:'',
            comments:'',
            suggestions:'',
            helpfull:'',
            key_learned:'',
            feedback_logistics:'',
            // logistics:{
            //     accommodation:'',
            //     welcome_kit:'',
            //     communication:'',
            //     transportation:'',
            //     welcome_activity:'',
            //     venue:'',
            //     activities:'',
            //     closing_ceremony:''
            // },
            // session:{
            //     welcome_activity:'',
            //     session1:'',
            //     session2:'',
            //     closing_activity:''
            // }
        }

        this.event_feedback = this.event_feedback.bind(this);
        this.comments = this.comments.bind(this);
        this.suggestions = this.suggestions.bind(this);
        this.helpfull = this.helpfull.bind(this);
        this.key_learned = this.key_learned.bind(this);
        this.feedback_logistics = this.feedback_logistics.bind(this);
        // this.logistics.accommodation = this.logistics.accommodation.bind(this);
        // this.logistics.welcome_kit = this.logistics.welcome_kit.bind(this);
        // this.logistics.communication = this.logistics.communication.bind(this);
        // this.logistics.transportation = this.logistics.transportation.bind(this);
        // this.logistics.welcome_activity = this.logistics.welcome_activity.bind(this);
        // this.logistics.venue = this.logistics.venue.bind(this);
        // this.logistics.activities = this.logistics.activities.bind(this);
        // this.logistics.closing_ceremony = this.logistics.closing_ceremony.bind(this);
        // this.session.welcome_activity = this.session.welcome_activity.bind(this);
        // this.session.session1 = this.session.session1.bind(this);
        // this.session.session2 = this.session.session2.bind(this);
        // this.session.closing_activity = this.session.closing_activity.bind(this);
        this.submit=this.submit.bind(this);
    }

    event_feedback(event) {
        this.setState({event_feedback : event.target.value})
    }
    comments(event) {
        this.setState({comments : event.target.value})
    }
    suggestions(event) {
        this.setState({suggestions : event.target.value})
    }
    helpfull(event) {
        this.setState({helpfull : event.target.value})
    }
    key_learned(event) {
        this.setState({key_learned : event.target.value})
    }
    feedback_logistics(event) {
        this.setState({feedback_logistics : event.target.value})
    }
    // logistics(event) {
    //     this.setState({logistics : event.target.value})
    // }
    // session(event) {
    //     this.setState({session : event.target.value})
    // }
    
    submit(event) {
                //alert('success')
        
                return fetch('http://localhost:8080/EventFeedback/createEventFeedback', {
                    method: 'POST',
                    headers: {
                        'content-Type' :'application/json'
                    },
                    body:JSON.stringify({
                        event_feedback : this.event_feedback,
                        comments : this.comments,
                        suggestions : this.suggestions,
                        helpfull : this.helpfull,
                        key_learned : this.key_learned,
                        feedback_logistics : this.feedback_logistics,
                        // logistics:{
                        //     accommodation : this.accommodation,
                        //     welcome_kit : this.welcome_kit,
                        //     communication : this.communication,
                        //     transportation : this.transportation,
                        //     welcome_activity : this.welcome_activity,
                        //     venue : this.venue,
                        //     activities : this.activities,
                        //     closing_ceremony : this.closing_ceremony
                        // },
                        // session:{
                        //     welcome_activity : this.welcome_activity,
                        //     session1 : this.session1,
                        //     session2 : this.session2,
                        //     closing_activity : this.closing_activity
                        // }
        
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
                         //this.props.history.push('/HomePage')
                     }
                 });
                }
    

    render(){
        const {event_feedback, comments, suggestions, helpfull, key_learned, feedback_logistics,} = this.state;
        return (
                
    // <section className="content" >
    <div style={{marginLeft: "1px"}}>
    <Form className="input" >
        <div>
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="cards ">
                        <div className="cards-header">
                            <h3 className="card-title" ></h3>
                            <h4 align="center"> Event Feedback Form</h4>
                        </div>                                                                   
                        <div className="cards-body" style={{margin:"2px"}}>
                            <p>Thank you for participating in our event. We hope you had as much fun attending as we did organizing it.
                                We want to hear your feedback so we can keep improving our content. 
                                Please fill this quick survey and let us know your thoughts (your answers will be anonymous).
                            </p>
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label htmlFor="event_feedback">How Satisfied were you with the event?</label>
                                    <select  className="form-control" name="event_feedback">
                                        <option onChange={this.event_feedback}>Excellent</option>
                                        <option onChange={this.event_feedback}>Good</option>
                                        <option onChange={this.event_feedback}>Average</option>
                                        <option onChange={this.event_feedback}>Not Bad</option>
                                        <option onChange={this.event_feedback}>Poor</option>
                                    </select>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label htmlFor="helpfull">How relevant and helpful do you think it was for your carrer?</label>
                                    <select   className="form-control" name="helpfull">
                                        <option onChange={this.helpfull}>Excellent</option>
                                        <option onChange={this.helpfull}>Good</option>
                                        <option onChange={this.helpfull}>Average</option>
                                        <option onChange={this.helpfull}>Not Bad</option>
                                        <option onChange={this.helpfull}>Poor</option>
                                    </select>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>What were your key take aways from this event?</label>
                                    <TextArea type="text" className="input" onChange={key_learned} name="key_learned"> </TextArea> 
                                </div>
                            </div>
                            <hr></hr>
                            {/* <div className="form-group">
                                <div className="row" style={{margin: "2px"}}>
                                    <label>How satisfied were you with the logistics?</label> 
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="accommodation" >Accommodation</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="accommodation" onChange={this.logistics.accommodation} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="accommodation" onChange={this.logistics.accommodation} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="accommodation" onChange={this.logistics.accommodation} value="Average" /> Average
                                        <Input type="radio" className="input"  name="accommodation" onChange={this.logistics.accommodation} value="Poor" /> Poor                                    
                                    
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="welcome_kit" >Welcome Kit</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="welcome_kit" onChange={this.logistics.welcome_kit} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="welcome_kit" onChange={this.logistics.welcome_kit} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="welcome_kit" onChange={this.logistics.welcome_kit} value="Average" /> Average
                                        <Input type="radio" className="input"  name="welcome_kit" onChange={this.logistics.welcome_kit} value="Poor" /> Poor                                    
                                        
                                  
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        
                                    </div>
                                    <label htmlFor="communication" >Communication</label>
                                   
                                        <Input type="radio" className="input"  name="communication" onChange={this.logistics.communication} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="communication" onChange={this.logistics.communication} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="communication" onChange={this.logistics.communication} value="Average" /> Average
                                        <Input type="radio" className="input"  name="communication" onChange={this.logistics.communication} value="Poor" /> Poor                                    
                                    
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="transportation" >Transportation</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="transportation" onChange={this.logistics.transportation} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="transportation" onChange={this.logistics.transportation} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="transportation" onChange={this.logistics.transportation} value="Average" /> Average
                                        <Input type="radio" className="input"  name="transportation" onChange={this.logistics.transportation} value="Poor" /> Poor                                    
                                        
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="welcome_activity" >Welcome Activity</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="welcome_activity" onChange={this.logistics.welcome_activity} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="welcome_activity" onChange={this.logistics.welcome_activity} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="welcome_activity" onChange={this.logistics.welcome_activity} value="Average" /> Average
                                        <Input type="radio" className="input"  name="welcome_activity" onChange={this.logistics.welcome_activity} value="Poor" /> Poor                                    
                                        
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="venue" >Venue</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="venue" onChange={this.logistics.venue}  value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="venue" onChange={this.logistics.venue} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="venue" onChange={this.logistics.venue} value="Average" /> Average
                                        <Input type="radio" className="input"  name="venue" onChange={this.logistics.venue} value="Poor" /> Poor                                    
                                        
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="activities" >Activities</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="activities" onChange={this.logistics.activities} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="activities" onChange={this.logistics.activities} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="activities" onChange={this.logistics.activities} value="Average" /> Average
                                        <Input type="radio" className="input"  name="activities" onChange={this.logistics.activities} value="Poor" /> Poor                                    
                                        
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="closing_ceremony" >Closing Ceremony</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="closing_ceremony" onChange={this.logistics.closing_ceremony} value="Excellent" /> Excellent
                                        <Input type="radio" className="input"  name="closing_ceremony" onChange={this.logistics.closing_ceremony} value="Good" /> Good   
                                        <Input type="radio" className="input"  name="closing_ceremony" onChange={this.logistics.closing_ceremony} value="Average" /> Average
                                        <Input type="radio" className="input"  name="closing_ceremony" onChange={this.logistics.closing_ceremony} value="Poor" /> Poor                                    
                                   
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>Additional feedback on logistics</label>
                                    <TextArea type="text" className="input" onChange={this.feedback_logistics}  name="logistics" /> 
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row" style={{margin: "2px"}}>
                                <label>Which sessions did you find most relevant?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Welcome Activity</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="welcome_activity" onChange={this.session.welcome_activity} value="Excellent" /> Excellent
                                    <Input type="radio" className="input"  name="welcome_activity" onChange={this.session.welcome_activity} value="Good" /> Good   
                                    <Input type="radio" className="input"  name="welcome_activity" onChange={this.session.welcome_activity} value="Average" /> Average
                                    <Input type="radio" className="input"  name="welcome_activity" onChange={this.session.welcome_activity} value="Poor" /> Poor                                    
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Session 1</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session1" onChange={this.session.session1} value="Excellent" /> Excellent
                                    <Input type="radio" className="input"  name="session1" onChange={this.session.session1} value="Good" /> Good   
                                    <Input type="radio" className="input"  name="session1" onChange={this.session.session1} value="Average" /> Average
                                    <Input type="radio" className="input"  name="session1" onChange={this.session.session1} value="Poor" /> Poor                                    
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Session 2</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.session2} value="Excellent" /> Excellent
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.session2} value="Good" /> Good   
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.session2} value="Average" /> Average
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.session2} value="Poor" /> Poor                                    
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Closing Activity</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.closing_activity} value="Excellent" /> Excellent
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.closing_activity} value="Good" /> Good   
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.closing_activity} value="Average" /> Average
                                    <Input type="radio" className="input"  name="session2" onChange={this.session.closing_activity} value="Poor" /> Poor                                    
                               
                            </div>
                            <hr></hr> */}
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>Any additional comments regarding the sessions</label>
                                    <TextArea type="text" className="input" onChange={this.comments}   name="comments" /> 
                                </div>
                            </div>
                            
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>Any suggestions for an event</label>
                                    <TextArea type="text" className="input" onChange={this.suggestions} name="suggestions" /> 
                                </div>
                            </div>
                            <hr></hr>
                            <button type="submit" className="btn btn-success" onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Form>
    </div>
//  </section>


                                                

        );
}
}
export default Feedback
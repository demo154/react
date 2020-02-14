import React, { Component } from 'react';
import Input from 'muicss/lib/react/input'
import TextArea from 'muicss/lib/react/textarea';


class Fback extends Component {

    render() {
        return (
            
      
<section className="content" style={{marginLeft: "4px"}}>
    <form className="input">
        <div >
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="card ">
                        <div className="card-header">
                            <h3 className="card-title" ></h3>
                            <h4 align="center"> Event Feedback Form</h4>
                        </div>                                                                   
                        <div className="card-body"  style={{margin: "2px"}}>
                            <p>Thank you for participating in our event. We hope you had as much fun attending as we did organizing it.
                                We want to hear your feedback so we can keep improving our content. 
                                Please fill this quick survey and let us know your thoughts (your answers will be anonymous).
                            </p>
                            <div className="row"  style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label htmlFor="event_feedback">How Satisfied were you with the event?</label>
                                    <select className="form-control" name="event_feedback">
                                        <option>Excellent</option>
                                        <option>Good</option>
                                        <option>Average</option>
                                        <option>Not Bad</option>
                                        <option>Poor</option>
                                    </select>
                                </div>
                            </div>
                           <hr></hr>
                            <div className="row"  style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label htmlFor="helpfull">How relevant and helpful do you think it was for your carrer?</label>
                                    <select   className="form-control" name="helpfull">
                                        <option>Excellent</option>
                                        <option>Good</option>
                                        <option>Average</option>
                                        <option>Not Bad</option>
                                        <option>Poor</option>
                                    </select>
                                </div>
                            </div>
                           <hr></hr>
                            <div className="row"  style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>What were your key take aways from this event?</label>
                                    <Input type="text" className="input"  name="key_learned" /> 
                                </div>
                            </div>
                           <hr></hr>
                            <div className="form-group">
                                <div className="row"  style={{margin: "2px"}}>
                                    <label>How satisfied were you with the logistics?</label> 
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="accommodation" >Accommodation</label>
                                    </div>
                                  
                                        <Input type="radio" className="input" name="accommodation" value="Excellent" />Excellent
                                        <Input type="radio" className="input" name="accommodation" value="Good" />Good  
                                        <Input type="radio" className="input" name="accommodation" value="Average" />Average 
                                        <Input type="radio" className="input" name="accommodation" value="Poor" />Poor                                   
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="welcome_kit" >Welcome Kit</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="welcome_kit" value="Excellent"/> Excellent 
                                        <Input type="radio" className="input"  name="welcome_kit" value="Good"/> Good    
                                        <Input type="radio" className="input"  name="welcome_kit" value="Average"/> Average 
                                        <Input type="radio" className="input"  name="welcome_kit" value="Poor"/> Poor                                     
                                        
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="communication" >Communication</label>
                                    </div>
                                   
                                        <Input type="radio" className="input" name="communication" value="Excellent"/> Excellent 
                                        <Input type="radio" className="input" name="communication" value="Good" /> Good    
                                        <Input type="radio" className="input" name="communication" value="Average" /> Average 
                                        <Input type="radio" className="input" name="communication" value="Poor" /> Poor                                     
                                    
                                  
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="transportation" >Transportation</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="transportation" value="Excellent" /> Excellent 
                                        <Input type="radio" className="input"  name="transportation" value="Good" /> Good    
                                        <Input type="radio" className="input"  name="transportation" value="Average" /> Average 
                                        <Input type="radio" className="input"  name="transportation" value="Poor" /> Poor                                     
                                        
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="welcome_activity" >Welcome Activity</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="welcome_activity" value="Excellent" /> Excellent 
                                        <Input type="radio" className="input"  name="welcome_activity" value="Good" /> Good    
                                        <Input type="radio" className="input"  name="welcome_activity" value="Average" /> Average 
                                        <Input type="radio" className="input"  name="welcome_activity" value="Poor" /> Poor                                     
                                        
                                  
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="venue" >Venue</label>
                                    </div>
                                   
                                        <Input type="radio" className="input" name="venue" value="Excellent" /> Excellent 
                                        <Input type="radio" className="input" name="venue" value="Good" /> Good    
                                        <Input type="radio" className="input" name="venue" value="Average" /> Average 
                                        <Input type="radio" className="input" name="venue" value="Poor" /> Poor                                     
                                        
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="activities" >Activities</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="activities" value="Excellent" /> Excellent 
                                        <Input type="radio" className="input"  name="activities" value="Good" /> Good    
                                        <Input type="radio" className="input"  name="activities" value="Average" /> Average 
                                        <Input type="radio" className="input"  name="activities" value="Poor" /> Poor                                     
                                        
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="closing_ceremony" >Closing Ceremony</label>
                                    </div>
                                   
                                        <Input type="radio" className="input"  name="closing_ceremony" value="Excellent" /> Excellent 
                                        <Input type="radio" className="input"  name="closing_ceremony" value="Good" /> Good    
                                        <Input type="radio" className="input"  name="closing_ceremony" value="Average" /> Average 
                                        <Input type="radio" className="input"  name="closing_ceremony" value="Poor" /> Poor                                     
                                   
                                </div>
                            </div>
                           <hr></hr>
                            <div className="row"  style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>Additional feedback on logistics</label>
                                    </div>
                                    <Input type="text" className="input"  name="logistics" />  
                               
                            </div>
                           <hr></hr>
                            <div className="row"  style={{margin: "2px"}}>
                                <label>Which sessions did you find most relevant?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Welcome Activity</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="welcome_activity" value="Excellent" /> Excellent 
                                    <Input type="radio" className="input"  name="welcome_activity" value="Good" /> Good    
                                    <Input type="radio" className="input"  name="welcome_activity" value="Average" /> Average 
                                    <Input type="radio" className="input"  name="welcome_activity" value="Poor" /> Poor                                     
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Session 1</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session1" value="Excellent" /> Excellent 
                                    <Input type="radio" className="input"  name="session1" value="Good" /> Good    
                                    <Input type="radio" className="input"  name="session1" value="Average" /> Average 
                                    <Input type="radio" className="input"  name="session1" value="Poor" /> Poor                                     
                               
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Session 2</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session2" value="Excellent" /> Excellent 
                                    <Input type="radio" className="input"  name="session2" value="Good" /> Good    
                                    <Input type="radio" className="input"  name="session2" value="Average" /> Average 
                                    <Input type="radio" className="input"  name="session2" value="Poor" /> Poor                                     
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="welcome_activity" >Closing Activity</label>
                                </div>
                               
                                    <Input type="radio" className="input"  name="session2" value="Excellent" /> Excellent 
                                    <Input type="radio" className="input"  name="session2" value="Good" /> Good    
                                    <Input type="radio" className="input"  name="session2" value="Average" /> Average 
                                    <Input type="radio" className="input"  name="session2" value="Poor" /> Poor                                     
                                
                            </div>
                           <hr></hr>
                            <div className="row" style={{margin: "2px"}}>
                                <div className="form-group">
                                    <div className="col-md-4"></div>
                                    <label>Any additional comments regarding the sessions</label>
                                </div><br></br>
                               
                                <TextArea type="text" className="input"   name="comments"/>       
                                
                            </div>
                           <hr></hr>
                            <div className="row"  style={{margin: "2px"}}>
                                <div className="form-group">
                                    <label>Any suggestions for an event</label>
                                </div>
                                <TextArea type="text" className="input"  name="suggestions"/>       
                                
                            </div>
                           <hr></hr>
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>
  );
}
}

export default Fback;

                                                

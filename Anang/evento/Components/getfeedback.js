import React, { Component } from 'react';
// import { Container } from 'react-bootstrap/lib/Tab';
import { Table } from 'react-bootstrap';


 class GetFeedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[],
            feedbacks:[],
            isLoaded: false,

        }
    }

    componentDidMount(){

        fetch('http://localhost:8080/EventFeedback/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            feedbacks:json,
        })
        })
        fetch('http://localhost:8080/attendance/event/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
             events:json,
        })
        })


    }
    render(){
        var {isLoaded, feedbacks}=this.state;
        var {isLoaded, events}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
<div className="col-md-6" style= {{marginLeft : "30rem"}}>
    <Table striped bordered hover size="md">
        <thead>
            <tr > 
                <h4 className="card-title" style={{color:"darkblue"}} >Events 
                <select  >
                { (events.length > 0) ? events.map (event => {
            return (
                   
                    <option key={event.index}>{event.title}</option>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr> }  
                 </select>
                </h4>
            </tr>
            
            <tr>
                <th>s.no</th>
                <th>Event Feedback</th>
                <th>Sessions</th>
                <th>Helpfull</th>
                <th>Key Learned</th>
                <th>Logistics</th>
                <th>Feedback For Logistics</th>
                <th>Comments</th>
                <th>Suggestions</th>
            </tr>
                  <tr></tr>
        </thead>
        <tbody>
        { (feedbacks.length > 0) ? feedbacks.map (feedback => {
            return (
            <tr key={feedback.index } >
                <td></td>
                <td>{feedback.event_feedback}</td>
                <td>{feedback.sessions.session1}</td>
                <td>{feedback.helpfull}</td>
                <td>{feedback.key_learned}</td>
                <td>{feedback.logistics.transportation}</td>
                <td>{feedback.feedback_logistics}</td>
                <td>{feedback.comments}</td>
                <td>{feedback.suggestions}</td>
                         
            </tr>
            )
        }) : <tr><td colSpan="5">Loading...</td></tr> }            
        </tbody>
    </Table>
</div>




                                                   

        );
}
}

export default GetFeedback;
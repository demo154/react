import React, { PureComponent } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import TextArea from 'muicss/lib/react/textarea';


class Eventcreate extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            visible: '',
            id:'',
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
            tags: ''
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

    submit(event) {
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
                 this.props.history.push('/Dashboard')
             }
         });
    }

    render() {
        const {title, event_type, event_category, organizer_name, day, end_date, summary, text, ticket_type, number_of_tickets, ticket_price, register_start_Date, register_end_date, published, coordinates,tags}=this.state

        return (
            <div>
                {/* <Dashboard/> */}
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

                            <div className="col-md-3">
                                <label>Owner:</label>
                            </div>
                            <Input onChange={this.owner}  placeholder='Enter owner' />
                        </div><br />
                    </Form>
                </div>
            </div>
        )
    }
}

export default Eventcreate;
import React, { PureComponent } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';



class Details extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
            day:'',
            end_date:'',
            ticket_type:'',
            number_of_tickets: '',
            ticket_price:'',
            register_start_date: '',
            register_end_date: '',
        }

        this.day = this.day.bind(this);
        this.end_date = this.end_date.bind(this);
        this.ticket_type = this.ticket_type.bind(this);
        this.number_of_tickets = this.number_of_tickets.bind(this);
        this.ticket_price = this.ticket_price.bind(this);
        this.register_start_date = this.register_start_date.bind.bind(this);
        this.register_end_date = this.register_end_date.bind(this);
    }

    day(event) {
        this.setState({ day: event.target.value })
    }

    end_date(event) {
        this.setState({ end_date: event.target.value })
    }

    ticket_type(event) {
        this.setState({ ticket_type: event.target.value })
    }

    number_of_tickets(event) {
        this.setState({ number_of_tickets: event.target.value })
    }

    ticket_price(event) {
        this.setState({ ticket_price: event.target.value })
    }

    register_start_date(event) {
        this.setState({ register_start_date: event.target.value })
    }

    register_end_date(event) {
        this.setState({ register_end_date: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <Form>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Event Start Date:</label>
                            </div>
                            <Input onChange={this.day} placeholder="dd-mm-yyyy" />

                            <div className="col-md-3">
                                <label>Event Last Date:</label>
                            </div>
                            <Input onChange={this.end_date} placeholder="dd-mm-yyyy" />
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
                            <Input onChange={this.register_start_date} placeholder="dd-mm-yyyy"/>
                        </div><br></br>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Registration End Date:</label>
                            </div>
                            <Input onChange={this.register_end_date} placeholder="dd-mm-yyyy"/>

                        </div>
                        <br></br>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Details;
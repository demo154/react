import React, { Component } from 'react';
import {Card, CardDeck, CardColumns} from 'react-bootstrap';
import { Button} from 'react-bootstrap';


 class ListofEvents extends Component {
    constructor(props){
        super(props);
        this.state={
           event:[],
            img:0,
            isLoaded: false

        }
        this.img = this.img.bind(this);
    }
    img(e){
        this.setState({ img : this.state.img + 1})
       
    }
    
    componentDidMount(){

        fetch('http://localhost:8080/event/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            event:json,
        })
        })
    }
    
    render(){
        var {isLoaded,event}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
            
    <div style={{width:"50%",textAlign:"center", marginLeft: "10%", marginRight:"10%" }}>
        <CardColumns>
            { (event.length > 0) ?event.map (eve => {
                return (
           
            <Card style={{ width: '20rem',height:'35rem' }}>
                <Card.Img variant="top" src={require('../Images/evetno2.png')} style={{width: "180px", height: "150px"}}  />
                <Card.Body>
               
                    <div key={eve.i }>
                    <Card.Title><b>{eve.title}</b></Card.Title>
                    <Card.Text>
                        {/* {eve.title}<br></br> */}
                        {eve.event_type}<br></br>
                        {eve.event_category}<br></br>
                        {eve.day}<br></br>
                    </Card.Text>
                    </div><br/>
                    <Button variant="primary" >Register Here</Button>
                </Card.Body>
            </Card>
            )
        }) :<label>Loading...</label>}
        </CardColumns>
      </div>      

        );
}
}

export default ListofEvents;
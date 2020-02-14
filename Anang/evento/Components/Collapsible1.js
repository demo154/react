import React, { PureComponent } from 'react';
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component'
import { Container } from 'react-bootstrap';
import SpotRegistration from './SpotRegistration.js';

class Collapsible1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container style={{marginLeft:"23rem"}}>
                <div>
                    {/* <Dashboard/> */}
                    <legend style={{ textAlign:"center"}}>EVENT REGISTRATION</legend>
                     {/* Collapsible Section Component React component to wrap content in Collapsible element with trigger to open and close  */}
                    <CollapsibleComponent>
                        <CollapsibleHead className="additionalClassForHead">REGISTRATION FORM</CollapsibleHead>
                        <CollapsibleContent className="additionalClassForContent"> <br></br>
                            <SpotRegistration/>
                        </CollapsibleContent>
                        <br/>
                        <br/>

                        <div className="row">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   
                    {/* <div className="col-md-2" style={{ marginRight: "1rem" }}> */}

                        {/* <button className='btn btn-success'>Submit</button> */}

                    </div>
                    {/* </div> */}


                        
                        <div>
                            <br></br>
                        </div>

                        {/* <CollapsibleHead >ADDRESS</CollapsibleHead>
                        <CollapsibleContent > <br></br>
                            <Address />
                        </CollapsibleContent> */}
                        <div>
                            <br></br>
                        </div>
                        {/* <CollapsibleHead>DETAILS</CollapsibleHead>
                        <CollapsibleContent> <br></br>
                            <Details />
                        </CollapsibleContent> */}
                        <div>
                            <br></br>
                        </div>
                        {/* <CollapsibleHead>REMARKS</CollapsibleHead>
                        <CollapsibleContent> <br></br>
                            <Popup4 />
                        </CollapsibleContent> */}
                    </CollapsibleComponent>


                              

                </div>

                
            </Container>

            
        )
    }
}

export default Collapsible1
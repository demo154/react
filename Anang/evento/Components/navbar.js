import React, { PureComponent } from 'react';
import { Nav, Navbar, Button, ButtonToolbar, Form, FormControl } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaComments, FaBell, FaThLarge } from "react-icons/fa"

class navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <>
                <Navbar bg="light" variant="dark" >
                    <Nav className="mr-auto" style={{ marginLeft: "4rem" }}>
                        <ButtonToolbar>
                            <div className="row">
                                <div className="col-md-6">
                                    <a href="#" onClick={event => window.location.href = '/Home'} variant="primary">Home</a>
                                </div>

                                <div className="col-md-6">
                                    <a href="#" onClick={event => window.location.href = '/Contact'} variant="primary">Contact</a>
                                </div>
                            </div>

                            <div className="row">   
                                <div className="col-md-12">
                                <Form inline style={{marginLeft: "30rem"}}>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button>Search</Button>
                                </Form>
                                </div>
                            </div>

                        <div style={{marginLeft: "10rem"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <a href="#" onClick={event => window.location.href = '#'} variant="primary"><FaComments /></a>
                                </div>

                                <div className="col-md-4">
                                    <a href="#" onClick={event => window.location.href = '#'} variant="primary"><FaBell /></a>
                                </div>

                                <div className="col-md-4">
                                    <a href="#" onClick={event => window.location.href = '#'} variant="primary"><FaThLarge /></a>
                                </div>
                            </div>
                        </div>
                        </ButtonToolbar>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default navbar
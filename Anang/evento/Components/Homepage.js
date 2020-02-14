import React, { Component } from 'react';
import Action from './action';
import Aboutus from './aboutus';
import Certificate from './certificate';
import Evento from './evento';
import Events from './events';
import  Footer  from './footer';
import Introduction from './introduction';
import Product from './product';
import Whychooseus from './whychooseus';

class Homepage extends Component {

    render() {
        return (
            <div className="App">
                <>
                    <Evento />
                    <Events />
                    <Product />
                    <Aboutus />
                    <Whychooseus />
                    <Certificate />
                    <Introduction />
                    <Action />
                    <Footer />
                </>
            </div>
        );
    }
}

export default Homepage;
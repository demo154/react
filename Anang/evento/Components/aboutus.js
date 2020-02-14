import React, { Component } from 'react';
import './aboutus.css';


class Aboutus extends Component{

    render () {

        return(

            <section id="about">

                    <div class="container">
                        <div class="row">

                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                            <img src={require('../Images/about-img.jpg')} alt="" />
                            </div>
                        </div>

                        <div class="col-lg-7 col-md-6">
                            <div class="about-content">
                            <h2>About Us</h2>
                            <h3></h3>
                            <p>Evento is a global platform for live experiences that allows anyone to create,share,find and attend events that 
                            fuel their passion and enrich their lives.</p>
                            <p>Leave your event in the capable hands of the professionals.A place where the impossible becomes possible,where budget
                            can become a desired outcome,and where dreams can become a reality.</p>
                            </div>
                        </div>
                        </div>
                    </div>

    </section>

        );
    }

}
export default Aboutus;
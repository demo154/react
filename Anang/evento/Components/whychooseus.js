import React, { Component } from 'react';
import './whychooseus.css';

class Whychooseus extends Component{
    render(){
        return(


            <section id="why-us" class="wow fadeIn">
                      <div class="container-fluid">
        
                            <header class="section-header">
                            <h3>Why choose us?</h3>
                            <p>A choice that makes the difference.</p>
                            </header>

                            <div class="row">

                            <div class="col-lg-6">
                                <div class="why-us-img">
                                <img src={require('../Images/why-us.jpg')} alt="" class="img-fluid" />
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="why-us-content">
                                
                                <div class="features wow bounceInUp clearfix">
                                    <i class="fa fa-diamond" style={{color: '#f058dc'}}></i>
                                    <h4>WE CARE ABOUT YOUR EVENT</h4>
                                    <p>Choosing Evento is an investment towards your event because we treasure and care for all our clients and we are prepared to go that extra mile to make each event unique and memorable. With our experienced team, we ensure the success of your event – that is why we do not simply ‘manage’ things – we ‘orchestrate’ every single component of your special day.</p>

                                    
                                </div>

                                <div class="features wow bounceInUp clearfix">
                                    <i class="fa fa-object-group" style={{color: '#ffb774'}}></i>
                                    <h4>WE PROVIDE QUICK RESPONSE</h4>
                                    <p>We never let the client down (and never have).  We communicate with you every step of the way with project plans, regular updates and reports..</p>
                                </div>
                                
                                <div class="features wow bounceInUp clearfix">
                                    <i class="fa fa-language" style={{color: '#589af1'}}></i>
                                    <h4>Voluptates dolores</h4>
                                    <p>We design the event, plan the great day and coordinate to all suppliers involved so you can enjoy of preparations and the day designated without more concerns that say I do!.</p>
                                </div>
                                
                                </div>

                            </div>

                            </div>

                        </div>

                        <div class="container">
                            <div class="row counters">

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">15</span>
                                <p>Events</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">3000</span>
                                <p>Participants</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">4</span>
                                <p>Organisers</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">3</span>
                                <p>Themes</p>
                            </div>
                    
                            </div>

                        </div>
    </section>

        );
    }

}
export default Whychooseus;
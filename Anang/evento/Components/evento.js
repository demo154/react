import React, { Component } from 'react';
import "./evento.css";

class Evento extends  Component{
  
  render (){

    return (

 <div>      
   <header id="header">
                    
                     <div id="topbar">
                         <div class="container">
                            <div class="social-links">
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                         </div>
                     </div>
                    
                        <div class="container">
                    
                            <div class="logo float-left">
                            
                                <h1 class="text-light"><a href="#intro" class="scrollto"><span> Evento</span></a></h1>
                           
                            </div>
                    
                          <nav class="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="#intro"><i class="fa fa-home"> Home</i></a></li>
                                <li><a href="/homepage#about"><i class="fa fa-users"> About Us</i></a></li>
                                <li><a href="/homepage#services"><i class="fa fa-produt">Product</i></a></li>
                                <li><a href="/homepage#certificate"><i class="fa fa-certificate"> Certificate</i></a></li>
                                <li><a href="#"><i class="fa fa-ticket"> tickets</i></a></li>
                                <li><a href="/homepage#portfolio"><i class="fa fa-events">Events</i></a></li>
                                <li><a href="/Dashboard"><i class="fa fa-plus"> Event-Creation</i></a></li>
                                <li><a href="/login"><i className="fa fa-sign-in"> Login</i></a></li>
                                
                            </ul>
                         </nav>
                            
                     </div>
                </header>
             <section id="intro" class="clearfix">
                    <div class="container d-flex h-100">
                            <div class="row justify-content-center align-self-center">
                                        <div class="col-md-6 intro-info order-md-first order-last">
                                        <h2> Evento Solutions for Your <span> Events!</span></h2>
                                            <div>
                                                <a href="/Registration" class="btn-get-started scrollto">Register here</a>
                                            </div>
                                        </div>
                                <div class="col-md-6 intro-img order-md-last order-first">
                                <img src= {require('../Images/evetno2.png')} alt="" class="img-fluid" />
                                </div>
                            </div>
                    </div>    
                </section>
                </div>
    
      );
    }
}
export default Evento;
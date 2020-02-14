import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{

    render(){

        return(
                <footer id="footer" class="section-bg">
                            <div class="footer-top">
                               <div class="container">

                                 <div class="row">

                                   <div class="col-lg-6">

                                    <div class="row">

                                     <div class="col-sm-6">

                                        <div class="footer-info">
                                            <h3>Evento</h3>
                                           
                                        </div>

                                        <div class="footer-newsletter">
                                            <h4>Our Newsletter</h4>
                                            <p>For subscription use below subscriber bar.</p>
                                            <form action="" method="post">
                                             <input type="email" name="email" /><input type="submit"  value="Subscribe" />
                                            </form>
                                        </div>

                                     </div>

                                  <div class="col-sm-6">
                                         <div class="footer-links">
                                            <h4>Useful Links</h4>
                                            <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Terms of service</a></li>
                                            <li><a href="#">Privacy policy</a></li>
                                            </ul>
                                        </div>

                                        <div class="footer-links">
                                            <h4>Contact Us</h4>
                                            <p>
                                             IT park Hill no.2 <br></br>
                                             Rushikonda,Vishakhapatnam<br></br>
                                             (Andhra Pradesh) INDIA <br></br>
                                             <strong>Phone:</strong>7075443658<br></br>
                                             <strong>Email:</strong>evento@gmail.com<br></br>
                                            </p>
                                        </div>

                                        <div class="social-links">
                                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                        </div>

                                     </div>

                                  </div>

                             </div>

                                <div class="col-lg-6">

                                    <div class="form">
                                    
                                    <h4>Send us a message</h4>
                                    <p>If you have any queries then fill in the form below and we will respond within 48 hours.</p>
                                    <form action="" method="post" role="form" class="contactForm">
                                        <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div class="validation"></div>
                                        </div>

                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>

                                        <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                                    </form>
                                 </div>

                                </div>

                                

                             </div>

                            </div>
                            </div>

                            <div class="container">
                            <div class="copyright">
                                Copyright <strong> Evento </strong>. All Rights Reserved
                            </div>
                            <div class="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                            </div>
  </footer>

        );
    }

}
export default Footer;
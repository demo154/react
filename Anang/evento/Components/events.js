import React, { Component } from 'react';
import './events.css';


class Events extends Component{

    render(){
        return(

     <section id="portfolio" className="section-bg">
             <div className="container">
                            
                                <header className="section-header">
                                   <h3 className="section-title">Upcoming Events</h3>
                                </header><br></br>
                                
                                {/* <div className="row">
                                  <div className="col-lg-12">
                                    <ul id="portfolio-flters">
                                     <li data-filter="*" className="filter-active">All</li>
                                     <li data-filter=".filter-app">App</li>
                                     <li data-filter=".filter-card">Card</li>
                                      <li data-filter=".filter-web">Web</li>
                                    </ul>
                                    
                                  </div>
                                </div> */}

                      <div className="row portfolio-container">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                         <img src={require('../Images/evetno2.png')} className="img-fluid" alt="" /> 
                                       <div className="portfolio-info">
                                          <h4><a href="#">Event 1</a></h4>
                                         <div>
                                          <a href="Images/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                                    <div className="portfolio-wrap">
                                         <img src={require('../Images/e.jpg')} className="img-fluid" alt="" /> 
                                       <div className="portfolio-info">
                                          <h4><a href="#">Event 2</a></h4>
                                         
                                          <div>
                                            <a href="Images/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                                           <a href="#" class="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                         </div>
                                      </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                                    <div className="portfolio-wrap">
                                      <img src={require('../Images/ee.jpg')} class="img-fluid" alt="" /> 
                                    <div className="portfolio-info">
                                        <h4><a href="#">Event 3</a></h4>
                                        
                                        <div>
                                        <a href="Images/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" className="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                             <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                 <div class="portfolio-wrap">
                                      <img src={require('../Images/eee.jpg')} class="img-fluid" alt="" />
                                     <div class="portfolio-info">
                                        <h4><a href="#">Event 4</a></h4>
                                        
                                        <div>
                                        <a href="Images/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                     </div>
                                 </div>
                             </div>
                          </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                     <img src={require('../Images/aa.jpg')} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a href="#">Event 5</a></h4>
                                        
                                        <div>
                                        <a href="Images/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                     <img src={require('../Images/aaaa.jpg')} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a href="#">Event 6</a></h4>
                                       
                                        <div>
                                        <a href="Images/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div class="portfolio-wrap">
                                     <img src="../Images/portfolio/card1.jpg" class="img-fluid" alt="" /> 
                                    <div class="portfolio-info">
                                        <h4><a href="#">Card 1</a></h4>
                                        <p>Card</p>
                                        <div>
                                        <a href="Images/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                     <img src="../Images/portfolio/card3.jpg" class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a href="#">Card 3</a></h4>
                                        <p>Card</p>
                                        <div>
                                        <a href="Images/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                             <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                                 <div class="portfolio-wrap">
                                     <img src="../Images/portfolio/web1.jpg" class="img-fluid" alt="" /> 
                                    <div class="portfolio-info">
                                        <h4><a href="#">Web 1</a></h4>
                                        <p>Web</p>
                                        <div>
                                         <a href="Images/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                                         <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                 </div>
                           </div>

               </div>

         </div>
    </section>

        );
    }

}
export default Events;
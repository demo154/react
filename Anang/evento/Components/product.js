import React, { Component } from 'react';
import './product.css';
class Product extends  Component{
  
    render (){
  
      return (

<section id="services" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3>Products</h3>
          <p>Products of Evento.</p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-analytics-outline" ></i></div>
              <h4 class="title"><a href="">Custom Registration Forms </a></h4>
              <p class="description">An event will be created / configured in the platform. The event may have multiple sessions/ tracks. These tracks/sessions are created and handled in the systems. A complete one page web-page is created for the event. The page can be configured according to the theme and taste of the user. </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
              <h4 class="title"><a href="">Custom Homepage</a></h4>
              <p class="description">Dynamic home page consists of the information about the event and venue of the event. It also includes the logo of the event, help, create event, browse event. </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-paper-outline" ></i></div>
              <h4 class="title"><a href="">Coupon Management</a></h4>
              <p class="description">It gives the discount for registration. The discounts are of two types, one is based on the percentage and the other is based on the rupees. These discounts are limited to certain period of time after that it is invalid. </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-speedometer-outline" ></i></div>
              <h4 class="title"><a href="">QR Code Ticketing </a></h4>
              <p class="description">The one who registered to attend the event should have the QR code which was send through the email and when the QR code is scanned it should match with the QR code present with the admin then the person is eligible for entering the event.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-world-outline" ></i></div>
              <h4 class="title"><a href="">Queue Management</a></h4>
              <p class="description">Managing the crowd during the event is tough. Using this product, checkpoints are created in the event at various counters like food counter, giveaway counter, individual sessions and etc.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-clock-outline" ></i></div>
              <h4 class="title"><a href="">Certificate Module</a></h4>
              <p class="description">This certificate module is used to provide the certificates to the participants based on the event / session and category wise. A digital certificate is generated and sent to the participants through email. The certificate contains QR code to verify the authenticity.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" ><i class="ion-ios-clock-outline" ></i></div>
              <h4 class="title"><a href="">Feedback Forms and Analytics</a></h4>
              <p class="description"> After the event has finished the participants will receive a feedback form in that they should through their   opinions/suggestions.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
      );
    }
}
    export default Product;

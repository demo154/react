import React,{ Component } from 'react';
import './action.css';

class Action extends Component{

    render(){

        return(
            <section id="call-to-action" class="wow fadeInUp">
                    <div class="container">
                        <div class="row">
                         <div class="col-lg-9 text-center text-lg-left">
                             <h3 class="cta-title">Call To Action</h3>
                             <p class="cta-text">Host your own Event</p>
                         </div>
                          <div class="col-lg-3 cta-btn-container text-center">
                             <a class="cta-btn align-middle" href="#">Call To Action</a>
                          </div>
                       </div>

                   </div>
    </section>

        );
    }
}
export default Action;
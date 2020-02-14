import React, { Component } from 'react';
import './introduction.css';
class Introduction extends Component{

    render(){

        return(

         <section id="features">
                 <div className="container">

                     <div className="row feature-item">
                        <div className="col-lg-6 wow fadeInUp">
                            <img src={require('../Images/int.jpg')} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <h4>Evento Introduction</h4>
                            <p>
                            Event management is also a kind of project management. The event management also have multiple phases in its life cycle. Nowadays, handling an event from end to end is not that easy as it looks like. It can be managed with one event management software. 
                            </p>
                            <p>
                            It needs lot of manpower and planning  lot of steps starts from planning, publishing, execution and post event reports. An event management ERP which streamlines the event life cycle process. There are some applications available in market which focus on only one phase of the event life cycle.
                            </p>
                        </div>
                     </div>


                 </div>
    </section>

        )
    }

}
export default Introduction;
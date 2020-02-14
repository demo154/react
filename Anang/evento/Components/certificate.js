import React, { Component } from 'react';
import './certificate.css';

class Certificate extends Component{

    render(){

        return(

            <section id="certificate"> 
                <header>
                    <h2 class="certy" style={{textalign: 'center'}}>Certificate</h2>
                </header>
                <div class="row">
                    <div class="column1">
                    <div class="card1">
                        <img src={require('../Images/certy.png')} alt=""  class="img-fluid" /> 
                    </div>
                    </div>
      
                    <div class="column1">
                    <div class="card2">
                        <img src={require('../Images/certy2.jpg')} alt=""  class="img-fluid" /> 
                    </div>
                    </div>
                </div>  
     </section> 
        )
    }

}
export default Certificate;
import React, { PureComponent } from 'react';
import Sidenav from './sidenav';
import Navbar from './navbar';

class Dashboard extends PureComponent {

    render() {
        return (
            <>
              <div>
                  <div className="col-md-10" style={{marginLeft:"22rem"}}>
                    <Navbar />
                  </div>
                  
                    <Sidenav />
                  
              </div>
            </>
        );
    }
}

export default Dashboard;
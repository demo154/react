import React,{ Component } from 'react';
import Joyride from 'react-joyride';


class Pageguide extends Component{

    render(){
        return(
         <Joyride
          run={true}
            callback={() => null}
        steps={[
          {
           content:
            "Double click or press enter on this cell to open the DropDownEditor",
          target: ".react-grid-Cell:last-child"
         }
       ]}
     />
        );
    }

}
export default Pageguide;
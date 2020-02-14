import React,{Component} from 'react';


class EmployeeDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            
            

        }
    }
    
   
 
    render(){
    const user = this.props.location
    const getId=(path)=>{
    var pos=path.indexOf("=")+1;
    var pId=path.substr(pos,path.length);
    return pId;
          }
        return(
          <div className="card" style={{width:"30rem",height:"10rem", marginLeft:"24rem"}}>            
            <h3>EmployeeDetails</h3>
            <hr/>
              <p>
              <strong>User Details:{getId(user.pathname)}</strong>
             
               
              </p>
        
          </div>

        )
      }
      
    
}


export default EmployeeDetails;
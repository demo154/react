import React,{Component} from 'react';
import {Bar, Line,Pie} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','June','July','August'],
  datasets: [
    {
      label: 'Jobs',
      //backgroundColor: 'rgba(75,192,192,1)',
      backgroundColor:'green',
      //borderColor: 'rgba(0,0,0,1)',
      borderColor:'white',
      borderWidth: 1,
     
      data: [ 50, 55, 60, 60, 70, 75,80,80]
    }
  ]
}
 class ChartDemo extends Component {
  render() {
    return (
      <div>
        <Bar
        //height={100}   width={100}
       
          
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Jobs per month',
              fontSize:10,
              
            },
            legend:{
              display:true,
              position:'right'
            },
           maintainAspectRatio:false
          }}
          
        />
      </div>
    );
  }
}

export default ChartDemo
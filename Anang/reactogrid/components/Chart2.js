import React, {Component} from 'react';
import {Bar,Line,Pie, Doughnut} from 'react-chartjs-2';


class Chart2 extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['Maharashtra','Telangana','Bihar','A.P','U.P','M.P'],
                datasets:[
                    {
                        label:'Population',
                        data:[467374,397485,485974,537473,685746,489544],
                        backgroundColor: ['blue','black','grey',
                        'brown','green','yellow']

                    }
                ]
            }
        }
    }

render(){
    return(
        <div className="col-md-4">
            <Bar data={this.state.chartData}
             width={500}
             height={200}
            
            
            options={{
            //  maintainAspectRatio:true,
            //   responsive:true
                

            }}/>
        </div>

    )
}
}
export default Chart2;
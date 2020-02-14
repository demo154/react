import React,{Component} from 'react';

class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
            // ename:'',
            // salary:'',
            // age:''
            // details:[]

        }
        this.Changehandler=this.Changehandler.bind(this);
        this.postdata=this.postdata.bind(this);

    }
    Changehandler=(event)=>{
        let a=event.target.name;
        let b = event.target.value;
        this.setState({
            [a]:b   //to display inputs side by side
        });
    }
    postdata=(event)=>{
        event.preventDefault();
        // console.log(this.state);

         fetch('http://dummy.restapiexample.com/api/v1/create',{
            method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    })
     .then(res => res.json())
    .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })


    }

    render(){
        
        return(
            <div>
                 <h3>Add the Employee details</h3>
                 <div className="card" style={{width:"30rem",marginLeft:"24rem"}}>
                <form onSubmit={this.postdata}>
               
                <label>Employee Name:-</label><br/>
                <input type="text" name="name" placeholder="Enter Name" onChange={this.Changehandler}></input><br/>
                <label>Salary:-</label><br/>
                <input  type="text" name="salary" placeholder="Enter Salary" onChange={this.Changehandler}></input><br/>
                <label>Age:-</label><br/>
                <input type="number" name="age"  placeholder="Enter Age" onChange={this.Changehandler}></input><br/>
                <input type="submit"></input>
                </form>
                </div>
            </div>

        )
    }
}
export default AddEmployee;
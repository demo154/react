import React,{useState} from 'react'
// import {useForm} from 'react-hook-form';


function UserF(){
    const [register,setState]=useState();
//   let  register=React.createRef();
 const Postdata=(event)=>{ 
    event.preventDefault();
    console.log(event);
  }
//    console.log(watch('username'))
   
 const Changehandler=(event)=>{
      let a=event.target.name;
      let b = event.target.value
    setState(
       {[a]:b}//to display inputs side by side
    )
}

    return(
        <div>
                <form onSubmit={Postdata}>
                    <label>Username:-</label><br/>
                    <input type="text" name="username" ref={register}  onChange={Changehandler} /><br/>
                    <label>Email:-</label><br/>
                    <input type="email" name="email" ref={register} onChange={Changehandler} /><br/>
                    

                    <label>Branch:-</label><select name="branch" ref={register} onChange={Changehandler} > 
                         <option></option> 
                        <option>ECE</option>
                        <option>CSE</option>
                        <option>IT</option>
                        <option>Mech</option>
                        <option>Civil</option>
                    </select><br/>
                    <label>Mobile:-</label><br/>
                    <input type="number" name="mobile" ref={register}  onChange={Changehandler} /><br/>
                    <label>Password:-<br/>
                    </label><input type="password" name="password" ref={register}  onChange={Changehandler} /><br/>
                    <input type="submit" value="submit"/>
                       
                </form>
                
                <center><table border="1">
                    <thead>
                        <tr >
                            <td>UserName</td>
                            <td>Email</td>
                            <td>Branch</td>
                            <td>Mobile</td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td id="uname"></td>
                            <td id="email"></td>
                            <td id="branch"></td>
                            <td id="mobile"></td>
                        </tr>
                    </tbody>
                </table></center>

            </div>
    )

}
export default UserF;
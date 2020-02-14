import React, { useState,useEffect } from "react";
import axios from 'axios';
function FetchHooks(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/user/getAll')
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <table border="1">
           <thead>
               <tr>
               <th>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Phone Number</th>
               </tr>
           </thead>
           <tbody>
          
           
               {
                  ( posts.length>0) ? posts.map(pos=>{
                    return (
                        
                      
                        <tr key={pos._id } >

                             <td> {pos._id}</td> 
                            <td>{pos.first_name}</td>
                            <td>{pos.last_name}</td>
                            <td>{pos.gender}</td>
                            <td>{pos.email}</td>
                            <td>{pos.phone_no}</td>
                            
                            
                         </tr>
                         
                         )
                        }): <tr><td colSpan="5">Loading...</td></tr> 

                    
               }
           </tbody>
           </table>
        </div>

    )

}
export default FetchHooks;
import React, { useState } from 'react'
import User from './User';


export function Allusers() {

// var users=[];
const [user,setUser]=useState([]);
const [showSpinner,setShowSpinner]=useState(false);

const getData=async()=>
{
    setShowSpinner(true);
    var res=await fetchUrl("https://reqres.in/api/users?page=1");
    
    setUser(pre=>[...res.data]);
    // export {users};
}

async function fetchUrl(url)
{
    var res=await fetch(url);
    
    var res=await res.json();
    

    return res;
}




    return (
        <>
        
        <header class="navbar">
        <div class="nav-data">
            <div className="brand">
                {/* <img src="https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview.png" /> */}
                {/* <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210609101834/GC-LIve-Icon-1.png" /> */}
                <h2>LetsGrowMore</h2>
            </div>
            {/* <h1 class="brand">LetsGrowMore</h1> */}
            {/* <button class="getuser">Get Users</button> */}
        </div>
    </header>
      

        
        {user && user.length>0 ?

        <div className="users">
        {/* <h2>Team</h2> */}
        { user.map(user=>
        {
         
        return (
         <User key={user.id} avatar={user.avatar} name={user.first_name+" "+user.last_name} email={user.email} about={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat"} />
        )
        
        }) } </div>:
        (<>
        <h4 className="middle" style={{marginTop:"16rem",width:"fit-content"}} >Click Here To Get All Users</h4>
        <button onClick={()=>getData()} className="middle getuser"> Get User</button>
        {showSpinner ? 
        
            <div class="spinner-border loader middle" style={{marginTop:"25rem"}} role="status">
        <span class="sr-only"></span>
      </div>
        
        
        
         :null}
        
        </>)
        
        
         }

        </>
    )
}

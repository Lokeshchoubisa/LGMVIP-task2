import React from 'react'

export default function User(props) {

    const {email,name,avatar}=props;
    console.log(email)

    return (
        
       
        <div className="user-profile">
            <div className="border">
            <div class="avatar">
                <img src={avatar} />
            </div>
        </div>
            
            <div class="user-data">
                <h4>{name}</h4>

                <h6 class="blur">About me</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat.</p>
                <h6 class="blur">Email</h6>
                <p>{email}</p>
            </div>
            
            
        </div>
      
        
    )
}

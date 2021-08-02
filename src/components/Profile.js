import React from 'react';
import '../App.css';

const Profile = ({avatar}) =>{

    return (
        <div className="profile"> 
            <img src={avatar} alt="Avatar"></img>
        </div>
    )
}

export default Profile;
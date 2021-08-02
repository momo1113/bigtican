import React from 'react';
import Profile from '../components/Profile';
import InfoDetail from '../components/InfoDetail';
import '../App.css';

const Card = ({info}) =>{
    return (
        <div className="card">
           <Profile avatar={info.avatar} />
           <InfoDetail info={info}/>
        </div>
    );
}

export default Card;
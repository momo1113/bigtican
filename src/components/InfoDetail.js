import React, {useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faAddressCard,faGlobe, faPhone, faArchway } from '@fortawesome/free-solid-svg-icons';

const InfoDetail = ({info}) =>{

    const [name, setName] = useState(info.firstName + " " + info.lastName);
    const [email,setEmail] = useState(info.email);
    const [address, setAddress] = useState(info.address);
    const [url,setUrl] = useState(info.url);
    const [phone,setPhone] = useState(info.phone);
    const [company,setCompany] = useState(info.company);

    return (
        <div className="infoDetail">
            
             <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className="name"/> 
           
        <div className="icon_info">
            <FontAwesomeIcon icon={faEnvelope} /> 
            <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)} className="info email"/> 
        </div>
        <div className="icon_info">
             <FontAwesomeIcon icon={faAddressCard} /> 
            <input value={address} type="text" onChange={(e)=>setAddress(e.target.value)} className="info"/> 
        </div>
        <div className="icon_info">
           <FontAwesomeIcon icon={faPhone} />
           <input value={phone} type="text" onChange={(e)=>setPhone(e.target.value)} className="info"/>
        </div> 
        <div className="icon_info">
            <FontAwesomeIcon icon={faGlobe} />
            <input value={url} type="text" onChange={(e)=>setUrl(e.target.value)} className="info url"/> 
        </div> 
              
        <div className="icon_company">
            <FontAwesomeIcon icon={faArchway} />
            <input value={company} type="text" onChange={(e)=>setCompany(e.target.value)} className="company"/> 
        </div>        
        </div>
    )
}

export default InfoDetail;
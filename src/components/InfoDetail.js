import React, {useState} from 'react';
import '../App.css';

const InfoDetail = ({info}) =>{

    const [name, setName] = useState(info.firstName + " " + info.lastName);
    const [email,setEmail] = useState(info.email);
    const [address, setAddress] = useState(info.address);
    const [url,setUrl] = useState(info.url);
    const [phone,setPhone] = useState(info.phone);
    const [company,setCompany] = useState(info.company);

    return (
        <div className="infoDetail">
            <div>
                <input value={name} onChange={(e)=>setName(e.target.value)}/> 
            </div>
            <div>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/> 
            </div>
            <div>
                <input value={address} onChange={(e)=>setAddress(e.target.value)}/> 
            </div>
                <input value={url} onChange={(e)=>setUrl(e.target.value)}/> 
            <div>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
                <input value={company} onChange={(e)=>setCompany(e.target.value)}/> 
            </div> 
        </div>
    )
}

export default InfoDetail;
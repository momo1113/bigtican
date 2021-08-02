import React from 'react';
import Card from './components/Card';
import data from './data';
import './App.css';
import faker from 'faker';

class App extends React.Component{

        state = {
            info: data,
        }
        addNew = this.addNew.bind(this);
    
    addNew(){
       let firstName = faker.name.firstName();
       let lastName = faker.name.lastName();
       let email = faker.internet.email();
       let address =faker.address.streetAddress() + ", " + faker.address.city() + ", "+faker.address.zipCode();
       let phone = faker.phone.phoneNumber();
       let url = faker.internet.url();
       let company = faker.company.companyName();
       let avatar = faker.image.avatar();

        let obj = {
            firstName,lastName,email,address,phone,url,company,avatar
        };

        let newData = this.state.info;
        newData.unshift(obj);
        this.setState({info:newData});
    }

    render(){
        return(
            <div className="app">
                <button onClick = {this.addNew}> ADD </button>
                {this.state.info.map((person) => (<Card info ={person}/>)
            )}
            </div>
         )
    }
}

export default App;
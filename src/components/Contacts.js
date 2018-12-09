import React, {Component} from 'react';
import Contact from './Contact';
import {Consumer} from '../context';
class Contacts extends Component{
    // deleteContact = (id) => {
    //     const { contacts } = this.state;
    //     const newContacts= contacts.filter((contact)=>
    //         contact.id !== id
    //     )
    //     this.setState({
    //         contacts : newContacts
    //     })
    // }
    render() {
        return(
            <Consumer>
                {value => {
                     const {contacts} = value;
                    return (
                    <React.Fragment>
                    {contacts.map((contact)=>(
                    <Contact
                     id = {contact.id}
                     key={contact.id}
                     name={contact.name} 
                     email={contact.email}
                     phone={contact.phone}
                    /> 
                ))}
            </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;
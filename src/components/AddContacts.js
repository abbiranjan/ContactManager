import React, { Component } from 'react';
import {Consumer} from '../context';
// import uuid from 'uuid';
import TextInputGrp from './TextInputGrp';
import classnames from 'classnames';
import axios from 'axios';

class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (dispatch, e)=>{
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name==='') {
            this.setState({
                errors:{name: "Name is required"}
            });
            return;
        }
        if(email==='') {
            this.setState({
                errors: {email: "Email is required"}
            })
            return;
        }
        if(phone==='') {
            this.setState({
                errors: {phone: "Phone is required"}
            })
            return;
        }
        const newContact = {
            // id: uuid(),
            name,
            email,
            phone,
            errors: {}
        };
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        .then(res => dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        }));
        // dispatch({
        //     type: 'ADD_CONTACT',
        //     payload: newContact
        // })
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/');
    }
    render() {
        const {name, email, phone, errors} = this.state;
        return(
            <Consumer>
            {value =>{
                const {dispatch} = value;
                return(
                     <div className="card mb-3"> 
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                       <TextInputGrp
                            label= "Name"
                            name= "name"
                            id= "name"
                            value={name}
                            placeholder= "Enter Name"
                            onChange= {this.onChange}
                            error= {errors.name}
                       />
                       <TextInputGrp
                            label= "Email"
                            type="email"
                            name= "email"
                            id= "email"
                            value={email}
                            placeholder= "Enter Email"
                            onChange= {this.onChange}
                            error= {errors.email}
                       />
                       <TextInputGrp
                            label= "Phone"
                            name= "phone"
                            id= "phone"
                            value={phone}
                            placeholder= "Enter Phone"
                            onChange= {this.onChange}
                            error= {errors.phone}
                       />
                       
                        <input type="submit"
                               value="Add Contact"
                               className={classnames('btn btn-dark btn-block',
                                        {'btn-disabled': errors})}
                        />
                    </form>
                </div>
            </div>
                )
            }}
            </Consumer>
        )
    }
}
export default AddContacts;
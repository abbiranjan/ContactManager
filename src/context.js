import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state,
             contacts: state.contacts.filter(contact =>
                contact.id !==action.payload)
        };
        case 'ADD_CONTACT':
        return {
            ...state,
             contacts: [action.payload, ...state.contacts]
            //contacts: state.contacts.unshift(action.payload)
        }
        case 'UPDATE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.map((contact)=>
                contact.id===action.payload.id?(contact=action.payload):contact
            )
        }
        default:
          return state;
    }
}

export default class Provider extends Component {
   state = {
            contacts:[
                // {
                //     id:1,
                //     name: 'Alok Ranjan',
                //     email: 'abbiranjan@gmail.com',
                //     phone: '9677359004'
                // },
                // {
                //     id:2,
                //     name: 'Mina Gupta',
                //     email: 'minagupta6666@gmail.com',
                //     phone: '9431552887'
                // },
                // {
                //     id:3,
                //     name: 'Prabhat Ranjan',
                //     email: 'abbiranjan@gmail.com',
                //     phone: '99999-77778'
                // }
            ],
            dispatch: action => this.setState(state => 
                        reducer(state, action))
        };
        // componentDidMount() {
        //     axios.get('https://jsonplaceholder.typicode.com/users')
        //         .then(res => this.setState({
        //             contacts : res.data
        //         }))
        // }
        async componentDidMount() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                this.setState({contacts: res.data});
        }
        render() {
            return (
                <Context.Provider value={this.state}>
                {this.props.children}
                </Context.Provider>
            )
        }
}
export const Consumer = Context.Consumer;
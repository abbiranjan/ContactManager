import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Contact extends Component {
   state = {
     showContactInfo: false
   };
   onShowClick=()=> {
     this.setState({
       showContactInfo: !this.state.showContactInfo
     })
   }
  //  onDeleteClick = (id, dispatch) =>{
    //  this.props.deleteClickHandler();
    // dispatch({
    //   type: 'DELETE_CONTACT',
    //   payload: id 
    // })

  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({
  //       type:'DELETE_CONTACT',
  //       payload: id
  //     }));
  //  };

   onDeleteClick = async (id, dispatch) =>{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
       dispatch({
        type:'DELETE_CONTACT',
        payload: id
      });
   };

  render() {
      const {id, name, email, phone } = this.props;
      const { showContactInfo } = this.state;
    return (
      <Consumer>
      {value => {
        const {dispatch} = value;
        return (
          <div className="card card-body mb-3">
        <h4>{ name } <i onClick= {this.onShowClick} 
        className="fa fa-sort-down" style={{cursor: 'pointer'}}
        />
        <i className="fa fa-times" 
        style={{cursor: 'pointer', float: 'right', color: 'red'}}
        onClick={this.onDeleteClick.bind(this, id, dispatch)}
        />
        <Link to={`contact/edit/${id}`}>
          <i 
          className="fa fa-pencil"
          style= {{
            cursor: 'pointer',
            float: 'right',
            color: '#000',
            marginRight: '1rem'
          }}
          >
          </i>
        </Link>
        </h4>
        {showContactInfo ? <ul className="list-group">
          <li className="list-group-item">Email: {email} </li>
          <li className="list-group-item">Phone: {phone} </li>
        </ul> : null}
      </div>
        )
      }}
      </Consumer>
    )
  }
}
Contact.propTypes = {
   // name : PropTypes.string.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired
}
export default Contact;

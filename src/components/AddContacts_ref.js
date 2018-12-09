import React, { Component } from 'react';

class AddContacts extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();

    }
    onSubmit = (e)=>{
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
    }
    static defaultProps = {
        name: "Alok Ranjan",
        email: "abbiranjan@gmail.com",
        phone: "96773-59004"

    }
    render() {
        const {name, email, phone} = this.props;
        return(
            <div className="card mb-3"> 
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={name}
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={email}
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                defaultValue={phone}
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit"
                               value="Add Contact"
                               className="btn btn-dark btn-block"
                        />
                    </form>
                </div>
            </div>
        )
    }
}
export default AddContacts;
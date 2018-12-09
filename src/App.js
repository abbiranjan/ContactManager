import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts.js';
import Provider from './context';
import AddContacts from './components/AddContacts';
import About from './components/About';
import NotFound from './components/NotFound';
import Test from './components/test/Test';
import EditContact from './components/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
            <div className="App">
              <Header branding = "Contact Manager"/>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Contacts}></Route>
                    <Route exact path="/contact/add" component={AddContacts}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/test" component={Test}></Route>
                    <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                    <Route component={NotFound}></Route>
                  </Switch>  
                </div>
            </div>
        </Router>
      </Provider>    
      );
  }
}

export default App;

import React from 'react';
import './App.css';
import store from './store'
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormCreate from './components/product/FormCreate';
import Home from './components/product/Home';
import FormEdit from './components/product/FormEdit';
import Footer from './components/html/Footer';

import Login from './components/login/Login'
import PrivateRoute from './components/private-route/PrivateRoute';
import Logout from './components/login/Logout'
import Welcome from './components/html/Welcome';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Navbar className="navbar navbar-expand-sm py-1" expand="md" style={{ color: "#1B8294" }}>
              <NavbarBrand href="/">Proyecto FCO</NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink>  <Button href="/product">List Product</Button></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink><PrivateRoute path="/" component={Logout} /></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <Switch>
              <PrivateRoute path="/product" exact component={Home} />
              <PrivateRoute  path="/create" exact component={FormCreate} />
              <PrivateRoute  path="/edit" exact component={FormEdit} />
              <PrivateRoute  path="/welcome" exact component={Welcome} />
            </Switch> 
            

            <Route path="/" exact component={Login} />



            <Footer/>
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;

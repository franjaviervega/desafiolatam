import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormCreate from './components/product/FormCreate';
import Home from './components/product/Home';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Navbar className="navbar-dark bg-dark" expand="md" style={{ color: "#1B8294" }}>
              <NavbarBrand href="/">Proyecto FCO</NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/product">List Product</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Logout</NavLink>
                  </NavItem>
                  <NavItem>

                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <Switch>
              {/* exact  */}
              <Route path="/product" component={Home} />
              <Route path="/users">
                {/* <Users /> */}
              </Route>
              <Route path="/createproduct" component={Home} />
              <Route path="/create"  component={FormCreate} />
            </Switch>
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;

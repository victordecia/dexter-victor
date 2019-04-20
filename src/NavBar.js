import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';

const menuItems = ["FOODS","PEOPLE","PLACES"];

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="navbar justify-content-between sticky-top">
        <div className="container">
          <Nav.Link href="/home"><img className="logo" src="/assets/logo.png" alt="" /></Nav.Link>
          <Nav
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            {menuItems.map((item,i) =>
              <Nav.Item>
                <Nav.Link eventKey={'menu_'+i}>{item}</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </div>
      </Navbar>
    );
  }
}
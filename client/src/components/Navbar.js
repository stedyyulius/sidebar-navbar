import React, { Component } from 'react'

import '../styles/Navbar.css'

class Navbar extends Component{
  constructor(props){
  super(props)
  this.state={}
}

  render(){
    return(
      <div className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <div className="navbar-brand">E-Mas Admin</div>
                  <div className="sidebar-trigger"><i className="fa fa-bars"></i></div>
              </div>
              <ul className="nav navbar-nav navbar-right">
                  <li>
                      <a className="harga-jual harga-naik" href="#">
                          <div className="desciption-price"><i className="fa fa-arrow-up"></i>
                            100000
                          </div>
                          <div className="desciption-title">Sell Price</div>
                      </a>
                  </li>
                  <li>
                      <a className="harga-beli harga-turun" href="#">
                          <div className="desciption-price"><i className="fa fa-arrow-down"></i>
                            100000
                          </div>
                          <div className="desciption-title">Buy Price</div>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}

export default Navbar

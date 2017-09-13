import React, { Component } from 'react'

import '../styles/Sidebar.css'

const Pages = [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'ion-speedometer',
    section: 'dashboard'
},{
    name: 'Products',
    url: '/product',
    icon: 'ion-cube',
    section: 'product'
},{
    name: 'Customers',
    url: '/customer',
    icon: 'ion-person',
    section: 'customer',
    submenu: [{
      name: 'List Customers',
      url: '/customer',
      icon: 'ion-person-stalker',
      section: 'customer'
    },{
      name: 'Add Customer',
      url: '#',
      icon: 'ion-person-add',
      section: 'customer'
    },{
      name: 'Activity',
      url: '#',
      icon: 'ion-stats-bars',
      section: 'customer'
    }]
},{
    name: 'Transactions',
    url: '/transaction',
    icon: 'ion-stats-bars',
    section: 'transaction'
}];

class Sidebar extends Component{
  constructor(props){
  super(props)
  this.state={
    username  : "",
    isActive  : false,
    link      : Pages
  }
}

  render(){
    return(
      <div className="sidebar sidebar-show">
        <div className="sidebar-avatar">
          <div className="sidebar-overlay">
            <div className="sidebar-inner">
              <div className="sidebar-image">
                <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"/>
              </div>
              <div className="sidebar-name"> User: {this.state.username}</div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills nav-stacked">
          {this.state.link.map((item,index)=> {
            if (typeof item.submenu === 'undefined') {
              return (
              <li key={index}>
                <a href="">
                  {item.name}
                  <i className={item.icon}></i>
                </a>
              </li>
              )
            } else {
              return (
              <li key={index}>
                <a className="li" role="button" data-toggle="collapse" href={'#subMenu-' + index} aria-expanded="false" aria-controls={'subMenu-' + index}>
                  {item.name}
                  <i className={item.icon}></i>
                </a>
                <div className="collapse" id={'subMenu-' + index}>
                  <ul className="nav nav-pills nav-stacked">
                    {item.submenu.map((subItem, subIndex) => {
                      return (
                        <li key={index + subIndex}>
                          <a href="" className="li">
                            {subItem.name}
                            <i className={subItem.icon}></i>
                          </a>
                        </li>
                      )
                    }
                    )}
                  </ul>
                </div>
              </li>
              )
            }
          }
          )}
          <li>
            <a href="/" className="li">
               Log Out
               <i className="ion-log-out"></i>
             </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar

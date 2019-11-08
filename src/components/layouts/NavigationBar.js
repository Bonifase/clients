import React from 'react'

const NavigationBar = () => {
  return (
      <div className="navbar">
      <div className="logo">
          <h1>Party After Party</h1>
          <p>Author is Bonny</p>
      </div>
      <ul>
          <li>Hello 🇯🇲 </li>
          <span className="sm-hide">|</span>
          <li>
              logout
              <i className="fas fa-sign-out-alt"></i>
          </li>
      </ul>
      </div>
    
  )
}

export default NavigationBar

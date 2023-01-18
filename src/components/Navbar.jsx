import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Chat</div>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'

export function Nav () {
  return (
    <nav>
      <ul className='menu'>
        <li className='logo'>CreatorsNuke</li>
        <li className='item'>Home</li>
        <li className='item'>About</li>
        <li className='btn in'>Sign In</li>
        <li className='btn up'>Sign Up</li>
        <li className='toggle'><span className='bars'></span></li>
      </ul>
    </nav>
  )
}

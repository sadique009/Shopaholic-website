import React from 'react'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
       
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-XiDgB7rGUCT3KYbAdi4CKcXkb4CD9LiqQ&usqp=CAU"} alt='shopaholic logo' className='logo' />
   
        <ul className='nav-links'>
          <li>
            home&nbsp;&nbsp;&nbsp;
          </li>
          <li>
            about
          </li>
        </ul>
      </div>
    </nav>
  )
}

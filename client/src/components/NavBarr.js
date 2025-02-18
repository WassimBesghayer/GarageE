import React from 'react'
import BookReservation from './Reservation'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

function NavBarr() {
  const user = useSelector((state) => state.user.user);
  
  return (
    <div className='nav-bar'>
        <a href='/' target='_blank'><img id='logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fauto-repair-garage-logo-automotive-industry_160069-63.jpg%3Fw%3D2000&f=1&nofb=1&ipt=e559a84fd6d530597592c192608d8d1d8485320330acdea977fb362857f9f44d&ipo=images'/></a>
          
          <ul className='nav-list'>
              {/* <Link to='/services'> */} <a href='/services' target='_blank'>Services</a> {/* </Link> */}
              {/* <Link to="/booking" style={{textDecoration:"none", color:"white"}}> */} <a href='/booking' target='_blank'>Book a Reservation</a>
              <li><a href='/shop' target='_blank'>Shop</a></li>
              <li><a href='/blog' target='_blank'>Blog</a></li>
            </ul>

            <div className='user-related'>
              <ul>
                {/* <li><a href=''><FontAwesomeIcon icon="fa-regular fa-user" /></a></li> */}
             { user? <Link to="/profil"><li><a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg></a>
                </li></Link> :<li><Link to="/login">Login</Link></li>}
                <li><a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg></a>
                </li>
              </ul>
            
            </div>
    </div>
  )
}

// ReactDOM.render(element, document.body)
export default NavBarr
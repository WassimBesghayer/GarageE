import React from 'react'
import Reservation from './Reservation'
import './styling/navBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

function NavBarr() {
  const user = useSelector((state) => state.user.user);
  
  return (
    <div className='nav-bar'>
        <a href='/'><img id='logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fauto-repair-garage-logo-automotive-industry_160069-63.jpg%3Fw%3D2000&f=1&nofb=1&ipt=e559a84fd6d530597592c192608d8d1d8485320330acdea977fb362857f9f44d&ipo=images'/></a>
          
          <ul className='nav-list'>
              {/* <Link to='/services'> */} {/* <a href='/services' target='_blank'>Services</a> */} {/* </Link> */}
              {/* <Link to="/booking" style={{textDecoration:"none", color:"white"}}> */} <a href='/user/booking' target='_blank'>Book a Reservation</a>
              <li><a href='/shop' target='_blank'>Shop</a></li>
              <li><a href='/blog' target='_blank'>Blog</a></li>
            </ul>


              <div id='search-panel'>
                <ul id='search-panel-list'>
                  <li id='search-bar'> <input type="text" placeholder="Looking for something ?"/> </li>
                  <li id='scope'> <a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg></a>
                  </li>
                </ul>
              </div>


            <div className='user-related'>
              <li id='shopping'><Link to="/orders">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </Link>
              </li>
              <Link to="/favorites">
              <li>
                <svg id='favorites' xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
              </li>
              </Link>
              

              <ul>
                  { user? <Link to="/profil" title="Your profil"><a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg></a></Link>

                :<li><Link to="/login" title="Sign in">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                </Link></li>}
              </ul>
            
            </div>
    </div>
  )
}

// ReactDOM.render(element, document.body)
export default NavBarr
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    const navLinkClass = ({ isActive }) => {
        return isActive ? 'sidebar__nav-link sidebar__nav-link--active' : 'sidebar__nav-link'
    }

    return (
        <div className="sidebar">
            {/* sidebar logo */}
            <NavLink to={'/'} className="sidebar__logo">
                <img src="/img/logo.svg" alt />
            </NavLink>
            {/* end sidebar logo */}
            {/* sidebar user */}
            <div className="sidebar__user">
                <div className="sidebar__user-img">
                    <img src="/img/user.svg" alt />
                </div>
                <div className="sidebar__user-title">
                    <span>Admin</span>
                    <p>John Doe</p>
                </div>
                <button className="sidebar__user-btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" /></svg>
                </button>
            </div>
            {/* end sidebar user */}
            {/* sidebar nav */}
            <ul className="sidebar__nav">
                <li className="sidebar__nav-item">
                    <NavLink to={'/admin'} end className={navLinkClass}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" /></svg> Dashboard</NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink to={'/admin/movies'} className={navLinkClass}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,2a1,1,0,0,0-1,1V5H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V5H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V19H6v2a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM6,17H4V15H6Zm0-4H4V11H6ZM6,9H4V7H6Zm10,9H8V13h8Zm0-7H8V6h8Zm4,6H18V15h2Zm0-4H18V11h2Zm0-4H18V7h2Z" /></svg> Movies</NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink to={'/admin/users'}  className={navLinkClass}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z" /></svg> Users</NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink to={'/admin/reviews'} className={navLinkClass}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z M15.8,13.6c-0.2,0.2-0.3,0.6-0.3,0.9l0.7,4.2l-3.8-2c-0.1-0.1-0.3-0.1-0.5-0.1V5.7l1.9,3.8c0.1,0.3,0.4,0.5,0.8,0.5l4.2,0.6L15.8,13.6z" /></svg> Reviews</NavLink>
                </li>
                {/* dropdown */}
                {/* <li className="sidebar__nav-item">
                    <NavLink className="sidebar__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z" /></svg> Pages</NavLink>
                    <ul className="dropdown-menu sidebar__dropdown-menu scrollbar-dropdown">
                        <li><NavLink to={'/admin/add-movie'}>Add item</NavLink></li>
                        <li><NavLink to={'/admin/edit-user'}>Edit user</NavLink></li>
                        <li><NavLink href="signin.html">Sign In</NavLink></li>
                        <li><NavLink href="signup.html">Sign Up</NavLink></li>
                        <li><NavLink href="forgot.html">Forgot password</NavLink></li>
                        <li><NavLink href="404.html">404 Page</NavLink></li>
                    </ul>
                </li> */}
                {/* end dropdown */}
            </ul>
            {/* end sidebar nav */}

        </div>
    )
}

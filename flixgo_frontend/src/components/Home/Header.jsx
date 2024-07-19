import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                {/* header logo */}
                <a href="index.html" className="header__logo">
                  <img src="/img/logo.svg" alt />
                </a>
                {/* end header logo */}
                {/* header categories */}
                <div className="header__categories">
                  <button className="header__categories-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span />
                    <span />
                  </button>
                  <div className="dropdown-menu header__dropdown-menu header__dropdown-menu--categories">
                    <ul className="header__categories-list">
                      <li><a href="catalog1.html">Films</a></li>
                      <li><a href="catalog2.html">TV Series</a></li>
                      <li><a href="catalog1.html">Anime</a></li>
                      <li><a href="catalog2.html">Cartoons</a></li>
                    </ul>
                    <ul className="header__categories-list">
                      <li><a href="catalog1.html">Catalog Grid</a></li>
                      <li><a href="catalog2.html">Catalog List</a></li>
                      <li><a href="details1.html">Details Film</a></li>
                      <li><a href="details2.html">Details TV Series</a></li>
                    </ul>
                  </div>
                </div>
                {/* end header categories */}
                {/* header nav */}
                <ul className="header__nav">
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <NavLink href="pricing.html" className="header__nav-link">Phim lẻ</NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink href="pricing.html" className="header__nav-link">TV Series</NavLink>
                  </li>
                  {/* end dropdown */}
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <NavLink className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Thể loại <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></NavLink>
                    <div className="dropdown-menu header__dropdown-menu header__dropdown-menu--categories">
                      <ul className="header__categories-list">
                        <li><a href="catalog1.html">Films</a></li>
                        <li><a href="catalog2.html">TV Series</a></li>
                        <li><a href="catalog1.html">Anime</a></li>
                        <li><a href="catalog2.html">Cartoons</a></li>
                      </ul>
                      <ul className="header__categories-list">
                        <li><a href="catalog1.html">Catalog Grid</a></li>
                        <li><a href="catalog2.html">Catalog List</a></li>
                        <li><a href="details1.html">Details Film</a></li>
                        <li><a href="details2.html">Details TV Series</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quốc gia <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a>
                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="about.html">About us</a></li>
                      <li><a href="faq.html">Help center</a></li>
                      <li><a href="profile.html">Profile</a></li>
                      <li><a href="actor.html">Actor</a></li>
                      <li><a href="contacts.html">Contacts</a></li>
                      <li><a href="privacy.html">Privacy policy</a></li>
                    </ul>
                  </li>
                  {/* end dropdown */}
                  {/* end dropdown */}
                  <li className="header__nav-item">
                    <a href="pricing.html" className="header__nav-link">Gói VIP</a>
                  </li>
                </ul>
                {/* end header nav */}
                {/* header actions */}
                <div className="header__actions">
                  <form action="#" className="header__search">
                    <input type="text" placeholder="Search" />
                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                  </form>
                  <div className="header__language">
                    <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">EN <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a>
                    <ul className="dropdown-menu header__dropdown-menu header__dropdown-menu--lang">
                      <li><a href="#">English</a></li>
                      <li><a href="#">Spanish</a></li>
                      <li><a href="#">French</a></li>
                    </ul>
                  </div>
                  <NavLink to={'/signin'} className="header__sign-in">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" /></svg>
                    <span>sign in</span>
                  </NavLink>
                </div>
                {/* end header actions */}
                {/* header menu btn */}
                <button className="header__btn" type="button">
                  <span />
                  <span />
                  <span />
                </button>
                {/* end header menu btn */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}

    </div>
  );
}

export default Header;
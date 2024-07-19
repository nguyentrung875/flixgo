import React from 'react'



export default function Header() {
  return (
    <div>
      {/* header */}
      <header className="header">
        <div className="header__content">
          {/* header logo */}
          <a href="index.html" className="header__logo">
            <img src="http://localhost:5173/img/logo.svg"  alt />
          </a>
          {/* end header logo */}
          {/* header menu btn */}
          <button className="header__btn" type="button">
            <span />
            <span />
            <span />
          </button>
          {/* end header menu btn */}
        </div>
      </header>
      {/* end header */}
    </div>
  )
}
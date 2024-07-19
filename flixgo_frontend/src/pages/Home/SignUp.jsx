import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div className="sign section--bg" data-bg="img/bg/section__bg.jpg" style={{ background: 'url("img/bg/section__bg.jpg") center center / cover no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* registration form */}
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="/img/logo.svg" alt />
                  </a>
                  <div className="sign__group">
                    <input type="text" className="sign__input" placeholder="Name" />
                  </div>
                  <div className="sign__group">
                    <input type="text" className="sign__input" placeholder="Email" />
                  </div>
                  <div className="sign__group">
                    <input type="password" className="sign__input" placeholder="Password" />
                  </div>
                  <div className="sign__group sign__group--checkbox">
                    <input id="remember" name="remember" type="checkbox" defaultChecked="checked" />
                    <label htmlFor="remember">I agree to the <a href="#">Privacy Policy</a></label>
                  </div>
                  <button className="sign__btn" type="button"><span>Sign up</span></button>
                  <span className="sign__text">Already have an account? <NavLink to={'/signin'}>Sign in!</NavLink></span>
                </form>
                {/* registration form */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
  return (
    <div>
      <div className="sign section--bg" data-bg="img/bg/section__bg.jpg" style={{ background: 'url("img/bg/section__bg.jpg") center center / cover no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* authorization form */}
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="/img/logo.svg" alt />
                  </a>
                  <div className="sign__group">
                    <input type="text" className="sign__input" placeholder="Email" />
                  </div>
                  <div className="sign__group">
                    <input type="password" className="sign__input" placeholder="Password" />
                  </div>
                  <div className="sign__group sign__group--checkbox">
                    <input id="remember" name="remember" type="checkbox" defaultChecked="checked" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <button className="sign__btn" type="button"><span>Sign in</span></button>
                  <span className="sign__text">Don't have an account? <NavLink to={'/signup'}>Sign up!</NavLink></span>
                  <span className="sign__text"><NavLink to={'/forgot'}>Forgot password?</NavLink></span>
                </form>
                {/* end authorization form */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

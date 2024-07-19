import React from 'react'

export default function ForgotPassword() {
  return (
    <div>
      <div className="sign section--bg" data-bg="/img/section/section.jpg">
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
                  <div className="sign__group sign__group--checkbox">
                    <input id="remember" name="remember" type="checkbox" defaultChecked="checked" />
                    <label htmlFor="remember">I agree to the <a href="#">Privacy Policy</a></label>
                  </div>
                  <button className="sign__btn" type="button"><span>Recover</span></button>
                  <span className="sign__text">We will send a password to your Email</span>
                </form>
                {/* end authorization form */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>)
}
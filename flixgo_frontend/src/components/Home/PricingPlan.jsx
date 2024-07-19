import React from 'react'

export default function PricingPlan() {
  return (
    <div>
      {/* pricing */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* price */}
            <div className="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
              <div className="plan plan--mt0">
                <h3 className="plan__title">Starter</h3>
                <span className="plan__price">Free</span>
                <ul className="plan__list">
                  <li>7 days</li>
                  <li>720p Resolution</li>
                  <li>Limited Availability</li>
                  <li>Desktop Only</li>
                  <li>Limited Support</li>
                </ul>
                <a href="signin.html" className="plan__btn"><span>Register</span></a>
              </div>
            </div>
            {/* end price */}
            {/* price */}
            <div className="col-12 col-lg-4 order-md-1 order-lg-2">
              <div className="plan plan--premium plan--mt1">
                <h3 className="plan__title">Premium</h3>
                <span className="plan__price">$19.99</span>
                <ul className="plan__list">
                  <li>1 Month</li>
                  <li>Full HD</li>
                  <li>Lifetime Availability</li>
                  <li>TV &amp; Desktop</li>
                  <li>24/7 Support</li>
                </ul>
                <button type="button" data-bs-toggle="modal" className="plan__btn" data-bs-target="#plan-modal"><span>Choose plan</span></button>
              </div>
            </div>
            {/* end price */}
            {/* price */}
            <div className="col-12 col-md-6 col-lg-4 order-md-3 order-lg-3">
              <div className="plan plan--mt2">
                <h3 className="plan__title">Cinematic</h3>
                <span className="plan__price">$39.99</span>
                <ul className="plan__list">
                  <li>2 Months</li>
                  <li>Ultra HD</li>
                  <li>Lifetime Availability</li>
                  <li>Any Device</li>
                  <li>24/7 Support</li>
                </ul>
                <button type="button" data-bs-toggle="modal" className="plan__btn" data-bs-target="#plan-modal"><span>Choose plan</span></button>
              </div>
            </div>
            {/* end price */}
          </div>
        </div>
      </div>
      {/* end pricing */}

    </div>
  )
}

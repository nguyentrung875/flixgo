import React from 'react'
import PricingPlan from '../../../components/Home/PricingPlan'

export default function SelectYourPlan() {
  return (
    <div>
      {/* pricing plans */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <h2 className="section__title">Select Your Plan</h2>
            </div>
            {/* end section title */}
          </div>
          <PricingPlan />
        </div>
      </section>
      {/* end pricing plans */}

    </div>
  )
}

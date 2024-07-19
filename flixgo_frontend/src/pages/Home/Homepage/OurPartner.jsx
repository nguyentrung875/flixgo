import React from 'react'

export default function OurPartner() {
  return (
    <div>
      {/* partners */}
      <section className="section section--bt">
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12 col-xl-10">
              <h2 className="section__title">Our Partners</h2>
              <p className="section__text">We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you. <a href="contacts.html">Become a partner</a></p>
            </div>
            {/* end section text */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="partners">
                <a href="#" className="partners__item">
                  <img src="img/partners/themeforest-light-background.png" alt />
                </a>
                <a href="#" className="partners__item">
                  <img src="img/partners/audiojungle-light-background.png" alt />
                </a>
                <a href="#" className="partners__item">
                  <img src="img/partners/codecanyon-light-background.png" alt />
                </a>
                <a href="#" className="partners__item">
                  <img src="img/partners/photodune-light-background.png" alt />
                </a>
                <a href="#" className="partners__item partners__item--prelast">
                  <img src="img/partners/activeden-light-background.png" alt />
                </a>
                <a href="#" className="partners__item partners__item--last">
                  <img src="img/partners/3docean-light-background.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end partners */}

    </div>
  )
}

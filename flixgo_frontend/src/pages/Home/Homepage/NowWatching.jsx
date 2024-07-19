import React from 'react'

export default function NowWatching() {
  return (
    <div>
      {/* now watching */}
      <section className="section section--dark">
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <h2 className="section__title section__title--carousel">Now Watching</h2>
            </div>
            {/* end section title */}
            {/* carousel */}
            <div className="col-12">
              <div className="section__carousel splide splide--content">
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
                  <button className="splide__arrow splide__arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
                </div>
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/7.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">I Dream in Another Language</a></h3>
                          <span className="item__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </span>
                          <span className="item__rate">8.4</span>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/8.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">Undercurrents</a></h3>
                          <span className="item__category">
                            <a href="#">Comedy</a>
                          </span>
                          <span className="item__rate">7.1</span>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/9.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">Tales from the Underworld</a></h3>
                          <span className="item__category">
                            <a href="#">Romance</a>
                            <a href="#">Drama</a>
                            <a href="#">Music</a>
                          </span>
                          <span className="item__rate">6.3</span>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/10.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">Savage Beauty</a></h3>
                          <span className="item__category">
                            <a href="#">Comedy</a>
                            <a href="#">Drama</a>
                          </span>
                          <span className="item__rate">7.9</span>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/11.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">The Unseen Journey</a></h3>
                          <span className="item__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </span>
                          <span className="item__rate">8.4</span>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="item item--carousel">
                        <a href="details1.html" className="item__cover">
                          <img src="img/covers/12.png" alt />
                          <span className="item__play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                          </span>
                        </a>
                        <div className="item__content">
                          <h3 className="item__title"><a href="details1.html">Endless Horizon</a></h3>
                          <span className="item__category">
                            <a href="#">Comedy</a>
                          </span>
                          <span className="item__rate">7.1</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end carousel */}
          </div>
        </div>
      </section>
      {/* end now watching */}

    </div>
  )
}

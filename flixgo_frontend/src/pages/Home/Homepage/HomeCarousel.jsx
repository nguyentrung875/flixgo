import React from 'react';

function HomeCarousel(props) {
  return (
    <div>
      {/* home */}
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero splide splide--hero">
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
                  <button className="splide__arrow splide__arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
                </div>
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="hero__slide" data-bg="img/bg/slide__bg-1.jpg">
                        <div className="hero__content">
                          <h2 className="hero__title">Savage Beauty <sub>9.8</sub></h2>
                          <p className="hero__text">A brilliant scientist discovers a way to harness the power of the ocean currents to create a new, renewable energy source. But when her groundbreaking technology falls into the wrong hands, she must race against time to stop it from being used for evil.</p>
                          <p className="hero__category">
                            <a href="#">Action</a>
                            <a href="#">Drama</a>
                            <a href="#">Comedy</a>
                          </p>
                          <div className="hero__actions">
                            <a href="details.html" className="hero__btn">
                              <span>Watch now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="hero__slide" data-bg="img/bg/slide__bg-2.jpg">
                        <div className="hero__content">
                          <h2 className="hero__title">Voices from the Other Side <sub>7.1</sub></h2>
                          <p className="hero__text">In a world where magic is outlawed and hunted, a young witch must use her powers to fight back against the corrupt authorities who seek to destroy her kind.</p>
                          <p className="hero__category">
                            <a href="#">Adventure</a>
                            <a href="#">Triler</a>
                          </p>
                          <div className="hero__actions">
                            <a href="details.html" className="hero__btn">
                              <span>Watch now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="hero__slide" data-bg="img/bg/slide__bg-3.jpg">
                        <div className="hero__content">
                          <h2 className="hero__title">Endless Horizon <sub>8.6</sub></h2>
                          <p className="hero__text">When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world.</p>
                          <p className="hero__category">
                            <a href="#">Action</a>
                            <a href="#">Drama</a>
                            <a href="#">Triler</a>
                          </p>
                          <div className="hero__actions">
                            <a href="details.html" className="hero__btn">
                              <span>Watch now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

    </div>
  );
}

export default HomeCarousel;
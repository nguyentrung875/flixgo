import React from 'react'

export default function RecentlyUpdated() {
  return (
    <div>
      {/* content */}
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* content title */}
                <h2 className="content__title">Recently Updated</h2>
                {/* end content title */}
                {/* content tabs nav */}
                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button id="1-tab" className="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">New items</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Movies</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">TV Shows</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button id="4-tab" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Anime</button>
                  </li>
                </ul>
                {/* end content tabs nav */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* content tabs */}
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabIndex={0}>
              <div className="row">
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/1.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Lost City</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 8.4</span>
                        <ul className="item__list">
                          <li>HD</li>
                          <li>16+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue, she must navigate treacherous terrain and outwit powerful enemies to save her father and uncover the secrets of the lost city.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/2.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Undercurrents</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 7.1</span>
                        <ul className="item__list">
                          <li>FHD</li>
                          <li>18+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>A brilliant scientist discovers a way to harness the power of the ocean's currents to create a new, renewable energy source. But when her groundbreaking technology falls into the wrong hands, she must race against time to stop it from being used for evil. Along the way, she must navigate complex political alliances and confront her own past to save the world from disaster.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/3.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Redemption Road</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 6.3</span>
                        <ul className="item__list">
                          <li>HD</li>
                          <li>12+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>A down-on-his-luck boxer struggles to make ends meet while raising his young son. When an old friend offers him a chance to make some quick cash by fighting in an illegal underground boxing tournament, he sees it as his last shot at redemption. But as the stakes get higher and the fights get more brutal, he must confront his own demons and find the strength to win not just for himself, but for his son.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/4.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Tales from the Underworld</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 7.9</span>
                        <ul className="item__list">
                          <li>HD</li>
                          <li>16+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>When a luxury cruise ship sets sail on its final voyage before retirement, the passengers and crew expect nothing but relaxation and indulgence. But when a mysterious illness spreads through the ship, they find themselves fighting for survival in the middle of the ocean. As tensions rise and resources dwindle, they must confront their own mortality and make impossible choices to stay alive.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/5.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Voices from the Other Side</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 8.4</span>
                        <ul className="item__list">
                          <li>HD</li>
                          <li>12+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>In a world where magic is outlawed and hunted, a young witch must use her powers to fight back against the corrupt authorities who seek to destroy her kind. With the help of a rogue witch hunter, she sets out on a dangerous mission to uncover the truth about the government's dark secrets and restore balance to the world. But as the stakes get higher and the risks get greater, she must confront her own fears and decide what she's willing to sacrifice for the greater good.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-12 col-lg-6 col-xxl-4">
                  <div className="item item--list">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/6.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Unseen World</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <div className="item__wrap">
                        <span className="item__rate"> 7.1</span>
                        <ul className="item__list">
                          <li>HD</li>
                          <li>16+</li>
                        </ul>
                      </div>
                      <div className="item__description">
                        <p>When a brilliant scientist invents a machine that can access parallel universes, she unwittingly unleashes a dangerous force that threatens to destroy everything she holds dear. With the help of her trusted colleagues, she must race against time to stop the machine from falling into the wrong hands and prevent a catastrophic chain reaction that could unravel the fabric of reality itself. But as she delves deeper into the unseen world, she realizes that the greatest danger may be closer than she ever imagined.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end item */}
              </div>
            </div>
            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabIndex={0}>
              <div className="row">
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/7.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Lost Key</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/8.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Red Sky at Night</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/9.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Forgotten Road</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/10.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Dark Horizons</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/11.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Echoes of Yesterday</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/12.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Into the Unknown</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/13.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Broken Path</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/14.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">A Light in the Darkness</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/15.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Endless Horizon</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/16.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Unseen Journey</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/17.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Reckoning</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/18.png" alt />
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
                </div>
                {/* end item */}
              </div>
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabIndex={0}>
              <div className="row">
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/1.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Midnight Sun</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/2.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Shadow Hunter</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/3.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Wild Hearts</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/4.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Dark Horizons</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/5.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Electric Dreams</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/6.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Broken Promises</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/7.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Fierce Grace</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/8.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Burning Bridges</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/9.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Forbidden Love</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/10.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Timekeeper's Daughter</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/11.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">The Enchanted Forest</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/12.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Relentless</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
              </div>
            </div>
            <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab" tabIndex={0}>
              <div className="row">
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/13.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Starlight Chronicles</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/14.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Rising Sun Academy</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/15.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Eternal Bonds</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/16.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Chronicles of the Elements</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/17.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Fantasia Journey</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/18.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Phoenix's Destiny</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/1.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Guardians of the Lost City</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/2.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Divine Intervention</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/3.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Infinite Horizon</a></h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                      <span className="item__rate">6.3</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/4.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Beyond the Stars</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                      <span className="item__rate">7.9</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/5.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Shadows of the Past</a></h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                      <span className="item__rate">8.4</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
                {/* item */}
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div className="item">
                    <a href="details1.html" className="item__cover">
                      <img src="img/covers/6.png" alt />
                      <span className="item__play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                      </span>
                    </a>
                    <div className="item__content">
                      <h3 className="item__title"><a href="details1.html">Wings of Freedom</a></h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                      <span className="item__rate">7.1</span>
                    </div>
                  </div>
                </div>
                {/* end item */}
              </div>
            </div>
          </div>
          {/* end content tabs */}
          <div className="row">
            <div className="col-12">
              <a href="catalog1.html" className="section__btn"><span>to catalog</span></a>
            </div>
          </div>
        </div>
      </section>
      {/* end content */}


    </div>
  )
}

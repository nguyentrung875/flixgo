import React from 'react'

export default function DiscoverHead() {
  return (
      <div>
        {/* content */}
        <section className="content">
          <div className="content__head">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* content title */}
                  <h2 className="content__title">Discover</h2>
                  {/* end content title */}
                  {/* content tabs nav */}
                  <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button id="1-tab" className="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Comments</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Photos</button>
                    </li>
                  </ul>
                  {/* end content tabs nav */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                {/* content tabs */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabIndex={0}>
                    <div className="row">
                      {/* comments */}
                      <div className="col-12">
                        <div className="comments">
                          <ul className="comments__list">
                            <li className="comments__item">
                              <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt />
                                <span className="comments__name">Matt Jones</span>
                                <span className="comments__time">30.08.2023, 17:53</span>
                              </div>
                              <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                              <div className="comments__actions">
                                <div className="comments__rate">
                                  <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>12</button>
                                  <button type="button">7<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></button>
                                </div>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" /></svg>Reply</button>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z" /></svg>Quote</button>
                              </div>
                            </li>
                            <li className="comments__item comments__item--answer">
                              <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt />
                                <span className="comments__name">Gene Graham</span>
                                <span className="comments__time">24.08.2023, 16:41</span>
                              </div>
                              <p className="comments__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              <div className="comments__actions">
                                <div className="comments__rate">
                                  <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>8</button>
                                  <button type="button">3<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></button>
                                </div>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" /></svg>Reply</button>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z" /></svg>Quote</button>
                              </div>
                            </li>
                            <li className="comments__item comments__item--quote">
                              <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt />
                                <span className="comments__name">Rosa Lee</span>
                                <span className="comments__time">11.08.2023, 11:11</span>
                              </div>
                              <p className="comments__text"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              <div className="comments__actions">
                                <div className="comments__rate">
                                  <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>11</button>
                                  <button type="button">1<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></button>
                                </div>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" /></svg>Reply</button>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z" /></svg>Quote</button>
                              </div>
                            </li>
                            <li className="comments__item">
                              <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt />
                                <span className="comments__name">Brian Cranston</span>
                                <span className="comments__time">07.08.2023, 14:33</span>
                              </div>
                              <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                              <div className="comments__actions">
                                <div className="comments__rate">
                                  <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>99</button>
                                  <button type="button">35<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></button>
                                </div>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" /></svg>Reply</button>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z" /></svg>Quote</button>
                              </div>
                            </li>
                            <li className="comments__item">
                              <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt />
                                <span className="comments__name">Tess Harper</span>
                                <span className="comments__time">02.08.2023, 15:24</span>
                              </div>
                              <p className="comments__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <div className="comments__actions">
                                <div className="comments__rate">
                                  <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>74</button>
                                  <button type="button">13<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></button>
                                </div>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" /></svg>Reply</button>
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z" /></svg>Quote</button>
                              </div>
                            </li>
                          </ul>
                          <form action="#" className="sign__form sign__form--comments">
                            <div className="sign__group">
                              <textarea id="text" name="text" className="sign__textarea" placeholder="Write a comment" defaultValue={""} />
                            </div>
                            <button type="button" className="sign__btn sign__btn--small"><span>Send</span></button>
                          </form>
                        </div>
                      </div>
                      {/* end comments */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabIndex={0}>
                    <div className="row">
                      {/* reviews */}
                      <div className="col-12">
                        <div className="reviews">
                          <ul className="reviews__list">
                            <li className="reviews__item">
                              <div className="reviews__autor">
                                <img className="reviews__avatar" src="img/user.svg" alt />
                                <span className="reviews__name">Best Marvel movie in my opinion</span>
                                <span className="reviews__time">24.08.2023, by Tess Harper</span>
                                <span className="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" /></svg>8.0</span>
                              </div>
                              <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </li>
                            <li className="reviews__item">
                              <div className="reviews__autor">
                                <img className="reviews__avatar" src="img/user.svg" alt />
                                <span className="reviews__name">Greate movie</span>
                                <span className="reviews__time">24.08.2023, by Gene Graham</span>
                                <span className="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" /></svg>9.0</span>
                              </div>
                              <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </li>
                            <li className="reviews__item">
                              <div className="reviews__autor">
                                <img className="reviews__avatar" src="img/user.svg" alt />
                                <span className="reviews__name">It could be better</span>
                                <span className="reviews__time">24.08.2023, by Rosa Lee</span>
                                <span className="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" /></svg>7.0</span>
                              </div>
                              <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </li>
                          </ul>
                          <form action="#" className="sign__form sign__form--comments">
                            <div className="row">
                              <div className="col-12 col-md-6">
                                <div className="sign__group">
                                  <input type="text" className="sign__input" placeholder="Title" />
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <div className="sign__group">
                                  <select className="sign__select" name="rating" id="rating">
                                    <option value={0}>Rating</option>
                                    <option value={1}>1 star</option>
                                    <option value={2}>2 stars</option>
                                    <option value={3}>3 stars</option>
                                    <option value={4}>4 stars</option>
                                    <option value={5}>5 stars</option>
                                    <option value={6}>6 stars</option>
                                    <option value={7}>7 stars</option>
                                    <option value={8}>8 stars</option>
                                    <option value={9}>9 stars</option>
                                    <option value={10}>10 stars</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="sign__group">
                                  <textarea className="sign__textarea" placeholder="Write a review" defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-12">
                                <button type="button" className="sign__btn sign__btn--small"><span>Send</span></button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* end reviews */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabIndex={0}>
                    {/* project gallery */}
                    <div className="gallery" itemScope>
                      <div className="row row--grid">
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-1.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-1.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 1</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-2.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-2.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 2</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-3.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-3.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 3</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-4.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-4.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 4</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-5.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-5.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 5</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-6.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-6.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 6</figcaption>
                        </figure>
                        {/* end gallery item */}
                      </div>
                    </div>
                    {/* end project gallery */}
                  </div>
                </div>
                {/* end content tabs */}
              </div>
              {/* sidebar */}
              <div className="col-12 col-lg-4">
                <div className="row">
                  {/* section title */}
                  <div className="col-12">
                    <h2 className="section__title section__title--sidebar">You may also like</h2>
                  </div>
                  {/* end section title */}
                  {/* item */}
                  <div className="col-6 col-sm-4 col-lg-6">
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
                  <div className="col-6 col-sm-4 col-lg-6">
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
                  <div className="col-6 col-sm-4 col-lg-6">
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
                  <div className="col-6 col-sm-4 col-lg-6">
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
                  <div className="col-6 col-sm-4 col-lg-6">
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
                  <div className="col-6 col-sm-4 col-lg-6">
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
                </div>
              </div>
              {/* end sidebar */}
            </div>
          </div>
        </section>
        {/* end content */}
      </div>

  )
}

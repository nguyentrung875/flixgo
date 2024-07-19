import React from 'react'


export default function EditUser() {
  return (
    <div>
      {/* main content */}
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            {/* main title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Edit user</h2>
              </div>
            </div>
            {/* end main title */}
            {/* profile */}
            <div className="col-12">
              <div className="profile__content">
                {/* profile user */}
                <div className="profile__user">
                  <div className="profile__avatar">
                    <img src="/img/user.svg" alt />
                  </div>
                  {/* or red */}
                  <div className="profile__meta profile__meta--green">
                    <h3>Username <span>(Approved)</span></h3>
                    <span>FlixGo ID: 23562</span>
                  </div>
                </div>
                {/* end profile user */}
                {/* profile tabs nav */}
                <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button id="1-tab" className="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Profile</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Comments</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Reviews</button>
                  </li>
                </ul>
                {/* end profile tabs nav */}
                {/* profile btns */}
                <div className="profile__actions">
                  <button type="button" data-bs-toggle="modal" className="profile__action profile__action--banned" data-bs-target="#modal-status3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg></button>
                  <button type="button" data-bs-toggle="modal" className="profile__action profile__action--delete" data-bs-target="#modal-delete3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg></button>
                </div>
                {/* end profile btns */}
              </div>
            </div>
            {/* end profile */}
            {/* content tabs */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabIndex={0}>
                <div className="col-12">
                  <div className="row">
                    {/* details form */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="sign__title">Profile details</h4>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="username">Login</label>
                              <input id="username" type="text" name="username" className="sign__input" placeholder="User 123" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="email2">Email</label>
                              <input id="email2" type="text" name="email" className="sign__input" placeholder="email@email.com" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="firstname">First Name</label>
                              <input id="firstname" type="text" name="firstname" className="sign__input" placeholder="John" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="lastname">Last Name</label>
                              <input id="lastname" type="text" name="lastname" className="sign__input" placeholder="Doe" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="subscription">Subscription</label>
                              <select className="sign__select" id="subscription">
                                <option value="Basic">Basic</option>
                                <option value="Premium">Premium</option>
                                <option value="Cinematic">Cinematic</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="rights">Rights</label>
                              <select className="sign__select" id="rights">
                                <option value="User">User</option>
                                <option value="Moderator">Moderator</option>
                                <option value="Admin">Admin</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="sign__btn sign__btn--small" type="button"><span>Save</span></button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* end details form */}
                    {/* password form */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="sign__title">Change password</h4>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="oldpass">Old Password</label>
                              <input id="oldpass" type="password" name="oldpass" className="sign__input" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="newpass">New Password</label>
                              <input id="newpass" type="password" name="newpass" className="sign__input" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="confirmpass">Confirm New Password</label>
                              <input id="confirmpass" type="password" name="confirmpass" className="sign__input" />
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="sign__btn sign__btn--small" type="button"><span>Change</span></button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* end password form */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabIndex={0}>
                {/* table */}
                <div className="col-12">
                  <div className="catalog catalog--1">
                    <table className="catalog__table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ITEM</th>
                          <th>AUTHOR</th>
                          <th>TEXT</th>
                          <th>LIKE / DISLIKE</th>
                          <th>CRAETED DATE</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="catalog__text">11</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">I Dream in Another Language</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Charlize Theron</div>
                          </td>
                          <td>
                            <div className="catalog__text">When a renowned archaeologist goes...</div>
                          </td>
                          <td>
                            <div className="catalog__text">12 / 7</div>
                          </td>
                          <td>
                            <div className="catalog__text">05.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">12</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Forgotten Road</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Tyreese Gibson</div>
                          </td>
                          <td>
                            <div className="catalog__text">A down-on-his-luck boxer struggles...</div>
                          </td>
                          <td>
                            <div className="catalog__text">67 / 22</div>
                          </td>
                          <td>
                            <div className="catalog__text">05.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">13</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Whitney</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Jordana Brewster</div>
                          </td>
                          <td>
                            <div className="catalog__text">When an old friend offers him...</div>
                          </td>
                          <td>
                            <div className="catalog__text">44 / 5</div>
                          </td>
                          <td>
                            <div className="catalog__text">04.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">14</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Red Sky at Night</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Son Gun</div>
                          </td>
                          <td>
                            <div className="catalog__text">But as the stakes get higher...</div>
                          </td>
                          <td>
                            <div className="catalog__text">20 / 6</div>
                          </td>
                          <td>
                            <div className="catalog__text">04.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">15</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Into the Unknown</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Louis Leterrier</div>
                          </td>
                          <td>
                            <div className="catalog__text">A brilliant scientist discovers...</div>
                          </td>
                          <td>
                            <div className="catalog__text">8 / 132</div>
                          </td>
                          <td>
                            <div className="catalog__text">04.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">16</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Unseen Journey</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Brian Cranston</div>
                          </td>
                          <td>
                            <div className="catalog__text">But when her groundbreaking...</div>
                          </td>
                          <td>
                            <div className="catalog__text">6 / 1</div>
                          </td>
                          <td>
                            <div className="catalog__text">03.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">17</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Savage Beauty</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Matt Jones</div>
                          </td>
                          <td>
                            <div className="catalog__text">Along the way, she must...</div>
                          </td>
                          <td>
                            <div className="catalog__text">10 / 0</div>
                          </td>
                          <td>
                            <div className="catalog__text">03.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">18</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Endless Horizon</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Rosa Lee</div>
                          </td>
                          <td>
                            <div className="catalog__text">Renewable energy source...</div>
                          </td>
                          <td>
                            <div className="catalog__text">13 / 14</div>
                          </td>
                          <td>
                            <div className="catalog__text">02.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">19</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Lost Key</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Tess Harper</div>
                          </td>
                          <td>
                            <div className="catalog__text">Confront her own past to save...</div>
                          </td>
                          <td>
                            <div className="catalog__text">12 / 7</div>
                          </td>
                          <td>
                            <div className="catalog__text">02.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">20</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Echoes of Yesterday</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Gene Graham</div>
                          </td>
                          <td>
                            <div className="catalog__text">Her father and uncover the secrets...</div>
                          </td>
                          <td>
                            <div className="catalog__text">67 / 22</div>
                          </td>
                          <td>
                            <div className="catalog__text">01.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end table */}
                {/* paginator */}
                <div className="col-12">
                  <div className="main__paginator">
                    {/* amount */}
                    <span className="main__paginator-pages">Showing 10 of 2356</span>
                    {/* end amount */}
                    <ul className="main__paginator-list">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg>
                          <span>Prev</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Next</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg>
                        </a>
                      </li>
                    </ul>
                    <ul className="paginator">
                      <li className="paginator__item paginator__item--prev">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg></a>
                      </li>
                      <li className="paginator__item"><a href="#">1</a></li>
                      <li className="paginator__item paginator__item--active"><a href="#">2</a></li>
                      <li className="paginator__item"><a href="#">3</a></li>
                      <li className="paginator__item"><a href="#">4</a></li>
                      <li className="paginator__item"><span>...</span></li>
                      <li className="paginator__item"><a href="#">29</a></li>
                      <li className="paginator__item"><a href="#">30</a></li>
                      <li className="paginator__item paginator__item--next">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" /></svg></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end paginator */}
              </div>
              <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabIndex={0}>
                {/* table */}
                <div className="col-12">
                  <div className="catalog catalog--2">
                    <table className="catalog__table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ITEM</th>
                          <th>AUTHOR</th>
                          <th>TEXT</th>
                          <th>RATING</th>
                          <th>LIKE / DISLIKE</th>
                          <th>CRAETED DATE</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="catalog__text">11</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">I Dream in Another Language</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Gene Graham</div>
                          </td>
                          <td>
                            <div className="catalog__text">Her father and uncover the secrets...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">7.9</div>
                          </td>
                          <td>
                            <div className="catalog__text">12 / 7</div>
                          </td>
                          <td>
                            <div className="catalog__text">06.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">12</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Forgotten Road</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Tess Harper</div>
                          </td>
                          <td>
                            <div className="catalog__text">Confront her own past to save...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">8.6</div>
                          </td>
                          <td>
                            <div className="catalog__text">67 / 22</div>
                          </td>
                          <td>
                            <div className="catalog__text">06.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">13</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Whitney</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Rosa Lee</div>
                          </td>
                          <td>
                            <div className="catalog__text">Renewable energy source...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">6.0</div>
                          </td>
                          <td>
                            <div className="catalog__text">44 / 5</div>
                          </td>
                          <td>
                            <div className="catalog__text">05.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">14</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Red Sky at Night</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Matt Jones</div>
                          </td>
                          <td>
                            <div className="catalog__text">Along the way, she must...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">9.1</div>
                          </td>
                          <td>
                            <div className="catalog__text">20 / 6</div>
                          </td>
                          <td>
                            <div className="catalog__text">05.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">15</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Into the Unknown</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Brian Cranston</div>
                          </td>
                          <td>
                            <div className="catalog__text">But when her groundbreaking...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">5.5</div>
                          </td>
                          <td>
                            <div className="catalog__text">8 / 132</div>
                          </td>
                          <td>
                            <div className="catalog__text">05.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">16</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Unseen Journey</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Louis Leterrier</div>
                          </td>
                          <td>
                            <div className="catalog__text">A brilliant scientist discovers...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">7.0</div>
                          </td>
                          <td>
                            <div className="catalog__text">6 / 1</div>
                          </td>
                          <td>
                            <div className="catalog__text">04.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">17</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Savage Beauty</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Son Gun</div>
                          </td>
                          <td>
                            <div className="catalog__text">But as the stakes get higher...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">9.0</div>
                          </td>
                          <td>
                            <div className="catalog__text">10 / 0</div>
                          </td>
                          <td>
                            <div className="catalog__text">04.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">18</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Endless Horizon</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Jordana Brewster</div>
                          </td>
                          <td>
                            <div className="catalog__text">When an old friend offers him...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">6.2</div>
                          </td>
                          <td>
                            <div className="catalog__text">13 / 14</div>
                          </td>
                          <td>
                            <div className="catalog__text">03.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">19</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">The Lost Key</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Tyreese Gibson</div>
                          </td>
                          <td>
                            <div className="catalog__text">A down-on-his-luck boxer struggles...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">7.9</div>
                          </td>
                          <td>
                            <div className="catalog__text">12 / 7</div>
                          </td>
                          <td>
                            <div className="catalog__text">02.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="catalog__text">20</div>
                          </td>
                          <td>
                            <div className="catalog__text"><a href="#">Echoes of Yesterday</a></div>
                          </td>
                          <td>
                            <div className="catalog__text">Charlize Theron</div>
                          </td>
                          <td>
                            <div className="catalog__text">When a renowned archaeologist goes...</div>
                          </td>
                          <td>
                            <div className="catalog__text catalog__text--rate">8.6</div>
                          </td>
                          <td>
                            <div className="catalog__text">67 / 22</div>
                          </td>
                          <td>
                            <div className="catalog__text">02.02.2023</div>
                          </td>
                          <td>
                            <div className="catalog__btns">
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--view" data-bs-target="#modal-view2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                              </button>
                              <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end table */}
                {/* paginator */}
                <div className="col-12">
                  <div className="main__paginator">
                    {/* amount */}
                    <span className="main__paginator-pages">Showing 10 of 9071</span>
                    {/* end amount */}
                    <ul className="main__paginator-list">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg>
                          <span>Prev</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Next</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg>
                        </a>
                      </li>
                    </ul>
                    <ul className="paginator">
                      <li className="paginator__item paginator__item--prev">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg></a>
                      </li>
                      <li className="paginator__item"><a href="#">1</a></li>
                      <li className="paginator__item paginator__item--active"><a href="#">2</a></li>
                      <li className="paginator__item"><a href="#">3</a></li>
                      <li className="paginator__item"><a href="#">4</a></li>
                      <li className="paginator__item"><span>...</span></li>
                      <li className="paginator__item"><a href="#">29</a></li>
                      <li className="paginator__item"><a href="#">30</a></li>
                      <li className="paginator__item paginator__item--next">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" /></svg></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end paginator */}
              </div>
            </div>
            {/* end content tabs */}
          </div>
        </div>
      </main>
      {/* end main content */}

    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            {/* main title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Dashboard</h2>
                <NavLink to={'/admin/add-movie'} className="main__title-link"><span>add movie</span></NavLink>
              </div>
            </div>
            {/* end main title */}
          </div>
          <div className="row">
            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Unique views this month</span>
                <p>5 678</p>
                <img src="/img/graph-bar.svg" alt />
              </div>
            </div>
            {/* end stats */}
            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Items added this month</span>
                <p>172</p>
                <img src="/img/film.svg" alt />
              </div>
            </div>
            {/* end stats */}
            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>New comments</span>
                <p>2 573</p>
                <img src="/img/comments.svg" alt />
              </div>
            </div>
            {/* end stats */}
            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>New reviews</span>
                <p>1 021</p>
                <img src="/img/star-half-alt.svg" alt />
              </div>
            </div>
            {/* end stats */}
            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><img src="/img/award.svg" alt /> Top movies</h3>
                  <div className="dashbox__wrap">
                    <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" /></svg></a>
                    <NavLink className="dashbox__more" to={'/admin/movies'}>View All</NavLink>
                  </div>
                </div>
                <div className="dashbox__table-wrap dashbox__table-wrap--1">
                  <table className="dashbox__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>RATING</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">321</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">The Lost City</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">9.2</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">54</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Undercurrents</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Anime</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">9.1</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">670</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Tales from the Underworld</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">TV Show</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">9.0</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">241</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">The Unseen World</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">TV Show</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">8.9</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">22</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Redemption Road</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">8.9</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end dashbox */}
            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><img src="/img/film.svg" alt /> Latest movies</h3>
                  <div className="dashbox__wrap">
                    <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" /></svg></a>
                    <NavLink className="dashbox__more"to={'admin/movies'}>View All</NavLink>
                  </div>
                </div>
                <div className="dashbox__table-wrap dashbox__table-wrap--2">
                  <table className="dashbox__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>ITEM</th>
                        <th>CATEGORY</th>
                        <th>RATING</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">749</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">I Dream in Another Language</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">TV Series</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">7.7</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">750</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Benched</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">6.4</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">751</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Whitney</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">TV Show</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">8.1</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">752</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Blindspotting</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Anime</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">9.1</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">753</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">I Dream in Another Language</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">6.5</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end dashbox */}
            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><img src="/img/user-circle.svg" alt /> Latest users</h3>
                  <div className="dashbox__wrap">
                    <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" /></svg></a>
                    <NavLink className="dashbox__more" to={'/admin/users'}>View All</NavLink>
                  </div>
                </div>
                <div className="dashbox__table-wrap dashbox__table-wrap--3">
                  <table className="dashbox__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>FULL NAME</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">1023</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Matt Jones</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">email@email.com</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Username</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">1024</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Tess Harper</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">email@email.com</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Username</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">1025</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Brian Cranston</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">email@email.com</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Username</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">1026</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Rosa Lee</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">email@email.com</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Username</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">1027</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Gene Graham</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">email@email.com</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Username</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end dashbox */}
            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><img src="/img/star-half-alt.svg" alt /> Latest reviews</h3>
                  <div className="dashbox__wrap">
                    <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" /></svg></a>
                    <NavLink className="dashbox__more" to={'/admin/reviews'}>View All</NavLink>
                  </div>
                </div>
                <div className="dashbox__table-wrap dashbox__table-wrap--4">
                  <table className="dashbox__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>ITEM</th>
                        <th>AUTHOR</th>
                        <th>RATING</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">126</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">I Dream in Another Language</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Jackson Brown</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">7.2</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">125</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Benched</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Quang</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">6.3</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">124</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Whitney</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Brian Cranston</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">8.4</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">123</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">Blindspotting</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Ketut</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">9.0</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="dashbox__table-text">122</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text"><a href="#">I Dream in Another Language</a></div>
                        </td>
                        <td>
                          <div className="dashbox__table-text">Eliza Josceline</div>
                        </td>
                        <td>
                          <div className="dashbox__table-text dashbox__table-text--rate">7.7</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end dashbox */}
          </div>
        </div>
      </main>
    </div>)
}

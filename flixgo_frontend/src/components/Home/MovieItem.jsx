import React from 'react'

export default function MovieItem() {
  return (
    < div className="col-6 col-sm-4 col-lg-3 col-xl-2" >
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
    </div >
  )
}

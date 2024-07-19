import React from 'react';

function Filter(props) {
  return (
    <div>
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter__content">
                {/* menu btn */}
                <button className="filter__menu" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" /></svg>Filter</button>
                {/* end menu btn */}
                {/* filter desk */}
                <div className="filter__items">
                  <select className="filter__select" name="genre" id="filter__genre">
                    <option value={0}>All genres</option>
                    <option value={1}>Action/Adventure</option>
                    <option value={2}>Animals</option>
                    <option value={3}>Animation</option>
                    <option value={4}>Biography</option>
                    <option value={5}>Comedy</option>
                    <option value={6}>Cooking</option>
                    <option value={7}>Dance</option>
                    <option value={8}>Documentary</option>
                    <option value={9}>Drama</option>
                    <option value={10}>Education</option>
                    <option value={11}>Entertainment</option>
                    <option value={12}>Family</option>
                    <option value={13}>Fantasy</option>
                    <option value={14}>History</option>
                    <option value={15}>Horror</option>
                    <option value={16}>Independent</option>
                    <option value={17}>International</option>
                    <option value={18}>Kids</option>
                    <option value={19}>Medical</option>
                    <option value={20}>Military/War</option>
                    <option value={21}>Music</option>
                    <option value={22}>Mystery/Crime</option>
                    <option value={23}>Nature</option>
                    <option value={24}>Paranormal</option>
                    <option value={25}>Politics</option>
                    <option value={26}>Racing</option>
                    <option value={27}>Romance</option>
                    <option value={28}>Sci-Fi/Horror</option>
                    <option value={29}>Science</option>
                    <option value={30}>Science Fiction</option>
                    <option value={31}>Science/Nature</option>
                    <option value={32}>Spanish</option>
                    <option value={33}>Travel</option>
                    <option value={34}>Western</option>
                  </select>
                  <select className="filter__select" name="quality" id="filter__quality">
                    <option value={0}>Any quality</option>
                    <option value={1}>HD 1080</option>
                    <option value={2}>HD 720</option>
                    <option value={3}>DVD</option>
                    <option value={4}>TS</option>
                  </select>
                  <select className="filter__select" name="rate" id="filter__rate">
                    <option value={0}>Any rating</option>
                    <option value={1}>from 3.0</option>
                    <option value={2}>from 5.0</option>
                    <option value={3}>from 7.0</option>
                    <option value={4}>Golder Star</option>
                  </select>
                  <select className="filter__select" name="sort" id="filter__sort">
                    <option value={0}>Relevance</option>
                    <option value={1}>Newest</option>
                    <option value={2}>Oldest</option>
                  </select>
                </div>
                {/* end filter desk */}
                {/* apply btn */}
                <button className="filter__btn" type="button"><span>apply</span></button>
                {/* end apply btn */}
                {/* amount */}
                <span className="filter__amount">Showing 12 of 169</span>
                {/* end amount */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end filter */}

    </div>
  );
}

export default Filter;
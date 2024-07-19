import React from 'react';

function MobileFilter() {
  return (
    <div>
      {/* mobile filter */}
      <div className="mfilter">
        <div className="mfilter__head">
          <h6 className="mfilter__title">Filter</h6>
          <button className="mfilter__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>
        </div>
        <div className="mfilter__select-wrap">
          <div className="sign__group">
            <select className="filter__select" name="mgenre" id="mfilter__genre">
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
          </div>
          <div className="sign__group">
            <select className="filter__select" name="mquality" id="mfilter__quality">
              <option value={0}>Any quality</option>
              <option value={1}>HD 1080</option>
              <option value={2}>HD 720</option>
              <option value={3}>DVD</option>
              <option value={4}>TS</option>
            </select>
          </div>
          <div className="sign__group">
            <select className="filter__select" name="mrate" id="mfilter__rate">
              <option value={0}>Any rating</option>
              <option value={1}>from 3.0</option>
              <option value={2}>from 5.0</option>
              <option value={3}>from 7.0</option>
              <option value={4}>Golder Star</option>
            </select>
          </div>
          <div className="sign__group">
            <select className="filter__select" name="msort" id="mfilter__sort">
              <option value={0}>Relevance</option>
              <option value={1}>Newest</option>
              <option value={2}>Oldest</option>
            </select>
          </div>
        </div>
        <button className="mfilter__apply" type="button"><span>Apply</span></button>
      </div>
      {/* end mobile filter */}

    </div>
  );
}

export default MobileFilter;
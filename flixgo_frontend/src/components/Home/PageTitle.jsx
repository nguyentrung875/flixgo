import React from 'react';

function PageTitle() {
  return (
    <div>
      {/* page title */}
      <section className="section section--first section--bg" data-bg="img/bg/section__bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__wrap">
                {/* section title */}
                <h1 className="section__title section__title--head">Catalog Grid</h1>
                {/* end section title */}
                {/* breadcrumbs */}
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item"><a href="index.html">Home</a></li>
                  <li className="breadcrumbs__item breadcrumbs__item--active">Catalog grid</li>
                </ul>
                {/* end breadcrumbs */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

    </div>
  );
}

export default PageTitle;
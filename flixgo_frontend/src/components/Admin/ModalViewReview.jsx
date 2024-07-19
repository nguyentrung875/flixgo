import React from 'react';

function ModalViewReview(props) {
  return (
    <div>
      {/* view modal */}
      <div className="modal fade" id="modal-view2" tabIndex={-1} aria-labelledby="modal-view2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal__content modal__content--view">
              <div className="reviews__autor">
                <img className="reviews__avatar" src="img/user.svg" alt />
                <span className="reviews__name">Best Marvel movie in my opinion</span>
                <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>
                <span className="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" /></svg>8.4</span>
              </div>
              <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
      </div>
      {/* end view modal */}

    </div>
  );
}

export default ModalViewReview;
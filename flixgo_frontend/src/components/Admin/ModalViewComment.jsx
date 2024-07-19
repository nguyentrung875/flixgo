import React from 'react';

function ModalViewComment(props) {
  return (
    <div>
      {/* view modal */}
      <div className="modal fade" id="modal-view" tabIndex={-1} aria-labelledby="modal-view" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal__content modal__content--view">
              <div className="comments__autor">
                <img className="comments__avatar" src="img/user.svg" alt />
                <span className="comments__name">John Doe</span>
                <span className="comments__time">30.08.2023, 17:53</span>
              </div>
              <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <div className="comments__actions">
                <div className="comments__rate">
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" /></svg>12</span>
                  <span>7<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" /></svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end view modal */}

    </div>
  );
}

export default ModalViewComment;
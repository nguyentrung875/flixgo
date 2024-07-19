import React from 'react'

export default function ModalChangStatus() {
  return (
    <div className="modal fade" id="modal-status" tabIndex={-1} aria-labelledby="modal-status" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <form action="#" className="modal__form">
              <h4 className="modal__title">Status change</h4>
              <p className="modal__text">Are you sure about immediately change status?</p>
              <div className="modal__btns">
                <button className="modal__btn modal__btn--apply" type="button"><span>Apply</span></button>
                <button className="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal" aria-label="Close"><span>Dismiss</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

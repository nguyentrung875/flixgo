import React from 'react'

export default function ModalDeleteMovie() {
    return (
        <div>
            <div className="modal fade" id="modal-delete" tabIndex={-1} aria-labelledby="modal-delete" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal__content">
                            <form action="#" className="modal__form">
                                <h4 className="modal__title">Item delete</h4>
                                <p className="modal__text">Are you sure to permanently delete this item?</p>
                                <div className="modal__btns">
                                    <button className="modal__btn modal__btn--apply" type="button"><span>Delete</span></button>
                                    <button className="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal" aria-label="Close"><span>Dismiss</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

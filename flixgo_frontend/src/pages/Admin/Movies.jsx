import ModalChangStatus from "../../components/Admin/ModalChangeStatus";
import ModalDeleteMovie from "../../components/Admin/ModalDeleteMovie";

export default function Movies() {
    return (
        <div>
            {/* main content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        {/* main title */}
                        <div className="col-12">
                            <div className="main__title">
                                <h2>Catalog</h2>
                                <span className="main__title-stat">14,452 Total</span>
                                <div className="main__title-wrap">
                                    <select className="filter__select" name="sort" id="filter__sort">
                                        <option value={0}>Date created</option>
                                        <option value={1}>Rating</option>
                                        <option value={2}>Views</option>
                                    </select>
                                    {/* search */}
                                    <form action="#" className="main__title-form">
                                        <input type="text" placeholder="Find movie / tv series.." />
                                        <button type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
                                        </button>
                                    </form>
                                    {/* end search */}
                                </div>
                            </div>
                        </div>
                        {/* end main title */}
                        {/* items */}
                        <div className="col-12">
                            <div className="catalog catalog--1">
                                <table className="catalog__table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>TITLE</th>
                                            <th>RATING</th>
                                            <th>CATEGORY</th>
                                            <th>VIEWS</th>
                                            <th>STATUS</th>
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
                                                <div className="catalog__text catalog__text--rate">7.9</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">1392</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">05.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">7.1</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">1093</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--red">Hidden</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">05.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">6.3</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">TV Series</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">723</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">04.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">8.4</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">TV Series</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">2457</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">04.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr><tr>
                                            <td>
                                                <div className="catalog__text">15</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text"><a href="#">Into the Unknown</a></div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--rate">7.9</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">5092</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">03.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">7.1</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">TV Series</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">2713</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--red">Hidden</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">03.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">6.3</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Cartoon</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">901</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">03.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">8.4</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">8430</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">02.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr><tr>
                                            <td>
                                                <div className="catalog__text">19</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text"><a href="#">The Lost Key</a></div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--rate">7.9</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">818</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--green">Visible</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">02.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                                                <div className="catalog__text catalog__text--rate">7.1</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">Anime</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">1046</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text catalog__text--red">Hidden</div>
                                            </td>
                                            <td>
                                                <div className="catalog__text">01.02.2023</div>
                                            </td>
                                            <td>
                                                <div className="catalog__btns">
                                                    <button type="button" data-bs-toggle="modal" className="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                                                    </button>
                                                    <a href="#" className="catalog__btn catalog__btn--view">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg>
                                                    </a>
                                                    <a href="add-item.html" className="catalog__btn catalog__btn--edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg>
                                                    </a>
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
                        {/* end items */}
                        {/* paginator */}
                        <div className="col-12">
                            <div className="main__paginator">
                                {/* amount */}
                                <span className="main__paginator-pages">Showing 10 of 169</span>
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
            </main>
            {/* end main content */}

            <div>
                {/* status modal */}
                <ModalChangStatus/>
                {/* end status modal */}
                {/* delete modal */}
                <ModalDeleteMovie/>
                {/* end delete modal */}
            </div>

        </div>
    )
}

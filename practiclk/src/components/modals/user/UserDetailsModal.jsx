import React from 'react';
import './UserDetailsModal.css';

import CloseButton from '../../../assets/icons/close-circle.svg';
import Book from '../../../assets/icons/clipboard-text.svg';
import TextAlignLeft from '../../../assets/icons/textalign-left.svg';
import Cake from '../../../assets/icons/cake.svg';
import EditIcon from '../../../assets/icons/edit-2.svg';

export default function UserDetailsModal({ isOpen, onClose, userData }) {
    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим.

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-row">
                    <h2 className="modal-title">Подробная информация</h2>
                    <button className="modal-close" onClick={onClose}>
                        <img src={CloseButton}/>
                    </button>
                </div>
                <div className="modal-content">
                    <div className="modal-row">
                        <img src={Book} className="modal-icon"/>
                        <span className="modal-text">{userData.name}</span>
                    </div>
                    <div className="modal-row">
                        <img src={TextAlignLeft} className="modal-icon"/>
                        <div className="modal-row">
                            <p className="modal-text">{userData.description}</p>
                            <button className="edit-button">
                                <img src={EditIcon} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="modal-row-">
                        <img src={Cake} className="modal-icon"/>
                        <span className="modal-text">{userData.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './ChannelDetailsModal.css';

import CloseButton from '/ic/close-circle.svg';
import Book from '/ic/clipboard-text.svg';
import TextAlignLeft from '/icons/textalign-left.svg';
import Calendar from '/icon/calendar.svg';
import User from '/ic/user.svg';
import ShortName from "/icon/adog.svg"
import Subject from "/ic/textalign-justifycenter.svg"
import EditIcon from "/ic/edit-2.svg";

export default function ChannelDetailsModal({ isOpen, onClose, channelData }) {
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
                        <span className="modal-text">{channelData.name}</span>
                    </div>
                    <div className="modal-row">
                        <img src={TextAlignLeft} className="modal-icon"/>
                        <div className="modal-row">
                            <p className="modal-text">{channelData.description}</p>
                            <button className="edit-button">
                                <img src={EditIcon} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="modal-row">
                        <div className="modal-column">
                            <h2 className="modal-title">Тематика</h2>
                            <div className="modal-row">
                                <img src={Subject} className="modal-icon"/>
                                <span className="modal-text">{channelData.subject}</span>
                            </div>
                        </div>
                        <div className="modal-column">
                            <h2 className="modal-title">Количество подписчиков</h2>
                            <div className="modal-row">
                                <img src={User} className="modal-icon"/>
                                <span className="modal-text">{channelData.user}</span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-row">
                        <div className="modal-column">
                            <h2 className="modal-title">Дата создания</h2>
                            <div className="modal-row">
                                <img src={Calendar} className="modal-icon"/>
                                <span className="modal-text">{channelData.date}</span>
                            </div>
                        </div>
                        <div className="modal-column">
                            <h2 className="modal-title">Короткое имя</h2>
                            <div className="modal-row">
                                <img src={ShortName} className="modal-icon"/>
                                <span className="modal-text">{channelData.shortname}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

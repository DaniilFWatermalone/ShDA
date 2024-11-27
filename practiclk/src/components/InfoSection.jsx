// components/InfoSection.js
import React, { useState } from 'react';

// Компонент Modal
const Modal = ({ isOpen, onClose, title, content, date }) => {
  if (!isOpen) return null; // Если модальное окно закрыто, ничего не показываем

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="max-w-[30%] bg-customGray p-6 rounded-lg w-1/2 space-y-4 shadow-lg relative"> 
        {/* Размытие фона через backdrop-blur-lg */}
        
        {/* Кнопка закрытия в правом верхнем углу */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <a className="w-6 h-6">AAAA</a>
        </button>

        {/* Заголовок модального окна */}
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        
        {/* Основной контент */}
        <p className="text-gray-300">{content}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

// Компонент InfoSection
const InfoSection = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const handleOpenModal = () => {
    setIsModalOpen(true); // Открыть модальное окно
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрыть модальное окно
  };

  return (
    <div className="bg-customGray text-white p-4 rounded-lg shadow-lg">
      {/* Заголовок с статусом */}
      <div className="text-gray-400 text-sm mb-4">{title}</div>

      {/* Кликабельная ссылка с иконкой для открытия модального окна */}
      <a
        href="#"
        onClick={handleOpenModal}
        className="text-white text-sm flex items-center space-x-2 hover:text-blue-500"
      >
        <span>Подробнее</span>
        
      </a>

      {/* Включаем модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Иван Шукчин"
        content="Разнообразный и богатый опыт говорит нам, что консультация с широким активом создает необходимость включения в производственный план."
        date="11 января 2022 года"
      />
    </div>
  );
};

export default InfoSection;

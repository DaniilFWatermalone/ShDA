import React, { useState } from 'react';

// Компонент Modal
const Modal = ({ isOpen, onClose, title, content, date }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="max-w-md bg-customGray p-6 rounded-lg w-[90%] md:w-[40%] space-y-4 shadow-lg relative">
        {/* Надпись "Подробная информация" */}
        <div className="text-gray-300 text-sm font-medium mb-2">Подробная информация</div>

        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Заголовок */}
        <h2 className="text-gray-300 text-sm font-normal">{title}</h2>

        {/* Основной текст */}
        <p className="text-gray-300 text-sm">{content}</p>

        {/* Дата */}
        <p className="text-gray-300 text-sm">{date}</p>
      </div>
    </div>
  );
};

// Компонент InfoSection
const InfoSection = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-customGray text-white p-4 rounded-lg shadow-lg">
      {/* Заголовок */}
      <div className="text-gray-400 text-sm mb-4">{title}</div>

      {/* Кликабельная ссылка */}
      <a
        href="#"
        onClick={handleOpenModal}
        className="text-white text-sm flex items-center space-x-2 hover:text-gray-300"
      >
        <span>Подробнее</span>
      </a>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Иван Шукчин"
        content="Разнообразный и богатый опыт говорит нам, что консультация с широким активом создает необходимость включения в производственный план."
        date="11 января 2002 года"
      />
    </div>
  );
};

export default InfoSection;

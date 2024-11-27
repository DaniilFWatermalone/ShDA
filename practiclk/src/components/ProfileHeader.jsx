import React, { useState } from 'react';

// Компонент Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      {/* Контейнер модального окна */}
      <div className="bg-customGray p-6 rounded-lg w-[360px] space-y-4 shadow-lg relative">
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
        <h2 className="text-white text-center text-sm font-normal">Что у вас нового?</h2>

        {/* Поле для ввода текста */}
        <textarea
          className="w-full h-24 bg-[#292929] text-[#6F6F6F] text-sm p-3 rounded-lg resize-none border-none focus:outline-none"
          placeholder="Сообщение"
        ></textarea>

        {/* Социальные сети */}
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-[#292929] text-[#6F6F6F] text-sm px-4 py-3 rounded-lg">
            <span>ВКонтакте</span>
            <button className="text-[#6F6F6F] hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H6"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#292929] text-[#6F6F6F] text-sm px-4 py-3 rounded-lg">
            <span>Telegram</span>
            <button className="text-[#6F6F6F] hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Кнопки для выбора файлов */}
        <div className="flex justify-start space-x-4">
          <button className="flex items-center bg-[#292929] text-[#6F6F6F] text-sm px-4 py-2 rounded-lg hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25m0 0V9m0-3.75h-3m3 3.75h3m0 0v3m0-3.75H15.75m-6 3h3m-3-3.75v3m3-3V9m0 0h3m-3-3.75H9m6 3h3m0 0V9m0-3H9"
              />
            </svg>
            Фото
          </button>
          <button className="flex items-center bg-[#292929] text-[#6F6F6F] text-sm px-4 py-2 rounded-lg hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h7.5M9 9v6m0 3v-3m6-6v6m0 3v-3"
              />
            </svg>
            Файл
          </button>
        </div>

        {/* Кнопка публикации */}
        <button
          onClick={onClose}
          className="w-full bg-[#E53935] text-white py-3 rounded-lg hover:bg-[#d43535] transition-colors"
        >
          Опубликовать
        </button>
      </div>
    </div>
  );
};

// Компонент ProfileHeader
const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const handleOpenModal = () => {
    setIsModalOpen(true); // Открыть модальное окно
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрыть модальное окно
  };

  return (
    <div className="bg-customGray p-6 rounded-lg relative mb-4">
      {/* Фон профиля */}
      <div
        className="h-64 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: 'url(/Group%208859%201.png)', // Ссылка на фон
        }}
      ></div>

      <div className="flex items-center mt-4">
        {/* Иконка профиля */}
        <div
          className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-customGray -mt-16"
          style={{
            backgroundImage: 'url(/unsplash_WMD64tMfc4k.png)', // Ссылка на аватар
          }}
        ></div>

        {/* Имя пользователя */}
        <div className="ml-4 text-white font-bold text-2xl">Arsew</div>

        {/* Кнопка подписки */}
        <button
          onClick={handleOpenModal}
          className="ml-auto bg-red-500 text-white py-4 px-16 rounded flex items-center space-x-2 hover:bg-red-600">
          <img
            src="/icon/add-square.svg"
            alt="Add Icon"
            className="h-5 w-5"
          />
          <span>Создать пост</span>
        </button>
      </div>

      {/* Включаем модальное окно */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProfileHeader;

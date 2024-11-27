import React, { useState } from 'react';

// Компонент Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Если модальное окно закрыто, ничего не показываем

  return (
    <div className="bg-opacity-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-customGray p-6 rounded-lg w-72 space-y-6 shadow-lg relative">
        {/* Заголовок модального окна */}
        <h2 className="text-xl font-semibold text-white text-center mb-4">Что нового?</h2>

        {/* Поле для ввода сообщения */}
        <div className="bg-customGray border-2 border-gray-300 p-4 rounded-lg text-gray-500">
          <textarea
            className="w-full h-24 bg-customGray text-gray-500 border-none resize-none focus:outline-none"
            placeholder="Сообщение"
          />
        </div>

        {/* Блок для ссылок на соцсети */}
        <div className="bg-customGray border-2 border-gray-300 p-4 rounded-lg text-gray-500 space-y-2">
          <div className="flex items-center space-x-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Блок для загрузки фото и файла */}
        <div className="flex mt-4">
          <button className="bg-gray-700 mr-4 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            Фото
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            Файл
          </button>
        </div>

        {/* Кнопка для публикации */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-12 py-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Опубликовать
          </button>
        </div>

        {/* Кнопка для закрытия модального окна */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          X
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

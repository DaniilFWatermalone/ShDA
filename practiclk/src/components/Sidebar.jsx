import React from 'react';

const Sidebar = () => (
    <div className="fixed top-16 left-0 bg-customGray w-20 h-full z-10 flex flex-col items-center">
        {/* Линия разделения сверху */}
        <div className="w-full border-t border-gray-600"></div>

        {/* Иконка "Дом" */}
        <div className="cursor-pointer mt-6">
            <img src="/icon/home-2.svg" alt="Дом" className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>

        {/* Иконка "Пользователь" */}
        <div className="cursor-pointer mt-6">
            <img src="/icon/messages.svg" alt="Пользователь" className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>

        {/* Иконка "Настройки " */}
        <div className="cursor-pointer mt-6">
            <img src="/icon/notification.svg" alt="Настройки" className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>

        {/* Иконка "Контакты" */}
        <div className="cursor-pointer mt-6">
            <img src="/icon/people.svg" alt="Контакты" className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>

        {/* Линия разделения снизу ghbdtn*/}
        <div className="mt-4 w-2/4 border-t border-gray-600"></div>

        {/* Иконка "Пользователь" (последняя) */}
        <div className="cursor-pointer mt-6">
            <img src="/icon/setting-2.svg" alt="Пользователь" className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>
    </div>
);

export default Sidebar;

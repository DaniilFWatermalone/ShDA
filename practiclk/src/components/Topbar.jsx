// components/Topbar.js
import React from 'react';

const Topbar = () => (
    <div className="fixed w-full h-16 bg-customGray flex items-center px-6 z-10">
        {/* Логотип вместо текста */}
        <div className="flex items-center">
            <img 
                src="/Логотип.svg" // Укажите путь к вашему SVG-файлу
                alt="Marlo Logo" 
                className="h-8" // Устанавливаем высоту логотипа
            />
        </div>
    </div>
);

export default Topbar;

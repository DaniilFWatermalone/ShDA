import React, { useState } from 'react';

const PostCard = () => {
    const [liked, setLiked] = useState(false); // Состояние для лайка
    const [likeCount, setLikeCount] = useState(12); // Количество лайков

    const toggleLike = () => {
        setLiked(!liked); // Меняем состояние лайка
        setLikeCount(likeCount + (liked ? -1 : 1)); // Обновляем количество лайков
    };

    return (
        <div className="bg-customGray text-white p-4 rounded-lg relative shadow-md max-w-lg mx-auto overflow-hidden">
            {/* Верхняя часть карточки: информация о пользователе */}
            <div className="flex items-center mb-4">
                <img
                    src="/post/unsplash_WMD64tMfc4k.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <div className="font-semibold text-sm">Damian Derc</div>
                    <div className="text-xs text-gray-400">Обновил фото сегодня в 12:10</div>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-400 hover:text-gray-200">
                        <img
                            src="/icon/more-horizontal.svg"
                            alt="More Options Icon"
                            className="h-5 w-5"
                        />
                    </button>
                </div>
            </div>

            {/* Основное изображение поста */}
            <div className="-mx-4 mb-4">
                <img
                    src="/post/unsplash_WMD64tMfc4k-1.png"
                    alt="Main Post"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Текст описания */}
            <div className="text-sm text-gray-300 mb-2">
                Именно столько дней остается до главного события нашей команды – Marlo. Это тот день, к которому мы так долго шли, делая наше приложение более удобным и инновационным именно для тебя.
            </div>
            <button className="text-white text-sm hover:underline">Показать полностью...</button>

            {/* Интерактивные элементы: лайки и комментарии */}
            <div className="flex items-center mt-4 pt-2">
                {/* Лайки */}
                <div
                    className="flex items-center space-x-2 bg-customGray px-3 py-1 rounded-full mr-4 border border-gray-600 cursor-pointer"
                    onClick={toggleLike}
                >
                    <img
                        src={liked ? "/icon/heart-1.svg" : "/icon/heart.svg"} // Заменяем иконку
                        alt="Heart Icon"
                        className={`h-5 w-5 ${liked ? "text-red-500" : "text-gray-400"}`}
                    />
                    <span className="text-sm text-gray-400">{likeCount}</span>
                </div>

                {/* Комментарии */}
                <div className="flex items-center space-x-2 bg-customGray px-3 py-1 rounded-full border border-gray-600">
                    <img
                        src="/icon/message-text.svg"
                        alt="Message Icon"
                        className="h-5 w-5"
                    />
                    <span className="text-sm text-gray-400">140</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;

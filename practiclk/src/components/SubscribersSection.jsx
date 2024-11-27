// components/FriendsSection.js
import React from 'react';

const friends = [
    { photo: '/sub/unsplash_mjRwhvqEC0U.png' },
    { photo: '/sub/unsplash_mjRwhvqEC0U-1.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs.png' },
    { photo: '/sub/unsplash_mjRwhvqEC0U-1.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs-1.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs-2.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs-3.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs-4.png' },
    { photo: '/sub/unsplash_rDEOVtE7vOs-5.png' }
];

const FriendsSection = () => (
    <div className="bg-customGray text-white p-4 rounded-lg text-center relative">
        {/* Текст с обводкой в верхнем левом углу */}
        <div className="absolute top-4 left-4 border-2 border-opacity-30 border-white px-2 py-1 rounded-md text-sm">
            Подписчики {friends.length}
        </div>

        {/* Миниатюры, слегка накладывающиеся друг на друга в ряд */}
        <div className="flex justify-center mt-12">
            {friends.map((friend, index) => (
                <img
                    key={index}
                    src={friend.photo}
                    alt={`Friend ${index + 1}`}
                    className={`w-16 h-16 rounded-full border-4 border-customGray -ml-4 ${index === 0 ? '' : ''}`}
                />
            ))}
        </div>
    </div>
);

export default FriendsSection;

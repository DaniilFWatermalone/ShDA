// components/FriendsSection.js
import React from 'react';

const friends = [
    { name: 'John', photo: '/friends/unsplash_3TLl_97HNJo-1.png' },
    { name: 'Jane', photo: '/friends/unsplash_3TLl_97HNJo-2.png' },
    { name: 'Mark', photo: '/friends/unsplash_3TLl_97HNJo-3.png' },
    { name: 'Emily', photo: '/friends/unsplash_3TLl_97HNJo-4.png' },
    { name: 'Tom', photo: '/friends/unsplash_3TLl_97HNJo-5.png' },
    { name: 'John', photo: '/friends/unsplash_3TLl_97HNJo-6.png' },
    { name: 'Jane', photo: '/friends/unsplash_3TLl_97HNJo-7.png' },
    { name: 'Mark', photo: '/friends/unsplash_3TLl_97HNJo-8.png' },
    { name: 'Emily', photo: '/friends/unsplash_3TLl_97HNJo-9.png' },
    { name: 'Tom', photo: '/friends/unsplash_3TLl_97HNJo-10.png' },
    { name: 'Sophia', photo: '/friends/unsplash_3TLl_97HNJo-11.png' },
    { name: 'Sophia', photo: '/friends/unsplash_3TLl_97HNJo.png' }
];

const FriendsSection = () => (
    <div className="bg-customGray text-white p-4 rounded-lg text-center relative">
        {/* Текст с обводкой в верхнем левом углу */}
        <div className="absolute top-4 left-4 border-2 border-opacity-30 border-white px-2 py-1 rounded-md text-sm">
            Друзья {friends.length}
        </div>

        {/* Иконки и имена друзей */}
        <div className="grid grid-cols-6 gap-4 mt-12">
            {friends.map((friend, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={friend.photo} alt={friend.name} className="w-12 h-12 rounded-full mb-2" />
                    <p className="text-sm">{friend.name}</p>
                </div>
            ))}
        </div>
    </div>
);

export default FriendsSection;

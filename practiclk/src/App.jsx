
import React from 'react';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProfileHeader from './components/ProfileHeader.jsx';
import InfoSection from './components/InfoSection.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import PostCard from './components/PostCard.jsx';
import FriendsSection from "./components/FriendsSection.jsx";
import SubscribersSection from "./components/SubscribersSection.jsx";

const App = () => (
    <div className="bg-backGtay min-h-screen text-white">
        <Topbar />
        <Sidebar />
        <div className="pl-24 pt-20 px-8 flex flex-col items-center">
            <div className="max-w-screen-lg w-full">
                <ProfileHeader />

                {/* Две колонки для блоков информации, фото, друзей и подписчиков */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Левая колонка */}
                    <div className="flex flex-col gap-4">
                        <InfoSection title="Что за лев этот тигр..." />
                        <PhotoGrid />
                    </div>

                    {/* Правая колонка */}
                    <div className="flex flex-col gap-4">
                        <FriendsSection title="FRIENDS" />
                        <SubscribersSection title="SUBSCRIBE" />
                    </div>
                </div>

                {/* Две колонки для постов */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PostCard title="POST1" />
                    <PostCard title="POST2" />
                </div>
            </div>
        </div>
    </div>
);

export default App;
// components/PhotoGrid.js
import React from 'react';

const PhotoGrid = () => (
    <div className="bg-customGray text-white p-4 rounded-lg text-center relative">
        {/* Текст с обводкой в верхнем левом углу */}
        <div className="absolute top-4 left-4 border-2 border-opacity-30 border-white px-2 py-1 rounded-md text-sm">
            Фото 6
        </div>

        {/* Фото */}
        <div className="grid grid-cols-4 gap-4 mt-12">
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k.png" alt="Фото 1" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-1.png" alt="Фото 2" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-2.png" alt="Фото 3" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-3.png" alt="Фото 4" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-4.png" alt="Фото 5" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-5.png" alt="Фото 6" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-3.png" alt="Фото 7" className="w-30% h-auto rounded-md"/>
            </div>
            <div className="col-span-1">
                <img src="/image/unsplash_WMD64tMfc4k-4.png" alt="Фото 8" className="w-30% h-auto rounded-md"/>
            </div>
        </div>
    </div>
);

export default PhotoGrid;

import React from "react";
import { Search, Home, Headphones } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative w-[300px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden p-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 p-2 rounded-md mb-4">
          <Search className="text-black" size={20} />
          <input
            type="text"
            placeholder="Search Event"
            className="ml-2 bg-transparent outline-none text-black w-full"
          />
        </div>

        {/* Special Deals */}
        <h2 className="text-lg font-bold text-black mt-4">Special Deal</h2>
        <div className="space-y-2 mt-2">
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <img src="/image/food.png" alt="Food" className="w-12 h-12 rounded-md" />
            <div>
                <p className="text-xs text-gray-400">Food</p>
              <p className="text-sm font-semibold text-black">Padang Food Festival</p>
              <p className="text-xs text-gray-600">21 January 2023 </p>
              <p className="text-xs text-gray-600">Jakarta, Indonesia</p>
              <p className="text-green-500 font-bold">$35</p>
            </div>
          </div>

          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <img src="/image/music.png" alt="Music" className="w-12 h-12 rounded-md" />
            <div>
              <p className="text-xs text-gray-400">Music</p>
              <p className="text-sm font-semibold text-black">Clouds Music Indofest</p>
              <p className="text-xs text-gray-600">21 January 2023 </p>
              <p className="text-xs text-gray-600">Jakarta, Indonesia</p>
              <p className="text-green-500 font-bold">$25</p>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-white p-2 shadow-md">
          <Home className="text-black" size={24} />
          <Headphones className="text-black" size={24} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
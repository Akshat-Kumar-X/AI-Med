import React from 'react';

const Blogcard = ({ imageLink, name, description }) => {
  return (
    <> 
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative">
        <a href="#">
            <img className="w-full h-[200px] object-cover"
                src={imageLink}
                alt="Sunset in the mountains" />
            <div
                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
            {name}</a>
        <p className="text-gray-500 text-sm">
            {description}
        </p>
      </div>
    </div>
  </>
  );
};

export default Blogcard;

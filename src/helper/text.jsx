return (
    <>
      <div class="relative py-3 sm:w-[510px] w-[430px] sm:max-w-xl mx-auto mt-5">
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl p-30 pb-10">
          <h1 className='text-3xl font-semibold text-center'>Add Blog</h1>
          <div className="container mx-auto p-8">  
        <form onSubmit={handleSubmit} className="bg-white rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Name
            </label>
            <input
              className="ppearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover">
              Cover Image
            </label>
            <label
              className="w-full flex flex-col items-center px-4 py-4 justify-center cursor-pointer hover:bg-gray-200 duration-300 bg-gray-100 text-blue rounded-lg "
            >
              <span className="mt-2 text-base leading-normal mb-1">Select a file</span>
              <input
                type="file"
                className="hidden"
                id="cover"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="description">
                Specialization
            </label>
            <textarea
              className="appearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="specialization"
              placeholder="Specialization"
              value={specialization}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="description">
                Location
            </label>
            <textarea
              className="appearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="location"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="description">
                Experience
            </label>
            <textarea
              className="appearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="experience"
              placeholder="Experience"
              type="text"
              value={experience}
              onChange={handleExperienceChange}
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Detail
            </button>
          </div>
        </form>
      </div>
  
        </div>
      </div>
      
    </>
  );
}
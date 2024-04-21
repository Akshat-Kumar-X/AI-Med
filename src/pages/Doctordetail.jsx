import { useAuth } from '../contexts/auth-provider'
import { useNavigate } from 'react-router-dom';
import { storage, ID, db } from '../helper/appwrite'
import React from 'react'
import toast from 'react-hot-toast';

export default function Doctordetail() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [specialization, setSpecialization] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [experience, setExperience] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blogDetails = {
      name,
      image,
      specialization,
      location,
      experience
    };
    try {
      const file = await storage.createFile('6622af33eda7a0698a49', ID.unique(), image);
      await db.createDocument('65f7c1fbb1ae554900c8', '66229fbc47b343a99697', ID.unique(), {
        name,
        cover: file.$id,
        specialization,
        location,
        experience
      });
      toast.success('Doctor Added Succesfully!');
      navigate('/doctorpage');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleTitleChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };


  if (!isSignedIn) {
    navigate('/')
  }
  return (
    <>
      <div class="relative py-3 sm:w-full sm:max-w-xl mx-auto mt-5">
        <div
          class="absolute hidden  md:block inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl p-5 sm:p-10">
          <h1 className='text-3xl font-semibold text-center'>Add Your Details</h1>
          <div className="container mx-auto p-4 sm:p-8">  
            <form onSubmit={handleSubmit} className="bg-white rounded">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="ppearance-none rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
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
                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="specialization">
                  Specialization
                </label>
                <textarea
                  className="ppearance-none rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
                  id="specialization"
                  placeholder="Specialization"
                  value={specialization}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="location">
                  Location
                </label>
                <textarea
                  className="ppearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
                  id="location"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="experience">
                  Experience
                </label>
                <textarea
                  className="ppearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
                  id="experience"
                  placeholder="Experience"
                  type="int"
                  value={experience}
                  onChange={handleExperienceChange}
                ></textarea>
              </div>

              <div className="flex items-center justify-center sm:justify-between">
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

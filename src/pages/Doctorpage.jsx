import React, { useState, useEffect } from 'react';
import Doctorcard from './Doctocard';
import { db, storage } from '../helper/appwrite';
import toast from 'react-hot-toast';

const Blogs = () => {
    const [nameQuery, setNameQuery] = useState('');
    const [specialtyQuery, setSpecialtyQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const result = await db.listDocuments('65f7c1fbb1ae554900c8', '66229fbc47b343a99697');
                if (result.total) {
                    const imageIds = result.documents.map(blog => blog.cover);
                    const imagePromises = imageIds.map(imageId =>
                        storage.getFileView('6622af33eda7a0698a49', imageId)
                    );

                    const images = await Promise.all(imagePromises);

                    const blogs = result.documents.map((doc, index) => ({
                        ...doc,
                        image: images[index].href // assuming images[index] now contains the resolved file object with an href property
                    }));

                    setBlogs(blogs);
                    setFilteredBlogs(blogs); // Set filteredBlogs initially to all blogs
                }
            } catch (err) {
                toast.error('Error Fetching Doctors');
                console.log(err);
            }
        };

        getBlogs();
    }, []);

    const handleNameChange = (e) => {
        const { value } = e.target;
        setNameQuery(value);
        filterBlogs(value, specialtyQuery, locationQuery);
    };

    const handleSpecialtyChange = (e) => {
        const { value } = e.target;
        setSpecialtyQuery(value);
        filterBlogs(nameQuery, value, locationQuery);
    };

    const handleLocationChange = (e) => {
        const { value } = e.target;
        setLocationQuery(value);
        filterBlogs(nameQuery, specialtyQuery, value);
    };

    const filterBlogs = (name, specialty, location) => {
        const filtered = blogs.filter((blog) =>
            blog.name.toLowerCase().includes(name.toLowerCase()) &&
            blog.specialization.toLowerCase().includes(specialty.toLowerCase()) &&
            blog.location.toLowerCase().includes(location.toLowerCase())
        );
        setFilteredBlogs(filtered);
    };

    return (
        <>  
            <div className='relative flex flex-col w-full justify-center items-center bg-cover bg-center bg-gradient-to-tr  from-sky-300 via-sky-400 to-blue-500 bg-white rounded-lg p-10 mx-3 my-4 shadow-md' style={{ backgroundImage:"url('/assets/images/swirl.jpg')" }}>

                <h1 className='text-5xl flex flex-col gap-2 mb-8 text-white z-10' >
                    <span>Find the <span className=' md:ms-1 font-semibold'>Best</span></span>
                    <span className='md:ms-20'>Doctor <span className=' md:ms-3  md:font-semibold'>around you.</span></span>
                </h1>
                <div className='flex flex-col gap-3 md:flex-row md:w-3/4 justify-center items-center md:gap-0'>

                    <form className="flex items-center max-w-sm w-full md:me-2 z-10">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input type="text"  value={nameQuery} onChange={handleNameChange} placeholder="Search by Doctor Name..." id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full ps-10 p-2.5" required />
                        </div>
                    </form>
 
                    <form className="flex items-center max-w-sm w-full z-10">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input type="text" value={specialtyQuery} onChange={handleSpecialtyChange} placeholder="Search by Speciality..." id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" required />
                        </div>
                    </form>

                    <form className="flex items-center max-w-sm w-full md:ms-2 z-10">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input type="text" value={locationQuery} onChange={handleLocationChange} placeholder="Search by Location..." id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" required />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>

                </div>
                <div className="absolute inset-0 bg-gradient-to-tr  from-sky-300 via-sky-400 to-blue-500 bg-white  opacity-50 rounded-lg "></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredBlogs.map(blog => (
                    <Doctorcard
                        imageUrl={blog?.image}
                        key={blog.$id}
                        name={blog?.name}
                        speciality={blog?.specialization}
                        location={blog?.location}
                        experience={blog?.experience}
                    />
                ))}
            </div>
        </>
    );
};

export default Blogs;

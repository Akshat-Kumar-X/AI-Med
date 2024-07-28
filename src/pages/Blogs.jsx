import React from 'react';
import Blogcard from './Blogcard';
import { db, storage } from '../helper/appwrite';
import toast from 'react-hot-toast';

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);

  const getBlogs = async () => {
    try {
      const result = await db.listDocuments('65f7c1fbb1ae554900c8', '6622a6c8ba81957d34fc');
      if (result.total) {
        const imageIds = result.documents.map(blog => blog.cover);
        const imagePromises = imageIds.map(imageId =>
          storage.getFileView('6622a6697659ecc89172', imageId)
        );

        const images = await Promise.all(imagePromises);

        const blogs = result.documents.map((doc, index) => ({
          ...doc,
          image: images[index].href // assuming images[index] now contains the resolved file object with an href property
        }));

        setBlogs(blogs);
      }
    } catch (err) {
      toast.error('Error Fetching Blogs!')
      console.log(err);
    }

  }

  React.useEffect(() => {
    getBlogs();
  }, [])

  return (
    <div className='w-full'>
      <div className="relative flex flex-col w-full justify-center items-center bg-cover bg-center rounded-lg p-10 my-4 shadow-md" style={{ backgroundImage:"url('/assets/images/mountains.jpg')" }}>
          <h1 className="text-5xl flex flex-col gap-2 text-white z-10 text-center">
              Health Blogs
          </h1>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2'>
        {blogs.map(blog => (<Blogcard
          imageLink={blog?.image}
          key={blog.$id}
          name={blog?.title}
          description={blog?.description}
        />))}
      </div>
    </div>
  );
};

export default Blogs;

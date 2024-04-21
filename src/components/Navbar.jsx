import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/auth-provider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { isSignedIn, user, logout } = useAuth();
  return (
    <nav className="flex justify-between items-center w-full mb-8 pt-3">

      <div className="text-xl" id="logo">
        <Link to="/" className='flex justify-center items-center'>
          <img src="/assets/images/stethoscope.png" alt="stethoscope" className='w-10 h-10' />
           <div><span className='font-bold'>AI</span>med</div>
        </Link>
      </div>

      <div className="hidden sm:flex gap-6">
        <ul className="flex gap-6">
          {isSignedIn ? <li className='flex items-center hover:scale-110 transition-all duration-300 hover:text-sky-500'>
            <Link to="/add-blog">Add Blog</Link>
          </li> : null}
          {isSignedIn ? <li className='flex items-center hover:scale-110 transition-all duration-300 hover:text-orange-400'>
            <Link to="/doctordetail">Add Doctor Detail</Link>
          </li> : null}
        <li className="flex items-center hover:scale-110 transition-all duration-300 hover:text-green-500">
          <Link to="/diagnosis"> Pharmacy </Link>
        </li>

        <li className="flex items-center hover:scale-110  transition-all duration-300 hover:text-rose-500">
          <Link to="/doctorpage"> Doctors </Link>
        </li>

        <li className="flex items-center hover:scale-110  transition-all duration-300 hover:text-teal-500">
          <Link to="/blog"> Blogs </Link>
        </li>

        <li className="flex items-center hover:scale-110  transition-all duration-300 ">
          <Link to="/cart"> <FaShoppingCart className='text-xl text-gray-800 hover:text-blue-500 duration-300'/></Link>
        </li>

        <li>
          {isSignedIn ? (
            <span>
              {/* <h1>Hi, {user?.name}</h1> */}
              <button onClick={logout}><div className="flex gap-1 rounded-md border-gray-300  px-4 py-[2px] hover:scale-110 hover:shadow-sm duration-300 bg-gradient-to-tr font-xl text-white from-sky-300 via-sky-400 to-blue-400 bg-white">
            <span className="">Logout</span>
          </div></button>
            </span>
        ) : (<Link to="/login">
          <div className="flex gap-1 rounded-md border-gray-300  px-4 py-[2px] hover:scale-110 hover:shadow-sm duration-300 bg-gradient-to-tr font-xl text-white from-sky-300 via-sky-400 to-blue-400 bg-white">
            <span className="">Login / Sign up</span>
          </div>
        </Link>)}
      </li>
    </ul>
      </div >

    </nav >
  )
}

export default Navbar;

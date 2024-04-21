import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoLocationSharp } from "react-icons/io5";

const Doctorcard = ({ name, speciality, location, experience, email, imageUrl }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedAppointment, setBookedAppointment] = useState('');
  const [dialogbox, setDialogBox] = useState(false); // Set initial state to false

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = (e) => {
    if (selectedSlot) {
      e.preventDefault();
      setBookedAppointment(selectedSlot);
      setDialogBox(false);
      toast.success('Appointment Booked Succesfully!');
      setSelectedSlot(null);
    }duration-500
  };

  const handleClick = () =>{
    console.log("button is clicked");
    setDialogBox(true);
    console.log(dialogbox);
  }

  return (
    <div className="gap-2 flex items-center justify-center">
      <div className="bg-white relative shadow-xl overflow-hidden group rounded-xl p-5 hover:scale-105 duration-300">
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            className="w-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            alt="profile"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-gray-600 font-bold">{name}</h1>
            <p className="text-gray-400">{speciality}</p>
            <p className='text-gray-400 flex flex-row justify-start items-center'><IoLocationSharp /> {location}</p>
            <p className="text-gray-400">
              Year's of Experience <span className="text-xl font-bold">{experience}</span>
            </p>
          </div>
        </div>


        <button
          className="inline-block px-4 font-semibold py-1.5 rounded-lg mt-2 text-white transition-all duration-300 ease-in-out bg-gradient-to-tr  from-sky-300 via-sky-400 to-blue-500 "
          onClick={() => handleClick()} // Open dialog
        >
          Check Appointment
        </button>

        <dialog
          id="loginDialog"
          className={`z-50 absolute inset-0 rounded-lg w-full max-w-lg ${dialogbox ? '' : 'hidden'}`}
          open={dialogbox}
          style={{ backdropFilter: 'blur(100px)' }}
        >
          <form id="loginForm" className="card flex-shrink-0 w-full">
            <div className="card-body bg-white">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Calendar</span>
                </label>
                <input required id="date" type="date" placeholder="date" className="input input-bordered bg-white text-black border-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Slots</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['02:00PM', '03:00PM', '04:00PM'].map((slot, index) => (
                    <label key={index} className={`btn ${selectedSlot === slot ? 'bg-blue-400 text-white' : ''}bg-gray-100 text-black border-none`}>
                      <input
                        type="checkbox"
                        className="hidden bg-gray-100"
                        onChange={() => handleSlotSelection(slot)}
                        checked={selectedSlot === slot}
                      />
                      {slot}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-control">
                <button id="loginBtn" className="inline-block px-4 font-bold py-2 rounded-lg text-white transition duration-300 ease-in-out bg-gradient-to-tr  from-sky-300 via-sky-400 to-blue-500" onClick={(e) => handleBookAppointment(e)}>Book Appointment</button>
              </div>
            </div>
          </form>
        </dialog>

        <p className='text-md text-gray-600 ms-2 mt-2'>Booked: {bookedAppointment}</p>
      </div>
    </div>
  );
};

export default Doctorcard;

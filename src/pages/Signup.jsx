import React, { useState } from 'react'
import Auth from '../components/Auth'
import { account } from '../helper/appwrite'
import { ID } from 'appwrite'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Signupbtn = ({onClick}) => {
    return <button onClick={onClick} className="btn btn-primary  bg-blue-400 text-white border-none hover:bg-blue-500">SignUp</button>
};

const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const navigate=useNavigate();
    const createAccount =async() =>{
        const promise = account.create(ID.unique(),email, password,name);

        promise.then(() =>{
            toast.success('User Registered Succesfully!')
            navigate('/login')
        }).catch(err =>{
            toast.error(err.message);
        });
    };

    return (
        <Auth title={"Create an account"}
            description={"Let's start the journey of EasyDoc by creating an account"}
            button={<Signupbtn onClick={createAccount} />}
            bottomquestion={"Already have an account!"}
            bottomlink={"/login"}
            bottomtext={"Login instead"} 
            email={email}
            password={password}
            name={name}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
             />
    )
}

export default Signup
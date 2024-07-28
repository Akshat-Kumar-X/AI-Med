import React, { useState, useEffect } from "react";
import Auth from "../components/Auth";
import { account } from "../helper/appwrite";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";
import toast from "react-hot-toast";

const Loginbtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary bg-blue-400 text-white border-none hover:bg-blue-500">
      Login now
    </button>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isSignedIn, setIsSignedIn, setUser } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const loginAccount = async () => {
    const promise = account.createEmailPasswordSession(email, password);
    promise
      .then(async (response) => {
        setIsSignedIn(true);
        const user = await account.get();
        setUser(user);
        localStorage["user"] = JSON.stringify(user);
        toast.success('Welcome Back! ' + user.name);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Auth
      title={"Login now"}
      description={
        "Thanks for coming back, Continue your journey again with EasyDoc"
      }
      button={<Loginbtn onClick={loginAccount} />}
      bottomquestion={"Don't have an account!"}
      bottomtext={"Create an account"}
      bottomlink={"/signup"}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;

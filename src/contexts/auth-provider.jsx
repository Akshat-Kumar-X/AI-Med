import React from "react"
import {account} from "../helper/appwrite"
const AuthContext = React.createContext(null);
import toast from "react-hot-toast";

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userAsJson = localStorage["user"];
    if(userAsJson) {
      const data = JSON.parse(userAsJson);
      setUser(data);
      setIsSignedIn(true);
    }
  }, [])

  return <AuthContext.Provider value={{
    isSignedIn, setIsSignedIn, user, setUser
}}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  const {isSignedIn, setIsSignedIn, user, setUser} = React.useContext(AuthContext);
  const logout = async () => {
    localStorage.removeItem("user");
    account.deleteSession();
    setUser(null);
    setIsSignedIn(false);
    toast.success('Logged Out!')
  }

  return {isSignedIn, setIsSignedIn, user, setUser, logout};
}

export default AuthProvider;
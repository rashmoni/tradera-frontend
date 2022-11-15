// Node modules
import { Routes, Route } from "react-router-dom";
import iUser from "../interfaces/iUser";

// Project files
import SignIn from "../pages/LoginScreen";
import SignUp from "../pages/SignUpScreen";

interface iProps {
  user: iUser,
  setUser: Function
}

//  <Route path="/" element={<SignIn user={user} setUser={setUser} />} />

export default function UnloggedRoutes({user, setUser}: iProps) {
  return (
    <Routes>
     
      <Route path="/login" element={<SignIn user={user} setUser={setUser}/>} />
      <Route path="/registration" element={<SignUp />} />
    </Routes>
  );
}

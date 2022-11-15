// Node modules
import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import iUser from "../interfaces/iUser";
import Landing from "../pages/Landing";
import NewAd from "../pages/NewAd";
import Search from "../pages/Search";
import SingleProduct from "../pages/SingleProduct";
import SendingEmail from "../services/SendingEmail";

interface iProps {
  user: iUser
  setUser: Function
}


export default function CustomerRoutes({user, setUser}: iProps) {
  return (
    <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/auction/:code" element={<SingleProduct user={user} setUser={setUser}/>} />
          <Route path="/selling/new" element={<NewAd user={user} setUser={setUser}/>} />
          <Route path="/search/:code" element={<Search />} />
          <Route path="/email" element={<SendingEmail />} />
    </Routes>
  );
}

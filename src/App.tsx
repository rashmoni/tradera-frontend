// Node modules
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CustomerRoutes from "./routes/CustomerRoutes";
import UnloggedRoutes from "./routes/UnlogedRoutes";
import "./styles/style.css";

export default function App() {
  // Global state

  const [user, setUser] = useState({ id: 0, name: "", email: "" });

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar setUser={setUser} />
        <UnloggedRoutes user={user} setUser={setUser} />
        <CustomerRoutes user={user} setUser={setUser} />
      </BrowserRouter>
    </div>
  );
}

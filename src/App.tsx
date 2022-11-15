// Node modules
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerRoutes from "./routes/CustomerRoutes";
import UnloggedRoutes from "./routes/UnlogedRoutes";
import "./styles/style.css";

export default function App() {
  // Global state

  const [user, setUser] = useState({ id: 0, name: "", email: "" });

  return (
    <div className="App">
      <BrowserRouter>
        {<UnloggedRoutes user={user} setUser={setUser} />}
        {<CustomerRoutes user={user} setUser={setUser} />}
      </BrowserRouter>
    </div>
  );
}

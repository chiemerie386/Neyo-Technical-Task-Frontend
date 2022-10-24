import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <main>  
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </main>
  );
}

export default App;

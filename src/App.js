import { Route, Routes } from "react-router-dom"
import React,{useState} from 'react'
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Protected from './components/protected'

function App() {
  let LoggedIn = localStorage.getItem('token')
  const [isLoggedIn, setisLoggedIn] = useState(Boolean(LoggedIn));
  return (
    <main>  
      <Routes>
      <Route path="login" element={<Login set={setisLoggedIn} />} />
      {/* <Route path="dashboard" element={<Login set={setisLoggedIn} />} /> */}
      <Route path="register" element={
        <Register set={setisLoggedIn} />
        } />
      <Route path="dashboard" element={
          <Protected isLoggedIn= {isLoggedIn}>
            <Dashboard set={setisLoggedIn}/>
          </Protected>
        } />
              <Route path="" element={
          <Protected isLoggedIn= {isLoggedIn}>
            <Dashboard set={setisLoggedIn}/>
          </Protected>
        } />
    </Routes>
    </main>
  );
}

export default App;

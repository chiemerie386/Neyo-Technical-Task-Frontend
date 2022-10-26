import frame14 from "../frame14.svg"
import { useMutation} from "react-query"
import {register} from "../../api/authApi"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function Register() {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(true)
  let navigate = useNavigate(); 

  const registerMutation = useMutation(register, {
    onSuccess: (result) => {
     
      if(result.data  && result.data.token){
        localStorage.setItem('token', result.data.token);
        navigate('/');
      }
    },
    onError: (result) =>{
      setError(result.response.data.message)
      setIsError(true)
    }
})
const handleRegister = (e) => {
  if(!email || !password || !firstName || !lastName){
    setError("Please complete all fields")
    setIsError(true)
    return
  }
  registerMutation.mutate({ email, password, firstName, lastName })
}
  return (
    <main>
 <div className="landing-page">
      <div className="navigation-horizont">
    
        <div className="frame-95" />
        <div className="container" />
      </div>
      <span className="log-in-to-continue">Register an account</span>
      { isError && <span className="error-message">{error}</span>}
      
      <input type='text' placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} className="frame-17 password" />
      <input type='text' placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)} className="frame-17 password" />
      <input type='text' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="frame-17 password" />
      <input type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="frame-18 password-1" />

      <div className="button" onClick={handleRegister}>
        <span className="enter-canvas">Sign up</span>
      </div>
      <div className="group-406">
        <div className="rectangle-1910">
          <img className="frame-14" src={frame14} />
          <span className="log-in-with-google">Sign up with Google</span>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Register;

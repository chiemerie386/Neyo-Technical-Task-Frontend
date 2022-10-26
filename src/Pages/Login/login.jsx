
import "./login.css"
import frame14 from "../frame14.svg"
import { useMutation} from "react-query"
import {login} from "../../api/authApi"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(true)
  let navigate = useNavigate(); 

  const loginMutation = useMutation(login, {
    onSuccess: (result) => {
      if(result.data && result.data.token){
        localStorage.setItem('token', result.data.token);
        navigate('/');
      }

    },
    onError: (result) =>{
      setError(result.response.data.message)
      setIsError(true)
    }
})
const handleLogin = (e) => {
  if(!email || !password ){
    setError("Please complete all fields")
    setIsError(true)
    return
  }
  loginMutation.mutate({ email, password })
}
  return (
    <main>
 <div className="landing-page">
      <div className="navigation-horizont">
        {/* <img className="frame-99" src={frame99} /> */}
        <div className="frame-95" />
        <div className="container" />
      </div>
      <span className="log-in-to-continue">Log in to continue</span>
      { isError && <span className="error-message">{error}</span>}

      <input type='text' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  className="frame-17 password" />
      <input type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  className="frame-18 password-1" />
  
      <span className="forgot-password">Forgot password?</span>
      <div className="button" onClick={handleLogin}>
        <span className="enter-canvas">Log In</span>
      </div>
      <span className="dont-have-an-account" onClick={()=>navigate('/register')}>
        Don’t have an account? Sign up
      </span>
      <span className="or">or</span>
      <div className="group-406">
        <div className="rectangle-1910">
          <img className="frame-14" src={frame14} />
          <span className="log-in-with-google">Log in with Google</span>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Login;

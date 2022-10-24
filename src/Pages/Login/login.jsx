
import "./login.css"
import frame14 from "../frame14.svg"


function Login() {
  return (
    <main>
 <div className="landing-page">
      <div className="navigation-horizont">
        {/* <img className="frame-99" src={frame99} /> */}
        <div className="frame-95" />
        <div className="container" />
      </div>
      <span className="log-in-to-continue">Log in to continue</span>
      <input type='text' placeholder="Email"  className="frame-17 password" />
      <input type='password' placeholder="Password"  className="frame-18 password-1" />
  
      <span className="forgot-password">Forgot password?</span>
      <div className="button">
        <span className="enter-canvas">Log In</span>
      </div>
      <span className="dont-have-an-account">
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

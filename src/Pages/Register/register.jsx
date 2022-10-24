

import frame14 from "../frame14.svg"

function Register() {
  return (
    <main>
 <div className="landing-page">
      <div className="navigation-horizont">
    
        <div className="frame-95" />
        <div className="container" />
      </div>
      <span className="log-in-to-continue">Register an account</span>
      <input type='text' placeholder="Email"  className="frame-17 password" />
      <input type='text' placeholder="Email"  className="frame-18 password-1" />

      <div className="button">
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

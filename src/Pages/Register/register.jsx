import frame14 from "../frame14.svg"
import { useMutation} from "react-query"
import {register} from "../../api/authApi"
import { useState, useContext } from "react"
import { Context } from '../../reducer';
import {useNavigate} from 'react-router-dom'

function Register({set}) {
  const { setUserColour} = useContext(Context);

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('https://res.cloudinary.com/eftd/image/upload/v1666953450/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887_xdloyg.jpg')
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(true)
  let navigate = useNavigate(); 

  const registerMutation = useMutation(register, {
    
    onSuccess: (result) => {
      if(result.data  && result.data.token){
        localStorage.setItem('token', result.data.token);
        set(true)
        const name = `${result.data.user.firstName} ${result.data.user.lastName}`
        const colour = `#${result.data.user.colour}`
        const image = `${result.data.user.image}`
        localStorage.setItem('name', name);
        localStorage.setItem('colour', colour);
        localStorage.setItem('image', image);
        setUserColour(colour)
        navigate('/dashboard');
      }
    },
    onError: (result) =>{
      setError(result.response.data.message)
      setIsError(true)
    }
})
const handleRegister = async(e) => {
  if(!email || !password || !firstName || !lastName){
    setError("Please complete all fields")
    setIsError(true)
    return
  }
   await uploadImage(image)
  registerMutation.mutate({ email, password, firstName, lastName, image:url })
}

const handelUpload = async(event)=>{
    const file = event.target.files[0]
   setImage(file)
}


const uploadImage = async(image) => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "neyo_sketches")
    data.append("cloud_name","breellz")
  fetch("https://api.cloudinary.com/v1_1/eftd/image/upload",{
    method:"post",
    body: data
    })
  .then(resp => resp.json())
    .then(data => {
      setUrl(data.url)
    })
    .catch(err => console.log(err, "hjg"))
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
      <input  type="file" onClick={handelUpload} className="file" accept="image/*" placeholder="image" />

      <div className=" button" onClick={handleRegister}>
        <span className="enter-canvas">Sign up</span>
      </div>
      <div className="group-406">
        <div className="rectangle-1910">
          <img className="frame-14" src={frame14} alt="google" />
          <span className="log-in-with-google">Sign up with Google</span>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Register;

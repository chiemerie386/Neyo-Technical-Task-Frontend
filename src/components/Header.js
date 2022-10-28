import Profile from "./assets/Profile.png"
import { useState } from "react"
const Header = () => {
    const userName = localStorage.getItem("name") || ""
    const profilePicture = localStorage.getItem("image") || "https://res.cloudinary.com/eftd/image/upload/v1666953450/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887_xdloyg.jpg"
    const [name] = useState(userName)
    const [image] = useState(profilePicture)
    return (
      <nav >
  <h3 className="name">{name}</h3>
  <img src={image} className="profile-picture" alt='profile pix' />
      </nav>
    )
  }

  export default Header
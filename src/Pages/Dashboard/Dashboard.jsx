import "./Dashboard.css";
import React, {useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '../../Modals/AddSketch/AddSketch'
import sketchTools from '../../utils/sketch'
import { Context } from '../../reducer';
import { useMutation, useQueryClient} from "react-query"
import { updateSketch} from "../../api/sketchApi";
import SketchDropDown from "../../components/SketchDropdown"
import UsersDropDown from "../../components/UsersDropdown"
import CollaboratorBoard from "../../components/CollaboratorBoard"
import Header from "../../components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {app} = sketchTools



const Dashboard = () => {
  const { activeSketch, setActiveSketchBody} = useContext(Context);
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  function handleSketch () {
    app.renderer.plugins.extract.canvas(app.stage).toBlob(function(b){
      uploadImage(b)
    }, 'image/png')}

    const uploadImage = (image) => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "neyo_sketches")
    data.append("cloud_name","breellz")
    fetch("  https://api.cloudinary.com/v1_1/eftd/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      updateMutation.mutate({ sketchId:activeSketch, body:data.url })
      setActiveSketchBody(data.url)
    })
    .catch(err => console.log(err))
    }

    const updateMutation = useMutation(updateSketch, {
      onSuccess: (result) => {
        toast.success("Changes saved!", {
          position: toast.POSITION.BOTTOM_LEFT
        })
        queryClient.invalidateQueries("sketches")
      },
      onError: (result) =>{
        toast.error("Couldn't save update!", {
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
    })

    const handleLogout = () =>{
      localStorage.removeItem("token")
      navigate('/login')
    }


  return (
    <div className="canvas">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
  <Header />
  <CollaboratorBoard />
    <div className="side-bar">
        <SketchDropDown title='SKETCHES' createSketch ={() => setIsOpen(true)}/>
        <UsersDropDown title='USERS' />
        <div className="button-box">
          <button className="save-button" onClick={handleLogout}>Log Out</button>
          <button className="save-button" onClick={handleSketch}>Save</button>
        </div>

  </div>
  <ToastContainer />
    </div>
  );
};
export default Dashboard;

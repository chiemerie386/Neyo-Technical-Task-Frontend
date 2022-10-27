import React, {useState} from "react";
import './AddSketch.css'
import { RiCloseLine } from "react-icons/ri";
import {create} from "../../api/sketchApi"
import { useMutation, useQueryClient} from "react-query"
import {useNavigate} from 'react-router-dom'
// import 

const Modal = ({ setIsOpen }) => {

  const [title, setTitle] = useState(3)
  const queryClient = useQueryClient()

  const loginMutation = useMutation(create, {
    onSuccess: (result) => {
      queryClient.invalidateQueries("sketches")
    },
    onError: (result) =>{
      // setError(result.response.data.message)
      // setIsError(true)
    }
})
const handleCreate = (e) =>{
  loginMutation.mutate({ title })
  setIsOpen(false)
}  
const handleLogin = (e) => {
  // if(!email || !password ){
  //   setError("Please complete all fields")
  //   setIsError(true)
  //   return
  // }
  loginMutation.mutate({ title })
}
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader" >
            <h5 className="heading"> Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
         <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
          <div className="modalActions" >
            <div className="actionsContainer">
              <button className="createBtn" onClick={handleCreate}>
                Create
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
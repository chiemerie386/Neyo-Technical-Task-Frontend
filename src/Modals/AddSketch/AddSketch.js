import React, {useState} from "react";
import './AddSketch.css'
import { RiCloseLine } from "react-icons/ri";
import {create} from "../../api/sketchApi"
import { useMutation, useQueryClient} from "react-query"
import {useNavigate} from 'react-router-dom'
// import 

const Modal = ({ setIsOpen }) => {

  const [title, setTitle] = useState("")
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)
  const queryClient = useQueryClient()

  const createMutation = useMutation(create, {
    onSuccess: (result) => {
      queryClient.invalidateQueries("sketches")
      setIsOpen(false)
    },
    onError: (result) =>{
      setError(result.response.data.message)
      setIsError(true)
    }
})
const handleCreate = (e) =>{
  if(!title){
    setError("Please add a title")
    setIsError(true)
    return
  }
  createMutation.mutate({ title })
}
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader" >
            <h5 className="heading">Create New Sketch</h5>
          </div>
          <h4 className="error-message">{isError && error}</h4>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
         
         <input type="text" className="modal-input" placeholder="Sketch Title" onChange={(e)=>setTitle(e.target.value)}/>
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
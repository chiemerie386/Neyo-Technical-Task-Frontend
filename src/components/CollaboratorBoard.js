// import "./Dashboard.css";
// import Profile from "./assets/Profile.png"
import React, { useRef, useEffect,  useContext } from "react";
import sketchTools from '../utils/sketch'
import { Context } from '../reducer';
const {init, app} = sketchTools

const CollaboratorBoard = () => {
    const { activeSketchBody, activeSketch, setActiveSketch, userColour} = useContext(Context);
    const ref = useRef(null);
    useEffect(() => {
      ref.current.appendChild(app.view);
      init(activeSketchBody, userColour)
      app.start();
      return () => {
        app.stop();
      };
    }, [activeSketchBody, activeSketch, setActiveSketch, userColour]);
  
    return (
      <div className="collaborator" ref={ref}></div>
    )
  }

  export default CollaboratorBoard
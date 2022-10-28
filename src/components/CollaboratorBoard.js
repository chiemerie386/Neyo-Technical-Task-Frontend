// import "./Dashboard.css";
// import Profile from "./assets/Profile.png"
import React, { useRef, useEffect, useState,  useContext } from "react";
import sketchTools from '../utils/sketch'
import { useQuery, useMutation, useQueryClient, QueryClient} from "react-query"
import { getOne, getAll} from "../api/sketchApi";
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
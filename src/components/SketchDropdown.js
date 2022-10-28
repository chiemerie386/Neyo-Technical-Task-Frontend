// import "./Dashboard.css";
import React, { useState, useContext, useEffect } from "react";
// import { useQuery } from "react-query"
// import {getAll,} from "../api/sketchApi";
import sketchTools from '../utils/sketch'
import { Context } from '../reducer';
import { useQuery, useMutation, useQueryClient, QueryClient} from "react-query"
import { getOne, getAll} from "../api/sketchApi";
const {init, app} = sketchTools

const SketchDropDown = ({title, createSketch}) => {
    const { activeSketch, setActiveSketch, setActiveSketchBody} = useContext(Context);
    const [open, setOpen] = useState(false)
    const {data } = useQuery(['singlesketches', activeSketch], ()=>getOne(activeSketch), {
        select: data => {
            setActiveSketchBody(data?.data?.sketch?.body)
            return data
        }
    })
    const SetActiveSketchId = (id) =>{
      setActiveSketch(id)
      localStorage.setItem("active-sketch-id", id)
    }
  
    const { data:sketches } = useQuery('sketches', getAll, {
      select: data => {
        return(data.data)
      }
  })
  
    return (
  <div className="dropdown_container">
  <div className="title_div">
  <h3 className="title" ><b>{title}</b></h3>
  <div className="dropdown-icon" onClick={()=>setOpen(!open)}>{">>"}</div>
  </div>
{  open && ( <ul className="list_container">
      {sketches && sketches.sketch.map((val, id)=>{
        return (
          <div key={val._id} style={{color:(val._id === activeSketch) ? "#4F00C1" : ""}} onClick={()=>{SetActiveSketchId(val._id)}} className="sketch-list-items"> {val.title}</div>
        )
      })}
      <div className="sketch-list-items" onClick={createSketch}>
   +   Add new Sketch
      </div>
    </ul>)}
  </div>
    )
  }

  export default SketchDropDown
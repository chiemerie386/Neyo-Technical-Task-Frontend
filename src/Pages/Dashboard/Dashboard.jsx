import "./Dashboard.css";
import Profile from "./assets/Profile.png"
import React, { useRef, useEffect, useState } from "react";
import Modal from '../../Modals/AddSketch/AddSketch'
import sketchTools from './sketch'
import { useQuery } from "react-query"
import {getAll} from "../../api/sketchApi";
import {getAllUsers} from "../../api/userApi"

const {init, app} = sketchTools

// const Dashboard = () => {
//   const ref = useRef(null);
//   function handleSketch () {
//     app.renderer.plugins.extract.canvas(app.stage).toBlob(function(b){
//       var a = document.createElement('a');
//       document.body.append(a);
//       a.download = "fileName";
//       a.href = URL.createObjectURL(b);
//       a.click();
//       a.remove();
//     }, 'image/png');
//   }
//   useEffect(() => {
//     // On first render add app to DOM
//     ref.current.appendChild(app.view);
//     // Start the PixiJS app
//     init()
//     app.start();

//     return () => {
//       // On unload stop the application
//       app.stop();
//     };
//   }, []);
//   const propsData = {
//     lineEntryContent: {
//       progress: "Add new sketch",
//       iconsProjectPanel3: iconsProjectPanel3,
//     },
//   };
//   return (
//     <div className="canvas">
//         <div className="sketch-pad" ref={ref} />
//         <div className="container">
//         <div className="rectangle-956">
//           <img className="frame-95" src={frame95} />
//         </div>
//         <img className="vector-1252" src={vector1252} />
//         <div className="left-div">
//         <div className="flex-container-1">
//             <span className="sketches">SKETCHES</span>
//             <img className="icons-double-caret-1" src={iconsDoubleCaret1} />
//           </div>
//                     <img className="frame-5151" src={frame5151} />
//                     <span className="progress">Sketch 1</span>
//           <span className="progress-1">Sketch 2</span>
//           <span className="progress-2">Sketch 3</span>
//           <button onClick={handleSketch}>
//             click
//           </button>
//         </div>
//       </div>
//       <div className="flex-container">
//         {/* <img className="rectangle-2060" src={rectangle2060} /> */}
//         {/* <div class="sketch-pad"> */}
//         {/* <Stage></Stage> */}
        
//         {/* </div> */}
//         <div className="phases-pages-expand">
//         fyhgvjh
//           <div className="flex-container-1">
//             <span className="sketches">SKETCHES</span>
//             {/* <img className="icons-double-caret-1" src={iconsDoubleCaret1} /> */}
//           </div>
//           {/* <img className="frame-5151" src={frame5151} /> */}
//           <span className="progress">Sketch 1</span>
//           <span className="progress-1">Sketch 2</span>
//           <span className="progress-2">Sketch 3</span>
//           {/* <LineEntryContent
//             className="line-entry-content-instance-1"
//             {...propsData.lineEntryContent}
//           /> */}
//         </div>

//       </div>
//     </div>
//   );
// };

const Header = () => {
  return (
    <nav >
<h3 className="name">John Doe</h3>
<img src={Profile} alt='profile pix' />
    </nav>
  )
}
const CollaboratorBoard = () => {
  // const ref = useRef(null);
  // function handleSketch () {
  //   app.renderer.plugins.extract.canvas(app.stage).toBlob(function(b){
  //     var a = document.createElement('a');
  //     document.body.append(a);
  //     a.download = "fileName";
  //     a.href = URL.createObjectURL(b);
  //     a.click();
  //     a.remove();
  //   }, 'image/png');
  // }
  // useEffect(() => {
  //   // On first render add app to DOM
  //   ref.current.appendChild(app.view);
  //   // Start the PixiJS app
  //   init()
  //   app.start();

  //   return () => {
  //     // On unload stop the application
  //     app.stop();
  //   };
  // }, []);

  return (
<div className="collaborator">
  {/* <div ref={ref} /> */}
</div>
  )
}

const SketchDropDown = ({title, createSketch}) => {
  const activeSketch = localStorage.getItem("active-sketch-id")

  const [activeSketchId, setActiveSketchId] = useState(activeSketch)

  const setActiveSketch = (id) =>{

    localStorage.setItem("active-sketch-id", id)
    setActiveSketchId(id)
  }

  const {
    isLoading,
    isError,
    error,
    data:sketches
} = useQuery('sketches', getAll, {
    select: data => {
      return(data.data)
    }
})

  return (
<div className="dropdown_container">
<div className="title_div">
<h3 className="title"><b>{title}</b></h3>
</div>
  <ul className="list_container">
    {sketches && sketches.sketch.map((val, id)=>{
      return (
        <div key={val._id} style={{color:(val._id === activeSketchId) ? "#4F00C1" : ""}} onClick={()=>{setActiveSketch(val._id)}} className="sketch-list-items"> {val.title}</div>
      )
    })}
    <div className="sketch-list-items" onClick={createSketch}>
 +   Add new Sketch
    </div>
  </ul>
</div>
  )
}

const UsersDropDown = ({title}) => {
  const {
    isLoading,
    isError,
    error,
    data:users
} = useQuery('users', getAllUsers, {
    select: data => {
      return(data.data)
    }
})

  return (
<div className="dropdown_container">
<div className="title_div">
<h3 className="title"><b>{title}</b></h3>
</div>
  <ul className="list_container">
    {users && users.map((user,id)=>{
      return (
        <div key={user._id} className="sketch-list-items"> {user.firstName }  {user.lastName}</div>
      )
    })}
  </ul>
</div>
  )
}

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef(null);
//   function handleSketch () {
//     app.renderer.plugins.extract.canvas(app.stage).toBlob(function(b){
//       var a = document.createElement('a');
//       document.body.append(a);
//       a.download = "fileName";
//       a.href = URL.createObjectURL(b);
//       a.click();
//       a.remove();
//     }, 'image/png');
//   }
//   useEffect(() => {
//     // On first render add app to DOM
//     ref.current.appendChild(app.view);
//     // Start the PixiJS app
//     init()
//     app.start();

//     return () => {
//       // On unload stop the application
      app.stop();
//     };
//   }, []);
  return (
    <div className="canvas">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
<Header />
<CollaboratorBoard />
<div className="side-bar">
<SketchDropDown title='SKETCHES' createSketch ={() => setIsOpen(true)}/>
<UsersDropDown title='USERS' />
</div>

    </div>
  );
};
export default Dashboard;

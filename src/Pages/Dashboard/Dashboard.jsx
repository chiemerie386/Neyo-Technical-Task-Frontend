import "./Dashboard.css";
import iconsDoubleCaret1 from "./assets/iconsDoubleCaret1.svg";
import frame99 from "./assets/frame99.svg";
import iconsDoubleCaret from "./assets/iconsDoubleCaret.svg";
import iconsProjectPanel2 from "./assets/iconsProjectPanel2.svg";
import iconsProjectPanel1 from "./assets/iconsProjectPanel1.svg";
import frame515 from "./assets/frame515.svg";
import frame95 from "./assets/frame95.svg";
import vector1252 from "./assets/vector1252.svg";
import iconsProjectPanel from "./assets/iconsProjectPanel.svg";
import frame5151 from "./assets/frame5151.svg";
import rectangle2060 from "./assets/rectangle2060.svg";
import iconsProjectPanel3 from "./assets/iconsProjectPanel3.svg";
import LineEntryContent from "./Lines/LineEntryContent";

const Dashboard = () => {
  const propsData = {
    lineEntryContent: {
      progress: "Add new sketch",
      iconsProjectPanel3: iconsProjectPanel3,
    },
  };
  return (
    <div className="canvas">
        
      <div className="container">
        <div className="rectangle-956">
          <img className="frame-95" src={frame95} />
        </div>
        <img className="vector-1252" src={vector1252} />
      </div>
      <div className="flex-container">
        <img className="rectangle-2060" src={rectangle2060} />
        <div className="phases-pages-expand">
          <div className="flex-container-1">
            <span className="sketches">SKETCHES</span>
            <img className="icons-double-caret-1" src={iconsDoubleCaret1} />
          </div>
          <img className="frame-5151" src={frame5151} />
          <span className="progress">Sketch 1</span>
          <span className="progress-1">Sketch 2</span>
          <span className="progress-2">Sketch 3</span>
          <LineEntryContent
            className="line-entry-content-instance-1"
            {...propsData.lineEntryContent}
          />
        </div>

      </div>
    </div>
  );
};
export default Dashboard;

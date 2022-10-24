import "./LineEntryContent.css";
import iconsProjectPanel3 from "../assets/iconsProjectPanel3.svg";
const LineEntryContent = (props) => {
  return (
    <div className={`line-entry-content ${props.className || ""}`}>
      <img
        className="icons-project-panel-3"
        src={props.iconsProjectPanel3 || iconsProjectPanel3}
      />
      <span className="progress-5">{props.progress || "Add new sketch"}</span>
    </div>
  );
};
export default LineEntryContent;

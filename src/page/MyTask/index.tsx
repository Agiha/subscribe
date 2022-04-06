import React from "react";
import "./index.css";
import Headers from "../../assets/APISlogo.png";
import IconLabelTabs from "../../compoment/Tabs/index";
import HeaderBox from "../../compoment/PurpleHead";
export default function MyTask() {
  return (
    <>
        <HeaderBox></HeaderBox>

      <div className="taskBigBox">
        <div className="portraitBox">
          <div className="portrait">
            <img src={Headers} alt="" />
          </div>
          <div className="taskText">Here's what's your task</div>
        </div>
      </div>
      <div className="tabsBox">
        <div className="tabs">
          <IconLabelTabs></IconLabelTabs>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import {
  ViewModule,
  MarkUnreadChatAlt,
  Timelapse,
  Assignment,
  PageviewSharp,
} from "@mui/icons-material";
import Logo from "../../assets/header/Logo.svg";
import HeaderMan from "../../assets/APISlogo.png";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import LeakAddIcon from '@mui/icons-material/LeakAdd';

export default function HeaderBox() {
  return (
    <div className="HeaderBigBox">
      <div className="HeaderBox">
        <div className="HeaderLeftBox">
           <div className="LogoBox">
          <LeakAddIcon className="Icon"></LeakAddIcon>
          <span>Subscribe</span>
        </div>
        <div className="OptionsIconBox">
          <HashRouter>
            <Link to={"/"}>
              <div className="HomeOptions">
                <span>Product</span>
              </div>
            </Link>
            <Link to={"/AboutUs"}>
              <div className="HomeOptions">
                
                <span>About us</span>
              </div>
            </Link>
            <Link to={"/Team"}>
              <div className="HomeOptions">
               
                <span>Team</span>
              </div>
            </Link>
            <Link to={"/ContactUs"}>
              <div className="HomeOptions">
                <span>Contact us</span>
              </div>
            </Link>
           
          </HashRouter>
        </div>
        </div>
       
        <div className="personalBigBox">
          <div className="personalBox">
          Sign in
          </div>
          <div className="SignUpBox">
          Sign up
          </div>
        </div>
      </div>
    </div>
  );
}
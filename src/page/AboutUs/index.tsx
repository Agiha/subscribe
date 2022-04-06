import React from "react";
import "./index.css";
import man from "../../assets/header/man.png";
import HeaderBox from "../../compoment/Header";
import SourceIcon from "@mui/icons-material/Source";
export default function Chat() {
	const NotificationsData =[
		{
			head:man,
			Source:true,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
		{
			head:man,
			Source:false,
			name:'Roy Marker',
			time:"a minute ago",
			noticeContent:'Joined the Substance group.',


		},
		{
			head:man,
			Source:false,
			name:'Hi, Max',
			time:"a minute ago",
			noticeContent:'Here is some tips to “Getting started with Substance”',

		},
		{
			head:man,
			Source:false,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
		{
			head:man,
			Source:false,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
		{
			head:man,
			Source:false,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
		{
			head:man,
			Source:true,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
		{
			head:man,
			Source:true,
			name:'Brian Tylor',
			time:"a minute ago",
			noticeContent:'Change an issues from “In progress” to “Review”',

		},
	]
  return (
    <div>
      <HeaderBox></HeaderBox>
      <div className="NotificationsBigBox">
        <div className="Title">
          <div className="Notifications">Notifications</div>
          <div className="Mark">Mark all read</div>
        </div>
        <div className="ListBox">
          {NotificationsData.map((item) => {
            return (
              <div className="noticeBox">
                <div className="Img">
                  <img src={item.head} alt="" />
                </div>
                <div className="contentBox">
                  <div className="nameAndTime">
                    <div className="Name">{item.name}</div>
                    <div className="Time">{item.time}</div>
                  </div>
                  <div className="content">
                    <div className="noticeContent">{item.noticeContent}</div>
					{item.Source? (
						 <div className="Source">
                      <SourceIcon className="Icon"></SourceIcon>
                      <span>Substance Digital Branding </span>
                    </div>
					) : ("")

					}
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

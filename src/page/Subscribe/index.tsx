import React, { useEffect, useState } from "react";
import "./index.css";
import man from "../../assets/header/man.png";
import HeaderBox from "../../compoment/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SourceIcon from "@mui/icons-material/Source";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useWeb3React } from "@web3-react/core";
import { getKeyWord, getNews, sendEmailCode } from "../../api/subscribe";
import { formatTime } from "../../utils/formatTime";
import Loading from '../../compoment/loding/index'
export default function Chat() {
  const FAQsData = [
    {
      title: "What is Substance?",
      content:
        "Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.",
    },
    {
      title: "How does Substance work?",
      content:
        "Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.",
    },
    {
      title: "Can I talk to real person to get my questions answered?",
      content:
        "Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.",
    },
    {
      title: "In which country Substance available?",
      content:
        "Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.",
    },
  ];
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const NotificationsData = [
    {
      head: man,
      Source: true,
      name: "Brian Tylor",
      time: "a minute ago",
      noticeContent: "Change an issues from “In progress” to “Review”",
    },
    {
      head: man,
      Source: false,
      name: "Roy Marker",
      time: "a minute ago",
      noticeContent: "Joined the Substance group.",
    },
  ];
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { account, chainId, deactivate } = useWeb3React();

  const [eamil, setEmail] = useState("");
  const [keyWord, setKeyWord] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const addEmail = () => {
    sendEmailCode({ address: account, email: eamil });
  };
  const getNewsByKeyWord = (antistop:string)=>{
    getNews({antistop,count:2}).then((res)=>{
      if(res.data.code=='200'){
        setNews(res.data.data[0][antistop])
      }
    })
  }
  useEffect(()=>{
    getKeyWord({count:3}).then((res)=>{
      console.log(res);
      if(res.data.code=='200'){
        setKeyWord(res.data.data)
      }
      
    })
  },[])

  return (
    <div>
      <HeaderBox></HeaderBox>
      <div className="NotificationsBigBox">
        <div className="Title">
          <div className="Notifications">Subscription</div>
        </div>
        <div className="TextFieldBigBox">
          <div className="TextFieldBox">
            <div className="TextField">
              <Box component="form" noValidate autoComplete="off">
                <TextField id="standard-basic" fullWidth label="subscribe" />
              </Box>
            </div>
            <div className="btnBox">
              <Stack spacing={2} direction="row">
                <Button variant="outlined" className="btn">
                  subscribe
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <div className="problemBox">
          {
            keyWord.length>0?keyWord.map((item, index) => {
              return (
                <div>
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                      onClick={()=>{
                        getNewsByKeyWord(item.antistop)
                      }}
                    >
                      <Typography sx={{ width: "80%", flexShrink: 0 }}>
                        {item.antistop}
                        <Button variant="outlined" className="btn">
                          subscribe
                        </Button>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                       
                        <div className="ListBox">
                          {
                             news.length>0?news.map((item) => {
                            return (
                              <div className="noticeBox">
                                <div className="Img">
                                  <img src={item.authorProfileImageUrl} alt="" />
                                </div>
                                <div className="contentBox">
                                  <div className="nameAndTime">
                                    <div className="Name">@{item.authorUserName}</div>
                                    <div className="Time">{formatTime(new Date(item.createdAt).getTime(),'Y-M-D H:M:S')}</div>
                                  </div>
                                  <div className="content">
                                    <div className="noticeContent">
                                      {item.text}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }):<Loading></Loading>
                          }
                         
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            }):<Loading></Loading>
          }
        </div>
      </div>
      <div className="bottomBigBox">
        <div className="add">
          <div className="selectionTitle">
            <div className="Title">Make a selection</div>
            <div className="titleConcent">
              Enter the email address where you'd like to receive these
              newsletters.
            </div>
          </div>
          <div className="EmailBigBox">
            <div className="EmailBox">
              <div className="Email">
                <Box
                  className="emailFieldBox"
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    onChange={(event) => {
                      console.log(event.target.value);
                      setEmail(event.target.value);
                    }}
                  />
                </Box>
              </div>
              <div className="btn">
                <Button
                  disabled={account ? false : true}
                  onClick={addEmail}
                  variant="outlined"
                >
                  AddEmail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
import {
  getEmailStatus,
  getKeyWord,
  getNews,
  sendEmailCode,
  subscribeByKeyword,
  verifyEmailCode,
} from "../../api/subscribe";
import { formatTime } from "../../utils/formatTime";
import Loading from "../../compoment/loding/index";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
export default function Chat() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [open, setOpen] = React.useState(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { account, chainId, deactivate } = useWeb3React();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [iptKeyword, setIptKeyword] = useState("");
  const [keyWord, setKeyWord] = useState<any[]>([]);
  const [tipsText, setTipsText] = useState("");
  const [tipsType, setTipsType] = useState("error");
  const [news, setNews] = useState<any[]>([]);
  const [showVerifyBtn, setShowVerifyBtn] = useState(false);
  const [outStamp, setOutStamp] = useState(60);
  const [isShowAddEmail, setIsShowAddEmail] = useState(true);
  
  const verifyCode = ()=>{
    verifyEmailCode({address:account,code:code,email:email}).then((res)=>{
      if(res.data.code=='200'){
        setTipsType("success");
        setTipsText("Add Email Success");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
        setIsShowAddEmail(false)
      }else{
        setTipsType("error");
        setTipsText("Verification code error");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }
    })
  }

  const addEmail = () => {
    sendEmailCode({ address: account, email: email }).then(() => {
      setShowVerifyBtn(true);
      timeOut();
    });
  };
  const getNewsByKeyWord = (antistop: string) => {
    getNews({ antistop, count: 2 }).then((res) => {
      if (res.data.code == "200") {
        setNews(res.data.data[0][antistop]);
      }
    });
  };

  const getSubscribeByKeyword = () => {
    if (!account) {
      setTipsType("error");
      setTipsText("Please connect wallet");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }
    if (!iptKeyword) {
      setTipsType("error");
      setTipsText("Please fill in the content");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }
    subscribeByKeyword({ address: account, searchString: iptKeyword }).then(
      (res) => {
        if (res.data.code == "200") {
          setTipsType("success");
          setTipsText("Subscription Success");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        } else {
          setTipsType("error");
          setTipsText("Subscription Failed");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        }
      }
    );
  };

  const getSubKeyword = (keys:string)=>{
    subscribeByKeyword({ address: account, searchString: keys }).then(
      (res) => {
        if (res.data.code == "200") {
          setTipsType("success");
          setTipsText("Subscription Success");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        } else {
          setTipsType("error");
          setTipsText("Subscription Failed");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        }
      }
    );
  }

  const timeOut = () => {
    let timestamp = 60;
    const times = setInterval(() => {
      timestamp--;
      setOutStamp(timestamp);
      if (timestamp === 0) {
        clearInterval(times);
      }
    }, 1000);
  };


  const getStatus = ()=>{
    getEmailStatus({address:account}).then((res)=>{
      console.log(res);
      if (res.data.msg == "false") {
        setIsShowAddEmail(false)
      }else{
        setIsShowAddEmail(true)

      }
    })
  }

  useEffect(() => {
    getKeyWord({ count: 3 }).then((res) => {
      console.log(res);
      if (res.data.code == "200") {
        setKeyWord(res.data.data);
      }
    });

    if(account){
      getStatus()
    }

  }, [account]);

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
                <TextField
                  onChange={(event) => {
                    setIptKeyword(event.target.value);
                  }}
                  id="standard-basic"
                  fullWidth
                  label="subscribe"
                />
              </Box>
            </div>
            <div className="btnBox">
              <Stack spacing={2} direction="row">
                <Button
                  variant="outlined"
                  disabled={account ? false : true}
                  onClick={getSubscribeByKeyword}
                  className="btn"
                >
                  subscribe
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <div className="problemBox">
          {keyWord.length > 0 ? (
            keyWord.map((item, index) => {
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
                      onClick={() => {
                        getNewsByKeyWord(item.antistop);
                      }}
                    >
                      <Typography sx={{ width: "80%", flexShrink: 0 }}>
                        {item.antistop}
                        <Button
                          disabled={account ? false : true}
                          variant="outlined"
                          className="btn"
                          onClick={()=>{
                            getSubKeyword(item.antistop)
                          }}
                        >
                          subscribe
                        </Button>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className="ListBox">
                          {news.length > 0 ? (
                            news.map((item) => {
                              return (
                                <div className="noticeBox">
                                  <div className="Img">
                                    <img
                                      src={item.authorProfileImageUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="contentBox">
                                    <div className="nameAndTime">
                                      <div className="Name">
                                        @{item.authorUserName}
                                      </div>
                                      <div className="Time">
                                        {formatTime(
                                          new Date(item.createdAt).getTime(),
                                          "Y-M-D H:M:S"
                                        )}
                                      </div>
                                    </div>
                                    <div className="content">
                                      <div className="noticeContent">
                                        {item.text}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <Loading></Loading>
                          )}
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
      {
        isShowAddEmail? <div className="bottomBigBox">
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
                  {showVerifyBtn ? (
                    <TextField
                      id="outlined-basic"
                      label="CODE"
                      variant="outlined"
                      onChange={(event) => {
                        console.log(event.target.value);
                        setCode(event.target.value);
                      }}
                    />
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Email address"
                      variant="outlined"
                      onChange={(event) => {
                        console.log(event.target.value);
                        setEmail(event.target.value);
                      }}
                    />
                  )}
                </Box>
              </div>
              <div className="btn">
                {showVerifyBtn ? (
                  <div className="subBox">
                    <Button
                      disabled={account ? false : true}
                      onClick={addEmail}
                      variant="outlined"
                    >
                      {outStamp ? outStamp : "Try agin"}
                    </Button>
                    <Button
                      disabled={account ? false : true}
                      onClick={verifyCode}
                      variant="outlined"
                    >
                      Submit
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled={account ? false : true}
                    onClick={addEmail}
                    variant="outlined"
                  >
                    AddEmail
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>:''
      }
     
      <div className="tips">
        <Collapse in={open}>
          <Alert
            severity={tipsType as any}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {tipsText}
          </Alert>
        </Collapse>
      </div>
    </div>
  );
}

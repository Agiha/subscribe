import React from 'react'
import './index.css'
import man from '../../assets/header/man.png'
import HeaderBox from '../../compoment/Header'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SourceIcon from '@mui/icons-material/Source'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
export default function Chat() {
  const FAQsData = [
    {
      title: 'What is Substance?',
      content:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
    {
      title: 'How does Substance work?',
      content:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
    {
      title: 'Can I talk to real person to get my questions answered?',
      content:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
    {
      title: 'In which country Substance available?',
      content:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
  ]
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const NotificationsData = [
    {
      head: man,
      Source: true,
      name: 'Brian Tylor',
      time: 'a minute ago',
      noticeContent: 'Change an issues from “In progress” to “Review”',
    },
    {
      head: man,
      Source: false,
      name: 'Roy Marker',
      time: 'a minute ago',
      noticeContent: 'Joined the Substance group.',
    },
  ]
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
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
          {FAQsData.map((item, index) => {
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
                  >
                    <Typography sx={{ width: '80%', flexShrink: 0 }}>
                      {item.title}
                      <Button variant="outlined" className="btn">
                        subscribe
                      </Button>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
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
                                  <div className="noticeContent">
                                    {item.noticeContent}
                                  </div>
                                  {item.Source ? (
                                    <div className="Source">
                                      <SourceIcon className="Icon"></SourceIcon>
                                      <span>Substance Digital Branding </span>
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            )
          })}
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
                  />
                </Box>
              </div>
              <div className="btn">
                <Button variant="outlined">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

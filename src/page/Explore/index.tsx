import React from 'react'
import PurpleHead from '../../compoment/PurpleHead'
import './index.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import LeakAddIcon from '@mui/icons-material/LeakAdd'
import Headers from '../../assets/header/man.png'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import TocIcon from '@mui/icons-material/Toc'

export default function Find() {
  const figureOutData = [
    {
      icon: <LeakAddIcon></LeakAddIcon>,
      title: 'What is Substance',
      personnel: 'Don Erickson,Linnie Rios,Rosalie Harrington',
      iconArr: [
        { img: Headers },
        { img: Headers },
        { img: Headers },
        { img: Headers },
      ],
      articles: '6',
      concent:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
    {
      icon: <PersonalVideoIcon></PersonalVideoIcon>,
      title: 'What is Substance',
      personnel: 'Don Erickson,Linnie Rios,Rosalie Harrington',
      iconArr: [{ img: Headers }],
      articles: '6',
      concent:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
    {
      icon: <TocIcon></TocIcon>,
      title: 'What is Substance',
      personnel: 'Don Erickson,Linnie Rios,Rosalie Harrington',
      iconArr: [
        { img: Headers },
        { img: Headers },
        { img: Headers },
        { img: Headers },
      ],
      articles: '6',
      concent:
        'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.',
    },
  ]
  return (
    <div>
      <PurpleHead></PurpleHead>
      <div className="TeamBigBox">
        <div className="backGround">
          <div className="Auto">
            <div className="Title">How can we help?</div>
            <div className="SearchIcon">
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Search for articles…"
                  variant="standard"
                  fullWidth
                />
              </Box>
            </div>
            <div className="PopularBox">
              Popular sections: Getting Started, Billing and Plans, Funnels
            </div>
          </div>
        </div>
        <div className="figureOutBox">
          {figureOutData.map((item) => {
            return (
              <div className="figureOut">
                <div className="iconBox">
                  <div className="icon">{item.icon}</div>
                </div>
                <div className="contentBox">
                  <div className="title">{item.title}</div>
                  <div className="content">{item.concent}</div>
                  <div className="articlesBigBox">
                    <div className="TotalBox">
                      <div className="Total">
                        {item.iconArr.map((iconItem, iconIndex) => {
                          if (iconIndex > 2) {
                            return
                          }
                          return <img src={iconItem.img} alt="" />
                        })}
                      </div>
                      <div className="Written">
                        <span className="By">Written by</span>
                        <span>{item.personnel}</span>
                      </div>
                    </div>
                    <div className="articles">{item.articles}articles</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

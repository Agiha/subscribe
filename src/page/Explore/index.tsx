import React, { useEffect, useState } from 'react'
import Header from '../../compoment/Header'
import './index.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import LeakAddIcon from '@mui/icons-material/LeakAdd'
import Headers from '../../assets/header/man.png'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import TocIcon from '@mui/icons-material/Toc'
import { Button } from 'antd'
import { IconButton } from '@mui/material'
import { getNews } from '../../api/subscribe'
import Loading from '../../compoment/loding'

export default function Find() {
  const [figureOutData, setFigureOutData] = useState<any[]>([])
  const [keyword, setKeyword] = useState('')

  const getNewsBykey = () => {
    getNews({ antistop: keyword, count: 3 }).then((res) => {
      if (res.data.code == 200) {
        setFigureOutData(res.data.data[0][keyword])
        console.log(res.data.data[0][keyword])
      }
    })
  }

  return (
    <div>
      <Header></Header>
      <div className="TeamBigBox">
        <div className="backGround">
          <div className="Auto">
            <div className="Title">Search</div>
            <div className="SearchIcon">
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField
                  id="input-with-sx"
                  label="Search for articles…"
                  variant="standard"
                  fullWidth
                  onChange={(event) => {
                    setKeyword(event.target.value)
                  }}
                />

                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={getNewsBykey}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </div>
            {/* <div className="PopularBox">
              Popular sections: Getting Started, Billing and Plans, Funnels
            </div> */}
          </div>
        </div>
        <div className="figureOutBox">
          {figureOutData.length > 0 ? (
            figureOutData.map((item) => {
              return (
                <div className="figureOut">
                  <div className="iconBox">
                    <div className="icon">
                      <img src={item.authorProfileImageUrl} />
                    </div>
                  </div>
                  <div className="contentBox">
                    <div className="title">{item?.authorUserName}</div>
                    <div className="content">{item.text}</div>
                  </div>
                </div>
              )
            })
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
    </div>
  )
}

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
import { formatTime } from '../../utils/formatTime'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import DirectionsIcon from '@mui/icons-material/Directions'

export default function Find() {
  const [figureOutData, setFigureOutData] = useState<any[]>([])
  const [keyword, setKeyword] = useState('')

  const getNewsBykey = () => {
    if (keyword) {
      return
    }
    getNews({ antistop: keyword, count: 3 }).then((res) => {
      if (res.data.code == 200) {
        console.log(res.data.data[0][keyword])

        setFigureOutData(res.data.data[0][keyword])
        console.log(res.data.data[0][keyword])
      }
    })
  }
  useEffect(() => {
    getNews({ antistop: 'NFT', count: 3 }).then((res) => {
      if (res.data.code == 200) {
        console.log(res.data.data[0]['NFT'])

        setFigureOutData(res.data.data[0]['NFT'])
        console.log(res.data.data[0]['NFT'])
      }
    })
  }, [])

  return (
    <div>
      <Header></Header>
      <div className="TeamBigBox">
        <div className="backGround">
          <div className="Auto">
            <div className="Title">Explore</div>
            <div className="SearchIcon">
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter a search term or a topic"
                  inputProps={{
                    'aria-label': 'Enter a search term or a topic',
                  }}
                  onChange={(event) => {
                    setKeyword(event.target.value)
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search"
                  onClick={getNewsBykey}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
        </div>
        <div className="figureOutBox">
          {figureOutData.length > 0 ? (
            <>
              <p className="figureTitle">Recent Tweets</p>
              {figureOutData.map((item) => {
                return (
                  <div className="noticeBox">
                    <div className="Img">
                      <img src={item.authorProfileImageUrl} alt="" />
                    </div>
                    <div className="contentBox">
                      <div className="nameAndTime">
                        <div className="Name">@{item.authorUserName}</div>
                        <div className="Time">
                          {formatTime(
                            new Date(item.createdAt).getTime(),
                            'Y-M-D H:M:S'
                          )}
                        </div>
                      </div>
                      <div className="content">
                        <div className="noticeContent">{item.text}</div>
                      </div>
                    </div>
                  </div>
                  //   <div className="figureOut">
                  //     <div className="iconBox">
                  //       <div className="icon">
                  //         <img src={item.authorProfileImageUrl} />
                  //       </div>
                  //     </div>
                  //     <div className="contentBox">
                  //       <div className="title">{item?.authorUserName}</div>
                  //       <div className="content">{item.text}</div>
                  //     </div>
                  //     <div className="articles">
                  //       {formatTime(
                  //         new Date(item.createdAt).getTime(),
                  //         'Y-M-D H:M:S'
                  //       )}
                  //     </div>
                  //   </div>
                )
              })}
            </>
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
    </div>
  )
}

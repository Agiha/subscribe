import React from 'react'
import Header from '../../compoment/Header'
import './index.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import man from '../../assets/header/man.png'
import Ovals from '../../assets/header/Ovals.png'
import blackMan from '../../assets/header/blackMan.png'
import User from '../../assets/header/User.png'
import Oval from '../../assets/header/Oval.png'
import PersonIcon from '@mui/icons-material/Person'
export default function Find() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <div>
      <Header></Header>
      <div className="ContactUsBigBox">
        <div className="backGround">
          <div className="Auto">
            <div className="function">
              <div className="TitleBox">
                <div className="Title">Contact Us</div>
                <div className="Content">
                  Questions, bug reports, feedback — we're here for it all.
                </div>
              </div>
              <div className="TopicBigBox">
                <div className="TopicBox">
                  <div className="title">Topic</div>
                  <div className="SelectBox">
                    <Box sx={{ minWidth: 491 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select a topic
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Select a topic"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className="detailsBox">
                  <div className="title">Can you give us more details?</div>
                  <div className="details">
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': {
                          m: 0,
                          width: '491px',
                          height: '96px',
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Add any additional information we can use to help you"
                        variant="outlined"
                      />
                    </Box>
                  </div>
                </div>
                <div className="DragBox">
                  <div className="Attach">Attach files (optional)</div>
                  <div className="DragAndDrop"></div>
                </div>
              </div>
            </div>
            <div className="backImg">
              <img src={man} className="man" alt="" />
              <img src={Ovals} className="Ovals" alt="" />
              <img src={blackMan} className="blackMan" alt="" />
              <img src={User} className="User" alt="" />
              <img src={Oval} className="Oval" alt="" />
              <PersonIcon className="Icon"></PersonIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

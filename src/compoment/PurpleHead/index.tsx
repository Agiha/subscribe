import React from 'react'
import './index.css'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import LeakAddIcon from '@mui/icons-material/LeakAdd'

export default function PurpleHead() {
  return (
    <div className="PurpleHeadBigTop">
      <div className="HeaderBox">
        <div className="HeaderLeftBox">
          <div className="LogoBox">
            <LeakAddIcon className="Icon"></LeakAddIcon>
            <span>Subscribe</span>
          </div>
          <div className="OptionsIconBox">
            <HashRouter>
              <Link to={'/'}>
                <div className="HomeOptions">
                  <span>Subscribe</span>
                </div>
              </Link>
              <Link to={'/explore'}>
                <div className="HomeOptions">
                  <span>Explore</span>
                </div>
              </Link>
              <Link to={'/faq'}>
                <div className="HomeOptions">
                  <span>FAQ</span>
                </div>
              </Link>
            </HashRouter>
          </div>
        </div>

        <div className="personalBigBox">
          <div className="personalBox">Sign in</div>
          <div className="SignUpBox">Sign up</div>
        </div>
      </div>
    </div>
  )
}

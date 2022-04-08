import React, { useState } from 'react'
import './index.css'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import {
  ViewModule,
  MarkUnreadChatAlt,
  Timelapse,
  Assignment,
  PageviewSharp,
} from '@mui/icons-material'
import Logo from '../../assets/header/Logo.svg'
import HeaderMan from '../../assets/APISlogo.png'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import LeakAddIcon from '@mui/icons-material/LeakAdd'
import { useWeb3React } from '@web3-react/core'
import { useEagerConnect } from '../../utils/hook'
import MetamaskConnect from '../MetamaskConnect'

export default function HeaderBox() {
  let activeChain = null
  const { account, chainId, deactivate } = useWeb3React()
  const [isShowModal, setIsShowModal] = useState(false)
  const triedEager = useEagerConnect()

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
              <Link to={'/'}>
                <div className="HomeOptions">
                  <span>Explore</span>
                </div>
              </Link>
              <Link to={'/subscribe'}>
                <div className="HomeOptions">
                  <span>Subscribe</span>
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
          <MetamaskConnect triedEager={triedEager} />
        </div>
      </div>
    </div>
  )
}

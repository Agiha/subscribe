// App.js

import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from '@ethersproject/providers'
import { useEagerConnect, useInactiveListener } from './utils/hook'

import './App.css'
// import ConnectChain from './compoment/walletButtoon'
// import Editingtwo from './page/page_body/table/NTF-Trendings';
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layouts from './compoment/layout'
import './utils/rem'

import ContactUs from  './page/ContactUs'
import Product from  './page/Product'
import AboutUs from  './page/AboutUs'
import Team from  './page/Team'
import MyTask from  './page/MyTask'
function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 5000
  return library
}

function App() {
  const triedEager = useEagerConnect()

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layouts>
        {/* <Home></Home> */}
      <HashRouter>
         <Switch>
           <Route path="/" exact component={Product}></Route>
           <Route path="/AboutUs" exact component={AboutUs}></Route>
           <Route path="/Product" exact component={Product}></Route>
           <Route path="/Team" exact component={Team}></Route>
           <Route path="/ContactUs" exact component={ContactUs}></Route>
         </Switch>
       </HashRouter>
      </Layouts>
    </Web3ReactProvider>
  )
}

export default App

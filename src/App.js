import React, { memo } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";


import Header from '@/pages/header'
import store from "@store/index"
import Routes from '@router/index';

import HomePage from '@pages/test'

import Language from '@/common/lang/language'

export default memo(function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>

  )
})
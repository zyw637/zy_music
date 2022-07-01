import React, { memo } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";

import Header from '@/pages/header'
import store from "@store/index"
import Routes from '@router/index';

export default memo(function App() {

  return (
    <Provider store={store}>
      <div className="wrap-v1">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>

  )
})
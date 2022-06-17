import React, { memo } from 'react';

import { Provider } from "react-redux"
import store from "@store"

import HomePage from '@pages/test'
export default memo(function App() {

  console.log(123123)
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>

  )
})
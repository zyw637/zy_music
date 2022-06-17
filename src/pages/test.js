import { Button } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAddAction } from '@/store/testStore/actions'

export default memo(function HomePage() {

  const dispatch = useDispatch();

  const { number } = useSelector(state => ({
    number: state.testReducer.n,
  }), shallowEqual)

  return (
    <>
      <div>{number}</div>
      <Button onClick={() => { dispatch(getAddAction(5)) }}>
        Add 5
      </Button>
    </>
  )
})
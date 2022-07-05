import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { PlayListCover } from '@components/ui'
import { getPlayListAction } from "@store/homePage/actionCreator";

import { PlanListWrapper, RowStyle } from './style'

export default memo(function PlayList() {
  //redux hooks
  const dispatch = useDispatch();

  const { playLists } = useSelector(state => ({
    playLists: state.homePageReducer.playLists,
  }), shallowEqual)

  useEffect(() => {
    dispatch(getPlayListAction(10))
  }, [dispatch])

  return (
    <PlanListWrapper>
      {rowOfList(playLists.slice(0, 5))}
      {rowOfList(playLists.slice(5, 10))}
    </PlanListWrapper>
  )
})


const rowOfList = (list = []) => {
  return <RowStyle>
    {list.map((item) => {
      return <PlayListCover key={item.id} imgUrl={item.coverImgUrl} name={item.name} />
    })}
  </RowStyle>
}

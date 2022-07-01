import MyNavlink from '@/components/routers/MyNavlink';
import React, { memo } from 'react';

import { CoverWrapper } from './style'

export default memo(function PlayListCover(props) {
  const { imgUrl } = props
  return (
    <CoverWrapper>
      <div className='img'>
        <MyNavlink to="/discover/playlist/:playlist">
          <img src={imgUrl} alt="" />
        </MyNavlink>
      </div>
      <div className='text'>

      </div>
    </CoverWrapper>
  )
})

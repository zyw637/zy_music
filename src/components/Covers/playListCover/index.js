import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleOutlined } from "@ant-design/icons";
import { getSizeImage } from '@utils'

import { CoverWrapper } from './style'

export default memo(function PlayListCover(props) {
  const { imgUrl, name } = props
  return (
    <CoverWrapper>
      <Link to="/discover/playlist/:playlist" id="RouterNavLink" >
        <div className='img'>
          <button className="player" > <PlayCircleOutlined style={{ fontSize: "60px" }} /></button>
          <img src={getSizeImage(imgUrl, 200)} alt="" />
        </div>
        <div className='text'>
          <p className='font-style' href="/#">{name}</p>
        </div>
      </Link>
    </CoverWrapper>
  )
})

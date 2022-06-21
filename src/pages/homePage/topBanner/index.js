import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from 'antd';
import _ from 'lodash'

import { getBannerAction } from "@store/homePage/actionCreator";
import { TopBannerWrapper, Banner, BannerControl } from "./style";



export default memo(function TopBanner() {

  //redux hooks
  const dispatch = useDispatch();

  const { topBanner } = useSelector(state => ({
    topBanner: state.homePageReducer.topBanner,
  }), shallowEqual)

  // react hooks
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  const bannerRef = useRef()
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage = _.get(topBanner, `${currentIndex}.imageUrl`) + "?imageView&blur=40x20"

  return (
    <TopBannerWrapper bgImage={bgImage} className="wrap-v1">
      <div className="banner wrap-v2">
        <Banner>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanner.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} onClick={() => {
                      window.open(item.url)
                    }} />
                  </div>
                )
              })
            }
          </Carousel>
        </Banner>

        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  )
})
import React, { memo } from 'react'

import { SectionWrapper } from "./style";

export default memo(function MySection(props) {

  const { title, subTitle, children, more: { moreText, url } } = props;

  return (<div style={{ marginTop: "20px"}}>
    <SectionWrapper className="wrap-v1" >
      <div className='left'>
        <h3 className="title">{title}</h3>
        <div style={{ position: "relative" }}><p className="more">{subTitle}</p></div>
      </div>
      <div className='right'>
        <div ><a href={url ? url : "asd"} className="more">{moreText}</a></div>
      </div>
    </SectionWrapper>

    {children && <>{children}</>}
  </div>)
})
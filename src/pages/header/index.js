import React, { memo } from 'react';
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeadLift, HeadMiddle, HeadRight } from "./style";
import { Menu, Dropdown } from 'antd';

import Language from '@/common/lang/language'
import { MyNavLink } from '@/components/base'

export default memo(function Header() {
  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeadLift >
          <a className="logo sprite_01" href="#/">网易云音乐</a>
        </HeadLift>
        <HeadMiddle>
          <MyNavLink to={"/"} name={Language.cn("首页").en("HomePage").getMessage()} ext={{ exact: "true" }} />
          <MyNavLink to={"/discover"} name={Language.cn("发现").en("Discover").getMessage()} />
          <MyNavLink to={"/library"} name={Language.cn("音乐库").en("Library").getMessage()} />
        </HeadMiddle>
        <HeadRight>
          <Input className="search" placeholder={Language.cn("音乐/视频/电台").en("Music/Mv/Radio").getMessage()} prefix={<SearchOutlined />} />
          <CLanguage />
        </HeadRight>
      </div>
    </HeaderWrapper>
  )
})



const CLanguage = memo(() => {

  const items = [
    {
      label: <p onClick={() => {
        sessionStorage.setItem("language", "CN")
        window.location.reload()
      }}>{Language.cn("中文").en("Chinese").getMessage()}</p>,
      key: "cn"
    },
    {
      label: <p onClick={() => {
        sessionStorage.setItem("language", "EN")
        window.location.reload()
      }} >{Language.cn("英文").en("English").getMessage()}</p>,
      key: "en"
    }
  ]
  const menu = <Menu items={items} />

  return <Dropdown overlay={menu}>
    <div style={{ width: "80px" }}>
      <img src={require("@/assets/icon/language.png")} width="20px" height="20px" style={{ marginLeft: "30px" }} alt="" />
    </div>
  </Dropdown>
})


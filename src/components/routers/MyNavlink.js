import { NavLink } from "react-router-dom";
import React, { memo } from 'react';

export default memo(function MyNavLink(props) {
  const { to, name, ext } = props
  const newExt = ext ? { ...ext } : {}
  return <div className="select-item" >
    <NavLink to={to} className={({ isActive }) => isActive ? "activeLink" : undefined} {...newExt}>{name}</NavLink>
  </div >
})

import { NavLink } from "react-router-dom";


const MyNavLink = (to, name, ext) => {
  const newExt = ext ? { ...ext } : {}
  return <div className="select-item" >
    <NavLink to={to} className={({ isActive }) => isActive ? "activeLink" : undefined} {...newExt}>{name}</NavLink>
  </div >
}

export { MyNavLink };
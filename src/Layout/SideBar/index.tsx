import React, { useEffect, useState } from 'react'
import "./sidebar.scss"
import MenuItem from "./MenuItem"
import { listMenuSidebar } from "../../Common/constants/sidebar.constants"
import {TypeMenuSidebar} from "../../Models/sidebar.models"
const SideBar = () => {
  return (
    <div className="sidebar-wraper">
      <ul className='list-item'>
        {
          listMenuSidebar.map((item: TypeMenuSidebar) => (
            <MenuItem item={item} />
          ))
        }
      </ul>
    </div>
  )
}

export default SideBar
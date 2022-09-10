import { FC, ReactNode } from 'react'
import { Box } from "@mui/material"
import Header from "./Header"
import SideBar from "./SideBar"
import { Outlet } from "react-router"
import "./layout.scss"
interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Box className='main-app'>
          <Box className="main-item__sidebar">
            <SideBar />
          </Box>
          <Box className="main-item__content">
            {children || <Outlet />}
          </Box>
        </Box>
      </main>
    </>
  )
}

export default Layout
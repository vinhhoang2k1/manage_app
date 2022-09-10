import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import "./auth.scss"
type Props = {
  children: ReactNode
}
const Authen = ({ children }: Props) => {
  return (
    <div className='auth'>
      {children || <Outlet />}
    </div>
  )
}

export default Authen
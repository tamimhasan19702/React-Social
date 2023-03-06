import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes';

function Layout() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  if(pathname.startsWith("/protected")){
    navigate(LOGIN)
  }
  },[pathname])

  return (
    <>
    this is good: 
    <Outlet/>
    </>
  )
}

export default Layout
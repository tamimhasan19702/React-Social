import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../navbar/Navbar';

function Layout() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {user,isLoading} = useAuth();

  useEffect(() => {
  if(pathname.startsWith("/protected") && !user){
    navigate(LOGIN)
  }
  },[pathname,user,navigate])

  if(isLoading) return "Loading ..."

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout
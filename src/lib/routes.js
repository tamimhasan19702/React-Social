import {createBrowserRouter} from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../components/Dashboard/Dashboard';


export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const DESHBOARD = "/protected/dashboard";

export const router = createBrowserRouter([
 {path: ROOT, element: 'Public Root'},
 {path: LOGIN, element: <Login />},
 {path: REGISTER, element: <Register />},
 {path: PROTECTED, element: "this is a string", children: [
    {
      path: Dashboard,
      element: 'Dashboard',
   }
 ]},
])
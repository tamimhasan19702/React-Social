import {createBrowserRouter} from 'react-router-dom';

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
 {path: ROOT, element: 'Public Root'},
 {path: LOGIN, element: 'Public Root2'},
 {path: REGISTER, element: 'Public Root3'},
])
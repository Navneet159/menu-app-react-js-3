import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <h1>Welcome to the Application </h1>
            <Link to={'user/login'}>Do You Have Account? </Link>
            <Link to={'user/register'}>Are You New Here? </Link>
            <Link to={'user/forget-password'}>Do you miss your Password? </Link>
            <Outlet></Outlet>
        </div>
    )
}

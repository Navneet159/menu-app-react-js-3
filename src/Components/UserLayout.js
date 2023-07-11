import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function UserLayout() {
    const location = useLocation();
    return (
        <>
            {location.pathname == 'user' ? <div>UserLa
                yout </div > : <></>}
            <Outlet></Outlet>
        </>
    )
}

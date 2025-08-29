import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1>Navbar root</h1>
            {children}
        </div>
    )
}

export default Layout
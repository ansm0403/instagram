'use client'

import { SessionProvider } from "next-auth/react"

type Props = {
    children : React.ReactNode;
}

export default function AuthContext({children} : Props){
    return ( 
    <SessionProvider basePath="localhost:3000">
        {children}
    </SessionProvider>
    )
}
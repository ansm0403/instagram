'use client'

import React from 'react'
import HomeIcon from '../ui/icons/HomeIcon'
import SearchIcon from '../ui/icons/SearchIcon'
import Link from 'next/link'
import HomeFillIcon from '../ui/icons/HomeFillIcon'
import SearchFillIcon from '../ui/icons/SearchFillIcon'
import NewIcon from '../ui/icons/NewIcon'
import NewFillIcon from '../ui/icons/NewFillIcon'
import { usePathname } from 'next/navigation'
import ColorButton from '../ui/ColorButton'
import {useSession, signIn, signOut} from 'next-auth/react'
import Avatar from './Avatar'

const menu = [
  {
    href : '/', 
    icon : <HomeIcon />,
    clickedIcon : <HomeFillIcon />
  },
  {
    href : '/search', 
    icon : <SearchIcon />,
    clickedIcon : <SearchFillIcon />
  },
  {
    href : '/new', 
    icon : <NewIcon />,
    clickedIcon : <NewFillIcon />
  },
]

export default function Navbar() {
  const pathname = usePathname();
  const {data : session } = useSession();
  const user = session?.user

  return (
    <div className = 'flex justify-between items-center px-6'>
            <Link href = "/">
              <h1>instagram</h1>
            </Link>
            <nav>
              <ul className = 'flex gap-4 p-4 items-center'>
                {
                  menu.map((menu)=>{
                    return(
                      <li key = {menu.href}>
                        <Link href = {menu.href} className = "">
                        {
                          pathname === menu.href ? menu.clickedIcon : menu.icon
                        }
                        </Link>
                      </li>
                    )
                  })
                }
                {user && (
                  <li>
                    <Link href = {`/user/${user.username}`}>
                      <Avatar image={user.image} size = 'small' highlight />
                    </Link>
                  </li>
                )}
                  <li>
                  {
                    session ? 
                    <ColorButton text = 'Sign out' onClick={()=>{signOut()}}></ColorButton>
                    :
                    <ColorButton text = 'Sign in' onClick={()=>{signIn()}}></ColorButton>
                  }
                  </li>
                </ul>
            </nav>
    </div>
  )
}

import React from 'react'
import UserSearch from '../components/UserSearch'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic';

export const metadata : Metadata = {
  title : 'user search',
  description : 'search user to follow'
}

export default function Search() {
  return (
    <UserSearch />
  )
}

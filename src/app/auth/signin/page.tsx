import React from 'react'
import { authOptions } from "@/app/auth/authOptions";
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { getProviders } from 'next-auth/react';
import Signin from '@/app/components/Signin';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title : 'Sign In',
  description : 'Sign up or Sign in to instagram'
}


type Props = {
  searchParams : {
    callbackUrl : string;
  }
}

export default async function SignPage({searchParams : { callbackUrl }} : Props) {
  const session = await getServerSession(authOptions)
  
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  
  return (
  <section className='flex justify-center mt-[30%]'>
    <Signin providers={providers} callbackUrl = {callbackUrl ?? '/'} ></Signin>
  </section>
  )
}

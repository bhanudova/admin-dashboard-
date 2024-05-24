"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const SignInComponent = () => {
    const router = useRouter();
    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='shadow-md shadow-green-600 p-10 rounded-lg w-[30%] mx-auto'>
                <h2 className='text-center font-semibold text-2xl mb-4'>Sign Page</h2>
                <dl>
                    <dt className='font-semibold'>User Name</dt>
                    <dd className='mt-1'><input value={'demo@gmail.com'} type="text" className='border-2 border-green-200 p-1.5 rounded-md focus:outline-none w-full' /></dd>
                    <dd className='mt-5 font-semibold'>Password</dd>
                    <dd className='mt-1'><input value={'demo@123'} type="password" className='border-2 border-green-200 p-1.5 rounded-md focus:outline-none w-full' /></dd>
                </dl>
                <Link href='/admin'>
                    <button className='bg-emerald-600 rounded-md p-2 w-full text-white font-semibold mt-4'>SignIn</button>
                </Link>
            </form>
        </div>
    )
}

export default SignInComponent
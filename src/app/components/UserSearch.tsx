'use client'
import React, { FormEvent, useState } from 'react'
import useSWR from 'swr';
import { SearchResultUser } from '../model/user';
import { GridLoader } from 'react-spinners';
import UserCard from './UserCard';
import useDebounce from '../hook/debounce';

export default function UserSearch() {
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce(keyword);
    const {data : searchResult, isLoading, error} = useSWR<SearchResultUser[]>(`api/search/${debouncedKeyword}`)
    console.log(searchResult);
    
    const onSubmit = (e : FormEvent) => {
        e.preventDefault();
    }
    return (
        <section className='w-full max-w-xl flex flex-col items-center my-4'>
            <form className = 'w-full mb-6' onSubmit={onSubmit}>
                <input 
                    className='w-full text-md p-2 outline-none border border-gray-400'
                    type = "text" 
                    autoFocus 
                    placeholder='input name or username'
                    value = {keyword}
                    onChange = {(e)=>setKeyword(e.target.value)}
                />
            </form>
            {error && <p>에러 발생</p>}
            {isLoading && <GridLoader />}
            {!isLoading && !error && searchResult?.length === 0 && <p>검색된 사용자가 없음</p>}
            <ul className='w-full p-4'>
                {searchResult && searchResult.map(user => 
                    <li key = {user.username}>
                        <UserCard user={user} />
                    </li>
                )}
            </ul>
        </section>
    )
}

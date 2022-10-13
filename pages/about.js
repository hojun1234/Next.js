import React from 'react'
import Head from 'next/head'
export default function  Aboutpage () {
    const name = '김호준'
    return(
        <div>
        <Head>
        <title> Home - Next Tutorial</title>
        </Head>
            <h1>About page</h1>
            <p>안녕하세요, {name}님! </p>
        </div>
    )
}





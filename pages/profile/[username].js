import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {
    const router = useRouter()
    console.log(router.query)
    const { username } = router.query
  return (
    <div>
        <h1>User Detail Page - {username} </h1>
        <p>Dynamic routing</p>
    </div>
  )
}

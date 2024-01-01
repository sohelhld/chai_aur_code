import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}= useParams()
  return (
    <div className='bg-blue-700 text-white text-3xl text-center'>UserID:- {userId}</div>
  )
}

export default User
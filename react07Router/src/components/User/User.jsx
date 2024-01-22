

import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-indigo-500 text-black text-3xl text-center py-5'>
        User page : {userid}</div>
  )
}

export default User

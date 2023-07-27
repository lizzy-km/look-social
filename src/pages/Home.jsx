import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { useUserQuery } from '../Redux/Api/User'

const Home = () => {
  const user = useUserQuery()
  console.log(user);
  return (
    <div>
        <UserButton/>
    </div>
  )
}

export default Home
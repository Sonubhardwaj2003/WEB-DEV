import React from 'react'
import NavBar from './NavBar'
import LeftSec from './leftSec'
import RightSec from './RightSec'

function Page1() {

  return (
    <>
    <div className='bg-white flex flex-col p-5 rounded-br-sm'>
       <div>
        <NavBar/>
       </div>
      <div className='w-5xl  h-fit flex wrap gap-5'>
        <div className='w-3/12'>
            <LeftSec/>
        </div>

        <div className='w-9/12'>
            <RightSec/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page1
import React from 'react'
import Page1 from '../Section1/Page1'

function Main() {

  return (
    <>
      <div className='bg-blue-100 w-10/12 min-h-screen flex flex-col items-center'>
        <div className='flex flex-wrap gap-20 pb-20 pt-20'>
            <img src="https://tse4.mm.bing.net/th/id/OIP.kLuUR5ceZb5QwOEi1-8BbwHaE8?pid=Api&P=0&h=180" 
            className='w-30 h-30 rounded-full border-gray-500"' alt="" />

            <div className='flex flex-col align-middle'>
                <h1 className='font-bold text-5xl'>PRESENTATION DESIGN </h1>
                <h3 className='font-medium text-gray-500 text-3xl'>Email : Sonu@abc.in</h3>
            </div>
        </div>

        <div>
          <Page1/>
        </div>
      </div>
    </>
  )
}

export default Main
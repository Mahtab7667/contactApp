import React from 'react'
const Navbar = () => {



  return (
    // <div className='h-[60px] bg-white my-4 rounded-lg flex justify-center items-center gap-2 text-xl font-medium'>
    //         <img src="/logos_firebase.svg"/>
    //         <h1>Firebase Contact</h1>
    // </div>

    <div className='h-[60px] bg-gradient-to-r from-blue-500 to-purple-600 my-4 rounded-lg flex justify-center items-center gap-2 text-xl font-semibold text-white shadow-lg'>
    <img src="/logos_firebase.svg" className='h-8 w-8'/>
    <h1 className='tracking-wide'>Smart Contact Manager</h1>
    </div>

  )
}

export default Navbar
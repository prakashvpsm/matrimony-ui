import React from 'react'

const menus = [
  {
    name : 'Home',
    path :''
  },
  {
    name : 'Top Matches',
    path :''
  },
  {
    name : 'New Profiles',
    path :''
  },
  {
    name : 'Inbox',
    path :''
  },
  {
    name : 'Settings',
    path :''
  }
]

export default function Header() {
  return (
    <div className='h-20 bg-white w-full flex items-center px-10'>
      <div className='text-primary text-3xl font-bold cursor-pointer'>/Matrimonial/</div>
      <div className='mx-auto flex justify-end w-full items-center gap-10 text-gray-500 text-md'>
        <div className='mx-auto flex justify-end w-full items-center gap-10 text-gray-500 text-mdLarge'>
          {
            menus.map((menu) => {
              return <div className='cursor-pointer hover:text-primary'>{menu.name}</div>
            })
          }
        </div>
        <div className='w-14 h-14 rounded-full bg-secondary shadow cursor-pointer'></div>
      </div>
    </div>
  )
}

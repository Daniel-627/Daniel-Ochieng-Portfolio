import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='flex flex-row py-5 justify-between px-10'>
      <div>
        <p>2024. All Rights Reserved. Designed and Coded with Love</p>
      </div>
      <div>
        <ol className='flex flex-row'>
          <li className='px-2'>X(Twitter)</li>
          <li className='px-2'>LinkedIn</li>
          <li className='px-2'>Github</li>
          <li className='px-2'>Dribble</li>
          <li className='px-2'>Behance</li>
          <li className='px-2'>Instagram</li>
          <li className='px-2'>Email</li>
        </ol>
      </div>
      <div>
        <p>Back to Top</p>
      </div>
    </div>
  )
}
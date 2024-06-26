import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='flex flex-row py-5 justify-between px-10'>
      <div>
        <p>Daniel Ochieng</p>
      </div>
      <div>
        <ol className='flex flex-row'>
          <li className='px-5'>About Me</li>
          <li className='px-5'>My Work</li>
        </ol>
      </div>
      <div>
        <p>Let's Talk</p>
      </div>
    </div>
  )
}
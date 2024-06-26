import React from 'react'

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='pb-10 flex flex-row'>
      <div className='flex flex-1 pr-4'>
        <h1 className='text-5xl font-extralight'>Let's talk about a project, collaboration or an idea you may have</h1>
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='py-2'>
          <button>Send me an email </button>
        </div>
        <div className='py-2'>
          <p>Call me on: +254745253664</p>
        </div>
        <div className='py-2'>
          <button>Let's Talk on Whatsapp</button>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import Socials from './lib/Socials'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-row py-20 mb-10 px-15'>
      <div className='flex flex-1 flex-col pt-20 justify-start'>
          <div className='pb-10'>
            <h1 className='text-5xl'>I'm a Kenyan-Based Designer and Developer.<br/>I craft exquisite experiences with great people.</h1>
          </div>
          <div>
            <p>I make things on the internet. From odd little side projects to comprehensive design overhauls for organisations.</p>
          </div>
      </div>
      <div className='flex flex-1 flex-col justify-center items-center'>
        <Socials />
      </div>
    </div>
  )
}
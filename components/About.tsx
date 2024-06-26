import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='py-20 flex flex-col'>
      <div className='flex flex-row'>
        <div className='flex flex-1 flex-col'>
          <h2 className='pb-5 text-xl font-bold'>About Me</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illum, quo optio quisquam excepturi placeat qui unde amet iure distinctio omnis ab laborum, nemo dicta, provident totam nobis architecto quas.</p>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <ol>
            <li>Figma </li>
            <li>ReactJs </li>
            <li>Tailwind</li>
            <li>TypeScript </li>
            <li>Sanity.io </li>
            <li>Javascript</li>
          </ol>
        </div>
      </div>
      <div className='flex justify-center items-center py-10'>
        <button>Download my CV</button>
      </div>
    </div>
  )
}
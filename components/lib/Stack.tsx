import React from 'react'
import { AiFillLinkedin, AiOutlineX, AiFillGithub, AiFillDribbbleCircle, } from 'react-icons/ai'
import { BiLogoInstagram } from 'react-icons/bi'
import { FaBehanceSquare } from 'react-icons/fa'

type Props = {}

export default function Stack({}: Props) {
  return (
  <div className='flex flex-col justify-center items-center'>
    <div className='grid grid-cols-3 '>
        <ol className='grid grid-cols-3 '>
            <li><AiOutlineX width="20rem" height="20rem"/></li>
            <li><AiFillLinkedin /></li>
            <li><AiFillGithub /></li>
            <li><AiFillDribbbleCircle /></li>
            <li><FaBehanceSquare /></li>
            <li><BiLogoInstagram/></li>
        </ol>
    </div>
  </div>
  )
}
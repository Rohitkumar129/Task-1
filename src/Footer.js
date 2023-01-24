import React from 'react'
import './Footer.css'
import gmail from './mail.png'
import linkedin from './li.png'
import github from './gh.png'
import twitter from'./twet.png'
export default function Footer() {
  return (
    <footer className='foot'>
        <img className='gmail' src={gmail} alt='gmail' loading='lazy'></img>
        <img className='linkedin' src={linkedin} alt='linkedin' loading='lazy'></img>
        <img className='github' src={github} alt='github' loading='lazy'></img>
        <img className='twitter' src={twitter} alt='twitter' loading='lazy'></img>
        <a className='item1' href='\'>code of conduct</a>
        <a className='item2' href='\'>community resources</a>
        <p>Copyright @ 2023 MLH platforms,Inc.</p>
    </footer>
  )
}

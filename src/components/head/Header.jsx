import React from 'react'
import "./header.css"
 
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Blog Vida Saludable</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg" 
        alt="" 
        className="headerImg"/>
    </div>
  )
}

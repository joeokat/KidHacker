import "./Nav.css";
import Image from 'next/image'


export default function Nav(){
  return (
    <div className="nav--container" style={{background: 'var(--blue)'}}>
        <div className="github">
          <a href="https://github.com/joeokat/BusinessCard" 
          target="_blank" 
          rel="noreferrer">
            <Image 
            src='/icons/star.svg'
            alt="star"
            width={24}
            height={24}
            /> Star
          </a>
          
          <a href="https://github.com/joeokat/BusinessCard" 
          target="_blank" 
          rel="noreferrer">
            <Image 
            src='/icons/fork.svg'
            alt="fork"
            width={24}
            height={24}
            /> Fork
          </a>
        </div>
        
        <h3 className="logo">JoeOkat 💙  
          <span> 
            <div className="small">beta version 2.0</div>
          </span>
        </h3>
    </div>
  )
}

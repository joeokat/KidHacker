import "./styles/SocialLink.module.css";
import Image from 'next/image';


export default function SocialLinks() {
    return (
      <div className="flex space-x-4 my-4">
        <a href="https://www.behance.net/joeokat" target="_blank" rel="noopener noreferrer" className="socials">
          <Image 
            src='/icons/behance.svg'
            alt="Social Icons"
            width={24}
            height={24}
            priority
          />
        </a>
        
        <a href="https://www.linkedin.com/in/joeokat" target="_blank" rel="noopener noreferrer" className="socials">
        <Image 
            src='/icons/star.svg'
            alt="Social Icons"
            width={24}
            height={24}
            priority
          />
        </a>

        <a href="https://www.github.com/joeokat" target="_blank" rel="noopener noreferrer" className="socials">
        <Image 
            src='/icons/github.svg'
            alt="Social Icons"
            width={24}
            height={24}
            priority
          />
        </a>

        <a href="https://wa.me/233261430256" target="_blank" rel="noopener noreferrer" className="socials">
        <Image 
            src='/icons/whatsapp.svg'
            alt="Social Icons"
            width={24}
            height={24}
            priority
          />
        </a>

        <a href="https://threads.net/uxjoeokat" target="_blank" rel="noopener noreferrer" className="socials">
        <Image 
            src='/icons/threads.svg'
            alt="Social Icons"
            width={24}
            height={24}
            priority
          />
        </a>
      </div>
    );
  }
  
import Image from 'next/image'
//Components
import SocialLinks from '../components/SocialLinks'
import EmailBtn from '../components/EmailBtn'


export default function Profile() {
  return (
    <div>
      <Image
        src='/assets/profile.png'
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full mb-3"
      />

      <span className='flex place-items-center gap-2'> 
        <h1>Joshua O. Ofosu</h1> <p className='pill rating'> 4.9</p> 
      </span>

      <p>UX Engineer</p>
      
      {/* <SocialLinks /> */}
      
      <p>I craft mobile apps and lightning-fast websites that drive business growth</p>
     
     <EmailBtn />
    </div>
  )
}

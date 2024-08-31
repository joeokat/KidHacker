import "./Profile.css";
import Image from 'next/image'

//Components
import SocialLinks from '../Social/SocialLinks'
import EmailBtn from '../Buttons/EmailBtn'


export default function Profile() {
  return (
    <div>
      <Image
        src='/assets/profile.png'
        alt="Profile Picture"
        width={100}
        height={100}
        className="profile-image"
      />

      <span className='profile-name'> 
        <h2>Joshua O. Ofosu</h2> <p className='pill-rating'> 4.9</p> 
      </span>

      <p className="job-title">UX Designer</p>
      
      <SocialLinks />
      
      <p>I craft mobile apps and lightning-fast websites that drive business growth</p>
     
     <EmailBtn />
    </div>
  )
}

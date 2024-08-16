import Image from 'next/image';

export default function EmailBtn() {
  return (
    <div>
      <a 
        href="mailto:ofosujoshua73@yahoo.com?subject=Service%20Quote%20Inquiry&body=Hello%20Sarah,%0D%0A%0D%0AI%20am%20interested%20in%20getting%20a%20quote%20for%20the%20following%20service(s):%0D%0A%0D%0A-%20UI/UX%20Design%0D%0A-%20Web%20App%20Development%0D%0A%0D%0ACould%20you%20please%20provide%20more%20details%20on%20your%20pricing%20and%20the%20process?%0D%0A%0D%0AThank%20you!"
      >
        <button className='btn-primary'>
          <Image 
            src='./icons/email.svg'
            alt='Email Icon'
            width={16}
            height={16}
          />
          Start a project
        </button>
      </a>
    </div>
  );
}

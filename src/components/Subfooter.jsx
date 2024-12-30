import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Subfooter = () => {
  return (
    <div className='bg-[#161616] py-8 flex flex-col justify-center'>
       <div className='bg-[#161616] py-8 flex flex-col justify-center'>
  <div className='flex gap-8 justify-center py-4 pb-8'>
    <a href='https://www.facebook.com/profile.php?id=61561511814180' target="_blank" rel="noopener noreferrer">
      <Image className="text-white" src="/facebook.svg" alt="Facebook Icon" width={30} height={30} />
    </a>
    <a href='https://www.instagram.com/myastro24/' target="_blank" rel="noopener noreferrer">
      <Image className="text-white" src="/instagram.svg" alt="Instagram Icon" width={30} height={30} />
    </a>
    <a href='https://x.com/MyAstro24' target="_blank" rel="noopener noreferrer">
      <Image className="text-white" src="/x.svg" alt="Twitter/X Icon" width={30} height={30} />
    </a>
    <a href='https://www.youtube.com/playlist?list=PLcCe_NAVZblG9Gfsr5BAPOzPJeluGks-w' target="_blank" rel="noopener noreferrer">
      <Image className="text-white" src="/youtube.svg" alt="YouTube Icon" width={30} height={30} />
    </a>
    <a href='https://www.linkedin.com/company/myastroatd/?viewAsMember=true' target="_blank" rel="noopener noreferrer">
      <Image className="text-white" src="/linkedin.png" alt="Linkedin Icon" width={30} height={30} />
    </a>
  </div>
</div>


        <p className="text-[#c9cfd4] text-center m-auto px-5">
  © Copyright 2024 by ATD RETAILS AND DIGITAL NETWORK PRIVATE LIMITED. All right Reserved - Design By{" "}
  <a 
    href="https://www.alltimedata.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 hover:underline"
  >
    www.alltimedata.com
  </a>
  </p>
      </div>
  )
}

export default Subfooter

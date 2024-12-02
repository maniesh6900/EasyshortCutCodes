import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
        <div className='relative h-screen'>
            <div className='absolute bottom-0 w-screen h-10 bg-amber-500 p-2 '>
                <div className='flex pl-4 h-full w-1/4'>
                    <p className='text-white'>© 2023 All rights reserved.</p>
                    <div className='text-white w-1/5 ml-14 flex justify-around'>
                    <Link 
                    to={"https://www.instagram.com/maniesh_69x"}>
                      <Instagram />
                    </Link>
                    <Link 
                    to={"https://www.facebook.com/manish.ahir8822"}>
                    <Facebook />
                    </Link>
                    <Link 
                    to={"https://github.com/maniesh6900"}>
                    <Github />
                    </Link>
                    <Link to={"https://x.com/Manish99493540"}>
                      <Twitter />
                    </Link>
                   
                      
                      
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer
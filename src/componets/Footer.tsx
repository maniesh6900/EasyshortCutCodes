import { Facebook, Github, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <>
        <div className='relative h-screen'>
            <div className='absolute bottom-0 w-screen h-10 bg-amber-500 p-2 '>
                <div className='flex pl-4 h-full w-1/2'>
                    <p className='text-white'>© 2023 All rights reserved.</p>
                    <div className='text-white w-1/12  ml-14 flex justify-around'>
                      <Instagram  />
                      <Facebook />
                      <Github />
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer
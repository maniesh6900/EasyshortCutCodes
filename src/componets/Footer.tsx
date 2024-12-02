import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
const navigate = useNavigate()
  return (
    <>
        <div className='relative h-screen'>
            <div className='absolute bottom-0 w-screen h-10 bg-amber-500 p-2 '>
                <div className='flex pl-4 h-full w-1/2'>
                    <p className='text-white'>© 2023 All rights reserved.</p>
                    <div className='text-white w-1/12  ml-14 flex justify-around'>
                      <Instagram  onClick={()=>{navigate("https://www.instagram.com/maniesh_69x/")}} />
                      <Facebook onClick={()=>{navigate("https://www.facebook.com/manish.ahir8822")}} />
                      <Github onClick={()=>{navigate("https://github.com/maniesh6900")}}/>
                      <Twitter onClick={()=>{navigate("https://x.com/Manish99493540")}} />
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer
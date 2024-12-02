import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SideMenu = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className=' w-screen'>
            <div className=' m-10 w-2/12 text-center'>
                    <div className=' flex flex-col '>
                        <div className='px-10 py-4 border border-white font-bold bg-amber-500 text-white rounded-lg '>
                            <h1>GET SNIPPIDS</h1>
                        </div>
                        <div className='text-white backdrop-blur-sm cursor-pointer' >
                            <div className='borderClass text-xm flex justify-between pl-4 p-2'
                                onClick={() => navigate("../button")}>
                                <h3>Button</h3>
                                <ArrowRight  />
                            </div>
                            <div className='borderClass text-xm flex justify-between pl-4 p-2 cursor-pointer'
                                onClick={() => navigate("../login-page")}  
                            >
                                <h3>Log-In Page</h3>
                                <ArrowRight  /> 
                            </div>
                            <div className='borderClass  text-xm flex justify-between pl-4 p-2'>
                                <h3>Sign-up Page</h3>
                                <ArrowRight  />
                            </div>
                            <div className='borderClass text-xm flex justify-between pl-4 p-2'>
                                <h3>Navbar Componets</h3>
                                <ArrowRight  />
                            </div>
                        </div>
                    </div>
            </div> 
      </div>    
    </>
  )
}

export default SideMenu
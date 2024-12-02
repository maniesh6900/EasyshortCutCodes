import { Mail, Notebook } from "lucide-react"
import NavBar from "../componets/NavBar"


const About = () => {
  return (<>
        <div className='relative h-screen w-screen'>
            <div className="absolute h-screen w-screen -z-10
                bg-gradient-to-r from-teal-400 to-amber-500
            ">
            </div>
                <NavBar />
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <div className="text-3xl font-bold text-white my-4 ">                    
                    <h1>About The Maker</h1>
                </div>
                <div className='text-xl font-bold text-white    '>
                    <h1>
                        why not ask by yourselvse 
                    </h1>
                </div>
                <div className='text-white my-10'>
                    <div className='my-5 flex mx-4 justify-around'>
                        <Mail />
                        <h3 className='pl-4'
                        >KAJ882626@gmail.com</h3>
                    </div>
                    <div 
                    className='my-5 flex mx-4 '>
                        <Notebook />
                        <h3 className='pl-4'
                        >PORTFOLIO</h3>
                    </div>
                </div>
            </div>
        </div>


  </>)
}

export default About
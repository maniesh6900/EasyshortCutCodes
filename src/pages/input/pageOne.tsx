import { ArrowRightLeft } from "lucide-react"
import { useState } from "react"
import ButtonTwo from "../button/buttonsLayout/buttonTwo"
import Code from "./Code_pageOne"


const PageOne = () => {




    const [password, setPassword] = useState<boolean>()

    const handlePassword = ()=>{
        setPassword(!password)
    }

  return (<>
    <div className='relative h-screen w-screen '>
        <div className='flex  justify-center h-full w-full mt-24  '>

            <div className="w-1/3 h-1/3 p-20 border rounded-lg ">
                <div className='bg-white my-5 rounded-lg py-1' >
                    <input type="text" placeholder="Username" 
                    className='focus:outline-none bg-transparent w-full px-1'
                    />
                </div>
                <div className="bg-white w-full flex justify-between rounded-lg py-1 ">
                    <input type={password ? "text" : "password"} placeholder="Password"
                        className="focus:outline-none bg-transparent w-full px-1 px-1
                        
                        "
                    />
                    <span onClick={handlePassword}><ArrowRightLeft className='p-2'  /></span>
                </div>
                <div className="" >
                    <ButtonTwo />
                </div>
                <div className=' h-1/5 w-full -z-10 h-full'>
                    <Code />
                </div>
            </div>
            </div>
            
       
    </div>
  </>)
}

export default PageOne
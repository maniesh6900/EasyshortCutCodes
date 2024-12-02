import { useNavigate } from "react-router-dom"


const NavBar = () => {
    
const navigate = useNavigate()

  return (
   <>
    <div className=" w-screen  ">
        <div className='w-full flex justify-between p-8  drop-shadow-lg font-shadow-lg font-semibold text-white'>
            <div className="ml-4 text-2xl" 
                onClick={()=>{navigate("../")}}>
                <h4>LOGO</h4>
            </div>
            <div className='flex text-xl cursor-pointer'>
                <div className="mx-4"
                  onClick={()=>navigate('../about')}
                    >
                    <h4 className="drop-shadow-sm" 
                    >About</h4>
                </div>
                <div className="mx-4 cursor-pointer"
                 onClick={()=>navigate('../contact')}>
                    <h4>Contact</h4>
                </div>
                <div className="mx-4 cursor-pointer"
                onClick={()=>navigate('/doc')}>
                    <h4>DOC</h4>
                </div>
            </div>
        </div>
    </div>
   
   </>
  )
}

export default NavBar
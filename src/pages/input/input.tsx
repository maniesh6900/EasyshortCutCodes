import NavBar from "../../componets/NavBar"
import SideMenu from "../../componets/SideMenu"
import Collection from "./Collection"

const Input = () => {
  return (<>
    <div className='h-sscreen w-screen relative'>
      <div className="fixed h-screen w-screen  
            bg-gradient-to-r from-indigo-500 to-orange-500
        ">
        <NavBar />
        <div className="fixed" >
          <SideMenu />
        </div>
        <Collection />
      </div>
    </div>

  </>)
}

export default Input
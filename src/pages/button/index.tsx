import NavBar from "../../componets/NavBar"
import SideMenu from "../../componets/SideMenu"
import Layout_Button from "./Collection_button"



const Layout = () => {
  return (<>
    <div className='relative h-screen w-screen '>
    <div className="fixed h-screen w-screen
      bg-gradient-to-r from-teal-400 to-amber-500">
    </div>       
      <NavBar />
    <div className="fixed" >
      <SideMenu />
    </div>
      <Layout_Button />
    </div>
    </>
)}

export default Layout
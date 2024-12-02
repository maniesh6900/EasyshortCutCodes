import bg from "../assets/background.avif"
import NavBar from "../componets/NavBar"

const Contact = () => {
  return (
        <>
        
            <div className='relative h-screen w-screen ' >
                <div>
                    <img src={bg} alt="background-Image"
                    className="w-full  "
                    />
                </div>
                <div className="fixed top-0">
                    <NavBar  />

                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="p-4 m-4 text-4xl font-bold text-white">
                    <h2>Summon The Maker</h2>
                </div>
                <div className="m-4 text-white">
                <form >
                    <div className="m-4 border border-white p-2 rounded-lg ">
                        <input type="text" placeholder="Enter your Name"
                            className="bg-transparent  focus:outline-none w-full"
                        />
                    </div>
                    <div className="m-4 border p-2 rounded-lg ">
                        <input type="gmail" placeholder="Enter your Email"
                        className="bg-transparent color-white focus:outline-none w-full"  
                        />
                    </div>
                    
                    <div className="m-4 border p-2 rounded-lg ">
                        <textarea  placeholder="message"
                        className="bg-transparent  focus:outline-none w-full"
                        />
                    </div>
                    <button type="submit" 
                    className="border p-2 rounded-lg ml-4 bg-amber-300 "
                    >
                    Submit</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
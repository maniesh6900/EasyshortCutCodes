import video from "../assets/video1.mp4"

const Slide = () => {
  return (<>
    <div className="relative w-full">
        <div className='fixed left-0 top-0 w-full  flex justify-center items-center -z-10 text-white text-5xl  
        '>      
            <video 
                autoPlay 
                muted 
                loop
                className="w-screen rounded-lg "
                id="backgroundVideo"
            >
                <source src={video} type="video/mp4  " />
            </video>
        </div>
  </div>
    
  </>)
}

export default Slide                  
import {motion} from "framer-motion"

const ButtonTwo = () => {
  return (<>
    <div className="h-full w-full ">
      <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="my-4 px-4 py-2 text-white rounded-lg bg-purple-500 hover:bg-purple-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500">
            Button
        </motion.button>
    </div>
  
  </>)
}

export default ButtonTwo
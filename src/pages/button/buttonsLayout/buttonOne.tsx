import { motion } from "framer-motion"
import Code from "../code"

const ButtonOne = () => {
 
  return (
   <div className="border w-full flex justify-center">
    <div className=" w-1/2 backdrop-blur-md flex flex-col jutify-around border ">
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="m-4 w-1/12 px-4 py-1 text-white rounded-lg bg-purple-500 hover:bg-purple-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500">
            Button
        </motion.button>
        <div className="p-4">
            <h5 className="font-bold my-1">
            Required</h5>
            <p className="my-1">
            tailwind, framer motion, react </p>
        </div>
        <div className="border h-full w-full">
            <Code />
        </div>
    </div>
    </div>    
  )
}

export default ButtonOne
const Code = () => {

    const codeString = `
    <div className="h-full absolute left-1/4 w-1/2 backdrop-blur-md transform transtale-x-1/2 my-36 ">
     <div className=" w-1/2 backdrop-blur-md flex flex-col jutify-around ">
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="m-4 w-1/12 px-4 py-2 text-white rounded-lg bg-purple-500 hover:bg-purple-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500">
            Button
        </motion.button>
    <div>
  `;

  return (
    <div className="w-full">
        <pre >
            <code>
                <textarea 
                    className='w-full h-1/2'
                value={codeString}/>
            </code>
        </pre>
    </div>
  )
}

export default Code
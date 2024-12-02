

const Code = () => {

    const code  = ` <div className="w-1/5">
    <div className='bg-white my-5 rounded-lg py-1 border' >
    <input type="text" placeholder="Username" 
    className='focus:outline-none bg-transparent w-full px-1'
    />
    </div>
    <div className="bg-white w-full flex justify-between rounded-lg py-1 border">
        <input type={password ? "text" : "password"} placeholder="Password"
            className="focus:outline-none bg-transparent w-full px-1 px-1
                
            "
        />
        <span onClick={handlePassword}><ArrowRightLeft className='p-2'  /></span>
    </div>
    <div className=''>
        <ButtonTwo />
    </div>
</div>`

  return (<>
  <div >
    <pre >
        <code>
            <textarea value={code} placeholder=""
                className="w-full "
            />
        </code>
    </pre>
  </div>
  </>
  )
}

export default Code
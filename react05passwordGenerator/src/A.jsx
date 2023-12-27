function App() {

  const [len, setLen] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [pwd, setPwd] = useState('')
  const pwdRef = useRef(null)

  const genPwd = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+"

    for (let i = 1; i < len; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPwd(pass)
  }, [len, numAllow, charAllow])


  const CpyPwd = () => {
    window.navigator.clipboard.writeText(pwd)
    pwdRef.current.select()
  }

  useEffect(() => {
    genPwd()

  }, [len, numAllow, charAllow])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-40 bg-violet-800 text-black shadow-black '>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg shadow-black overflow-hidden mb-20'>
        <input type="text"
          value={pwd}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={pwdRef}
        />
        <button
          className='outline-none bg-green-700 text-white px-3 py-0.5 shrink-0'

          onClick={CpyPwd}
        >Copy</button>
      </div>
      <div
        className='flex text-sm gap-x-2'
      ></div>
      <div className='flex items-center gap-x-1'>
        <input type="range"
          min={6}
          max={30}
          value={len}
          className='cursor-pointer'
          onChange={(e) => setLen(e.target.value)}
          name=''
          id=''
        />
        <label htmlFor='length'>Length:{len}</label>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            onChange={() => {              
              setnumAllow((prev) => !prev)

            }}
            name=""
            id=""
          />
          <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllow}
            onChange={() => {
              setcharAllow((prev) => !prev)
            }}
            id="charInput"
          />
          <label htmlFor='character'>Characters</label>
        </div>

      </div>
    </div>

  )
}
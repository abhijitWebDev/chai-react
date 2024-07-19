import { useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charecterAllowed, setCahrecterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXUZabcdefghijklmnopqrstuvxyz';
    if (numberAllowed) {
      str += '0123456789';
      
    }
    if(charecterAllowed) {
      str += '~!#$%^&*()_+=,.*'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charecterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charecterAllowed, passwordGenerator])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  }, [password])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
         
          <input type="text" 
          value={password}
          className="outline-none w-full px-3 py-1"
          placeholder='password'
          ref={passwordRef}
          readOnly/>
          <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-small gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charecterAllowed}
            id="charecterInput"
            onChange={() => {
              setCahrecterAllowed((prev) => !prev)
            }} />
            <label>Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

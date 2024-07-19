import React, {useState, useEffect} from 'react'

const Callback = ({handleChangeColor}) => {

  const [activeColor, setActiveColor] = useState('');

  const handleChange = (e) => {
    const {value} = e.target;

    setActiveColor(value);
    handleChangeColor(value);
    console.log(value);
  }

  useEffect(() => {
    console.log(activeColor);
  }, [activeColor])

  return (
    <input type="text" id="input" aria-label='input' value={activeColor} onChange={handleChange} />
  )
}

export default Callback
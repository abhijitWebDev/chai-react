import { useState, useEffect } from 'react'

import Details from './Details'
import Callback from './component/Callback';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [uiColor, setUiColor] = useState(null)

  const data = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data?.results);
      });

      console.log(typeof(user));
  
  }

  const handleChangeColor = () => {
    setUiColor('red');
    console.log('color changed');
  
  }



  useEffect(() => {
    data();
  },[])


  return (
    <>
    <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide details' : 'Show Details'}</button>
      {showDetails && user &&
        <Details
          name={user[0]?.name.first}
          gender={user[0]?.gender}
          city={user[0]?.location?.city}
          country={user[0]?.location?.country}
          picture={user[0]?.picture.medium}
        />
      }

      <div className="App_color_container" style={{color:`${uiColor}`}}>
      <Callback handleChangeColor={handleChangeColor}/>
      </div>
      
        
    </>
  )
}

export default App

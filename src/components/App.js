
import React from "react";
import './../styles/App.css';
import Child from './Child'
const App = () => {
 const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
     {!isLoggedIn &&
      <Child   setIsLoggedIn={setIsLoggedIn} />
     }
     {isLoggedIn && <p>you are logged in</p>}
    </div>
  )
}

export default App

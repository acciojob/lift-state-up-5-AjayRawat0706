import React from 'react'

const Child = (props) => {
  const fun=()=>{
    props.setIsLoggedIn(true)
  }
  return (
   <form>
     <label >Username</label>
     <input type='text'/>
     <label >Password</label>
     <input type="password" />
     <button onClick={fun} >Login</button>
   </form>
  )
}

export default Child
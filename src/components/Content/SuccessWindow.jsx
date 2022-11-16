import React, { memo } from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context/ThemeProvider'
import "./SuccessWindow.css"
const SuccessWindow = () => {
    const {state,dispatch}=useContext(themeContext)
  return (
    <div className='success_container'>
    <h1>All Done</h1>
    <div>You will be one of the first member <br/>of Broccoli & Co. </div>
<button onClick={()=>dispatch({type:"HOME"})}>OK</button>
    </div>
  )
}

export default memo(SuccessWindow) 
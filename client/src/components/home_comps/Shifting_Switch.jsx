import React from 'react'
import '../styling/shifting_switch.css'

function Shifting_Switch() {
  return (
    <div className='shifting'>
 
        <div className="toggle">
            <input className="toggle-input" type="checkbox" defaultChecked="" />
            <div className="toggle-handle-wrapper">
            <div className="toggle-handle">
                <div className="toggle-handle-knob" />
                <div className="toggle-handle-bar-wrapper">
                <div className="toggle-handle-bar" />
                </div>
            </div>
            </div>
            <div className="toggle-base">
            <div className="toggle-base-inside" />
            </div>
        </div>

    </div>
  )
}

export default Shifting_Switch
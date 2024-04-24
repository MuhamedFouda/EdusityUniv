import React from 'react'
import './Programs.scss'
export default function Programs() {
  return (
    <div className='programs'>
        <div className="program">
            <img src={require('../../assets/program-1.png')} alt=''/>
            <div className="caption">
                <img src={require('../../assets/program-icon-1.png')} ult=''/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={require('../../assets/program-2.png')} alt=''/>
            <div className="caption">
                <img src={require('../../assets/program-icon-2.png')} ult=''/>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={require('../../assets/program-3.png')} alt=''/>
            <div className="caption">
                <img src={require('../../assets/program-icon-3.png')} ult=''/>
                <p>Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

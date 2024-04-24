import React from 'react'
import './compus.scss'

export default function Compus() {
    return (
        <div className='compus'>
            <div className="gallery">
                <img src={require('../../assets/gallery-1.png')} alt='' />
                <img src={require('../../assets/gallery-2.png')} alt='' />
                <img src={require('../../assets/gallery-3.png')} alt='' />
                <img src={require('../../assets/gallery-4.png')} alt='' />
            </div>
        <button className='btn dark-btn'> See more here <img src={require('../../assets/white-arrow.png')}/></button>
        </div>
    )
}

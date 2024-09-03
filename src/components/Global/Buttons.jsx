import React from 'react'

const Buttons = ({ text }) => {
    return (
        <>
            <button className='LinearBtn px-5 py-2.5 text-sm font-normal transition-opacity hover:scale-105'>{text}</button>
        </>
    )
}

export default Buttons

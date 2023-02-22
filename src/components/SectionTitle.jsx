import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className='section-title'>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default SectionTitle
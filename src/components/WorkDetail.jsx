import React from 'react';
import "../sass/components/workDetail.scss";

const WorkDetail = (props) => {
  return (
    <article className='work-detail'>
        <div className='img'>
            <img src={props.image} alt="interior"/>
        </div>
        <div className='details'>
            <div className='icon'>
                <img  src={props.icon} alt="intelogorior"/>
                <h1>{props.number}</h1>
            </div>
            <div className='text'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    </article>
  )
}

export default WorkDetail
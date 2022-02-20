import React from 'react';

function Card(props){
return(
    <>
    <div className='cards__container'>
    <div className='card'>
      <img src={props.imgsrc} alt='series__pic' className='card_img'/>
          <div className='card__info'>
          <span className='card__category'>{props.title}</span>
          <h3 className='card__title'>{props.sname}</h3>
            <a href={props.link} rel="noreferrer" target="_blank">
            <button className='btn'>Watch Now</button>
            </a>
            </div>
    </div>
    </div> 
    </>
    )
  };

  export default Card;
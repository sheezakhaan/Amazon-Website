import React from "react";

function Cards(props) {
  return (
    <>
      <div className='cards'>
        <div className='card'>
        <h3 className='card_title'>{props.title}</h3>
          <img className='card_img' src={props.imgsrc} />
          <div className='card_info'>
            <a href={props.links} target='_blank'>
              <h6>Watch Now</h6>
            </a>
          </div>
        </div> 
      </div>

     
    </>
  );
}

export default Cards;

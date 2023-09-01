import React from 'react';
import SliderOne from '../Images/slider-one.jpg'
import SliderTwo from '../Images/slider-two.jpg'
import SliderThree from '../Images/slider-three.jpg'
import SliderFour from '../Images/slider-four.jpg'
import SliderFive from '../Images/slider-five.jpg'
import SliderSix from '../Images/slider-six.jpg'


function Carousel() {
    return (
        <>
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={SliderOne} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={SliderFive} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={SliderThree} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={SliderSix} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={SliderFour} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={SliderTwo} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev btns" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
  </button>
  <button className="carousel-control-next btns" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
  </button>
</div>
        </>
    )
}

export default Carousel

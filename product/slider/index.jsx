import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import teraktor from '../../../../../assets/img/terakhtor.svg';
import './slider.style.css';
const Slider = ({data}) => {
  return (
    <>
      <div className="shop-product-slider">
        <Carousel controls={true} className="mt-5 mb-3 " indicators={true}>
          {data?.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="tales" src={item.image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;

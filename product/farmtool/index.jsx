import React from 'react';
import Button from '@mui/material/Button';
import Marker from '../../../../../assets/img/marker.svg';
import Exclamation from '../../../../../assets/img/exclamation 2.svg';
import Comment from '../../../../../assets/img/comment (1).svg';
import PhoneCall from '../../../../../assets/img/phone-call 2.svg';
import '../product.style.css';
const Tool = ({data}) => {
  const combineAttributes = [];
  data.attributes?.map(item => combineAttributes.push(item.attribute));
  return (
    <>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>تاریخ تولید:</p>
        <p className="shop-product-createdDay-day">{data.produce_year}</p>
      </div>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>موجودی:</p>
        <p className="shop-product-createdDay-day">
          {data.existing} {data.existing_unit}
        </p>
      </div>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>حداقل مقدار فروش:</p>
        <p className="shop-product-createdDay-day">
          {data.minimum_sales} {data.existing_unit}
        </p>
      </div>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>قیمت:</p>
        <p className="shop-product-createdDay-day">{data.price} تومان</p>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <p>توضیحات:</p>
        <p>{data.description}</p>
      </div>
      <hr />
      <p>مشخصات:</p>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>شرکت تولیدکننده:</p>
        <p className="shop-product-createdDay-day">{data.company}</p>
      </div>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>کشور تولیدکننده:</p>
        <p className="shop-product-createdDay-day">{data.producing_country}</p>
      </div>
      <div className="d-flex flex-row position-relative shop-product-createdDay">
        <p>ویژگی ها:</p>
        <p className="shop-product-createdDay-day">
          {combineAttributes.toString('/')}
        </p>
      </div>
      <div className="d-flex flex-row">
        <img className="product-farmtool-location" src={Marker} />
        <p className="product-farmtool-location-data">
          {data.state},{data.city}
        </p>
      </div>
      <div className="d-flex flex-row">
        <img className="product-farmtool-location" src={Exclamation} />
        <p className="product-farmtool-location-data">
          قوانین و شرایط استفاده از فروشگاه
        </p>
      </div>
      <div className="d-flex flex-row mt-4">
        <Button
          className="product-comment-button"
          variant="outlined"
          startIcon={
            <img src={Comment} className="product-comment-button-icon" />
          }
        >
          پیام به فروشنده
        </Button>
        <Button
          className="product-phone-button"
          variant="outlined"
          startIcon={
            <img src={PhoneCall} className="product-comment-button-icon" />
          }
        >
          تماس با فروشنده
        </Button>
      </div>
    </>
  );
};

export default Tool;

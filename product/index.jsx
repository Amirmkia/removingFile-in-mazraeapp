import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getSingleProduct} from '../../../../services/store/product';
import TopPageBar from '../../../../components/topPageBar';
import BookMark from '../../../../assets/img/bookmark.svg';
import Share from '../../../../assets/img/share (1).svg';
import Comparison from '../../../../assets/img/Comparison.svg';
import './product.style.css';
import Slider from './slider';
import Tool from './farmtool';
import Fertilizer from './fertilizer';
import Machinery from './machinery';
import Employee from './employee';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    (async () => {
      try {
        const response = await getSingleProduct(params.id, {
          guid: params.productId,
        });
        setProduct(response);
      } catch (error) {}
    })();
  }, []);
  console.log(product);
  return (
    <>
      <TopPageBar title="کود/کودآلی" />
      <div className="d-flex flex-row position-relative product-header-tools mt-4">
        <img src={Comparison} className="product-header-tool-img" />
        <img src={Share} className="product-header-tool-img" />
        <img src={BookMark} className="product-header-tool-img" />
      </div>
      <Slider data={product.images} />
      <p className="shop-profile-title">{product.title}</p>
      {/* <Tool data={product} /> */}
      {/* <Fertilizer data={product} /> */}
      {/* <Machinery data={product} /> */}
      <Employee data={product} />
      <div className="shop-fucking-under-footer"></div>
    </>
  );
};

export default SingleProduct;

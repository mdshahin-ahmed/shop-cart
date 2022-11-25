import React, { useEffect, useState } from "react";
import "./HotDeals.css";

const HotDeals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("hotDeals.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="hotDealsWrap">
        <div className="row">
          <div className="col-md-5 hotDealsText">
            <h1>
              We picked some <span>cool things</span> for you!
            </h1>
          </div>
          <div className="col-md-7">
            <div className="hotDealsProducts">
              <h3>hot deals for you</h3>
              <div className="row">
                {products.map((product) => {
                  const { _id, name, picture, price, discount } = product;
                  return (
                    <div key={_id} className="col-md-4 px-3 text-md-start">
                      <img src={picture} alt="" />
                      <h6>{name}</h6>
                      <div className="hotDealsProdictFooter">
                        <span className="price">₹{price}</span>
                        <span className="off">-{discount}% off</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;

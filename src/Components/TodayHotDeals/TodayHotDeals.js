import React, { useEffect, useState } from "react";
import "./TodayHotDeals.css";

const TodayHotDeals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("todaysHotDeals.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="todayHotDealsWrap">
      <div className="container-fluid ">
        <div className="todayHotDealsHeader">
          <h3>Today's hot deals</h3>
        </div>
        <div className="todaysHotDealsProducts">
          <div className="">
            <div className="hotDealsProducts">
              <div className="row">
                {products.map((product) => {
                  const { _id, name, picture, price, discount } = product;
                  return (
                    <div key={_id} className="col-md-2 px-3 text-md-start">
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

export default TodayHotDeals;

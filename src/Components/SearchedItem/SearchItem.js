import React from "react";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import "./SearchItem.css";

const datas = [
  {
    id: 1,
    picture: image1,
  },
  {
    id: 2,
    picture: image2,
  },
  {
    id: 3,
    picture: image3,
  },
  {
    id: 4,
    picture: image4,
  },
  {
    id: 5,
    picture: image5,
  },
  {
    id: 6,
    picture: image6,
  },
];

const SearchItem = () => {
  return (
    <div className="container-fluid">
      <div className="searchItemHeader">
        <h3>Your searched items</h3>
      </div>
      <div className="row">
        {datas.map((data) => {
          return (
            <div className="col-sm-6 col-md-2">
              <img src={data.picture} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchItem;

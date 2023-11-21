import React from "react";
import "./HomePage.scss";
import ImageSteper from "../ImageSlider/ImageSlider.js";
import Card from "../Card/Card.js";

const HomePage = (props) => {
  return (
    <>
      <div className="content">
        <div className="container d-block" >
          <div className="d-flex p-3">
            <div className="col-8">
              <ImageSteper/>
            </div>
            <div className="col-4">
            </div>
          </div>
          <div className="d-flex p-3">
                <Card/>
            </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

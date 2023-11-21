import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageSlider.scss";

const ImageSteper = (props) => {
    const images = [
        "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_english.jpg?t=1698557339",
        "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_english.jpg?t=1698557339",
        "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_english.jpg?t=1698557339",
    ];

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : ""}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner ">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""} `} data-bs-interval="10000">
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageSteper;

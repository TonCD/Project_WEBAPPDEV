import "./Card.scss";

const Card = (props) => {
  return (
    <>
      <div className="card" style= {{width: "18rem"}}>
        <img src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_english.jpg?t=1698557339" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text price">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

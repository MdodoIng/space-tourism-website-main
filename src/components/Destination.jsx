import { useState } from "react";
import backgroundImgDec from "../assets/destination/background-destination-desktop.jpg";
import backgroundImgTab from "../assets/destination/background-destination-tablet.jpg";
import backgroundImgMob from "../assets/destination/background-destination-mobile.jpg";
import { data } from "../content/data";

const dole = [
  {
    id: 1,
    name: "Moon",
  },
  {
    id: 2,
    name: "Mars",
  },
  {
    id: 3,
    name: "Europa",
  },
  {
    id: 4,
    name: "Titan",
  },
];

const Destination = () => {
  const [destinationOn, setDestinationOn] = useState("Moon");

  const DestinationCon = ({ item }) => {
    const nameOfThis = item.name === destinationOn;

    return ( <>
      {nameOfThis && (
        
        <div className="contentBox"
        >
        <div className="DestinationLeft">
          <img src={item?.images?.png} alt="" />
        </div>
        <div className="DestinationRight">
          <div className="destinationSwitcher">
            {dole.map((index) => {
              const k = destinationOn === index.name;
              return (
                <div key={index.id}>
                  <p
                    onClick={(e) => setDestinationOn(e.target.innerHTML)}
                    className={k ? "activeM menu" : "menu"}
                    >
                    {index.name}
                  </p>
                </div>
              );
            })}
          </div>
          <h1 className="h1">{item.name}</h1>
          <p className="p">{item.description}</p>
          <div className="destination_line" />
          <div className="destine_time">
            <div>
              <p>AVG. DISTANCE</p>
              <span>{item.distance}</span>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <span>{item.travel}</span>
            </div>
          </div>
        </div>
      </div>


)}
</>

    );
  };
  return (
    <div className="homeContainer">
      <div className="home_content">
      <picture >
        <source  media="(max-width:640px)" srcSet={backgroundImgMob}/>
        <source  media="(max-width:1024px)" srcSet={backgroundImgTab} />
      <img src={backgroundImgDec} className='homeBg' alt="" />
      </picture>
        <p className="topTitle">
          <span>01</span> Pick your destination
        </p>
        {data.destinations.map((item) => (
          <DestinationCon key={item.name.toString()} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Destination;

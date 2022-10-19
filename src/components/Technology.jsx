import { useState } from "react";
import backgroundImgDec from "../assets/technology/background-technology-desktop.jpg";
import backgroundImgMob from "../assets/technology/background-technology-mobile.jpg";
import backgroundImgTab from "../assets/technology/background-technology-tablet.jpg";
import { data } from "../content/data";

const kli = [
  {
    id: 1,
    name: 'Launch vehicle',
  },
  {
    id: 2,
    name: 'Spaceport',
  },
  {
    id: 3,
    name: 'Space capsule',
  },
]
const Technology = () => {
  const [techSelect, setTechSelect] = useState('Launch vehicle');


  const TechCon = ({ item }) => {

    const nameOfThis = item?.name === techSelect

    const IndexChanger = ({ index }) => {
      const k = index.name === techSelect
      return (
        <div className="radioContain">
          <span id={index.name}
            onClick={e => setTechSelect(e.target.id)} className={k ? "typoAtv typoBtn" : "typoBtn"} >
            {index.id}
          </span>
        </div>
      )
    }

    return (
      <>
        {nameOfThis && (
          <div className="contentBox columRevT">
            <div className="techLeft">
              <div className="typeCoiner">
                {kli.map((index) => (
                  <IndexChanger
                    key={index.id}
                    index={index} />
                ))}
              </div>
              <div>
                <h4 className="h4">THE TERMINOLOGY…</h4>
                <h1 className="h1">{item.name}</h1>
                <p className="p">{item.description}</p>
              </div>
            </div>
            <div className="CrewRight tecR">

              <picture >
                <source media="(max-width:1024px)" srcSet={item?.images?.landscape} />
                <img src={item?.images?.portrait} className='CrewRight tecR' alt="" />
              </picture>
            </div>
          </div>
        )}</>
    )
  }

  return (
    <div className="homeContainer">
      <div className="home_content rightP">
        <picture >
          <source media="(max-width:640px)" srcSet={backgroundImgMob} />
          <source media="(max-width:1024px)" srcSet={backgroundImgTab} />
          <img src={backgroundImgDec} className='homeBg' alt="" />
        </picture>
        <p className="topTitle"> <span>03</span> SPACE LAUNCH 101</p>
        {data.technology.map((item) => (
          <TechCon key={item.name.toString()} item={item} />
        ))}
      </div>
    </div>
  )
};

export default Technology;

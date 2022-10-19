import { useState } from "react";
import backgroundImgDec from "../assets/crew/background-crew-desktop.jpg";
import backgroundImgMob from "../assets/crew/background-crew-mobile.jpg";
import backgroundImgTab from "../assets/crew/background-crew-tablet.jpg";
import { data } from "../content/data";

const kli = [
  {
    id: 1,
    name: 'Douglas Hurley',
  },
  {
    id: 2,
    name: 'Mark Shuttleworth',
  },
  {
    id: 3,
    name: 'Victor Glover',
  },
  {
    id: 4,
    name: 'Anousheh Ansari',
  },
]
const Crew = () => {
  const [crewSelect, setCrewSelect] = useState('Douglas Hurley');

  const CrewCon = ({ item }) => {
    const nameOfThis = item.name === crewSelect
    const IndexChanger = ({ index }) => {
      const k = index === crewSelect

      return (
        <div className="radioContain">
          <span onClick={(e) => setCrewSelect(e.target.id)} id={index} className={k ? "activeRad radioBtn" : "radioBtn"} />
        </div>
      )
    }

    return (<>
      {nameOfThis && (

        <div className="contentBox columRev">
        <div className="CrewLeft">
          <h4 className="h4">{item.role}</h4>
          <h1 className="h1">{item.name}</h1>
          <p className="p">{item.bio}</p>
          <div className="radioContain none">
            {kli.map((index) => (
              <IndexChanger key={index.id} index={index.name} />
            ))}
          </div>
        </div>
          <div className="radioContain noneMOb">
            {kli.map((index) => (
              <IndexChanger key={index.id} index={index.name} />
            ))}
          </div>
        <div className="CrewRight">
          <img src={item?.images?.png} alt="" />
        </div>
      </div>
        )
      }
      </>
    )
  }
  
  return (
    <div className="homeContainer">
     <div className="home_content">

     <picture >
        <source  media="(max-width:640px)" srcSet={backgroundImgMob}/>
        <source  media="(max-width:1024px)" srcSet={backgroundImgTab} />
      <img src={backgroundImgDec} className='homeBg' alt="" />
      </picture>
      <p className="topTitle"> <span>02</span> Meet your crew</p>
        {data.crew.map((item) => (
          <CrewCon key={item.name.toString()} item={item} />
          ))}
          </div>
    </div>
  )
};

export default Crew;

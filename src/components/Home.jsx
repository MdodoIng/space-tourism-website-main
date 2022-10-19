import backgroundImgDec from "../assets/home/background-home-desktop.jpg";
import backgroundImgMob from "../assets/home/background-home-mobile.jpg";
import backgroundImgTab from "../assets/home/background-home-tablet.jpg"


const Home = () => {
  return (
    <div className="homeContainer">
      <picture >
        <source  media="(max-width:640px)" srcSet={backgroundImgMob}/>
        <source  media="(max-width:1024px)" srcSet={backgroundImgTab} />
      <img src={backgroundImgDec} className='homeBg1' alt="" />
      </picture>
      <div className="home_content spaceAroid">
        <div className="homeLeft">
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="homeRight">
          <h4>EXPLORE</h4>
        </div>
      </div>
    </div>
  )
};

export default Home;

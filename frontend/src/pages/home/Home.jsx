import "./home.scss";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home">
            <div className="home__leftsidebar">
              <div className="home__leftsidebar__profile">
                <div className="img">
                  <img src="..\src\assets\profile.png" alt="" />
                </div>
                <div className="about">
                  <div className="about__element">
                    <h3>Micheal Jackson</h3>
                  </div>
                  <div className="about__element">
                    <p>Web Development Enthusiast | Building Projects with React & Node.js | Mechanical Engineering Student at HBTU | Open to Opportunities |</p>
                </div>
                </div>
                <div className="horizontalseparator"></div>
                <div className="profilestatus">
                  <div className="followers">
                    <h3>Followers</h3>
                    <p>1000</p>
                  </div>
                  <div className="verticalseparator"></div>
                  <div className="following">
                    <h3>Following</h3>
                    <p>2000</p>
                  </div>
                </div>
                <div className="horizontalseparator"></div>
                <div className="profilelink">
                  <a href="">Profile</a>
                </div>
              </div>
            </div>
            <div className="home__middlesidebar">
              <div className="home__middlesidebar__scrollbar">status</div>
            </div>
            <div className="home__rightsidebar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

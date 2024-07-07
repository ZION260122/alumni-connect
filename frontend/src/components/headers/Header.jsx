import "./header.scss";
import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header">
            <div className="header__section1">
              <div className="logo">
                <p>Alumni-Connect</p>
              </div>
              <div className="searchbar">
                <input 
                type="text"
                placeholder={ "Search for connections, alumni, and more..."}
                />
              </div>
            </div>
            <div className="header__section2">
              <div className="homebtn">
                <FaHome />
              </div>
              <div className="reqbtn">
                <IoPeople />
              </div>
              <div className="jobsbtn">
                <FaBagShopping />
              </div>
              <div className="messagebtn">
                <IoIosChatbubbles />
              </div>
              <div className="notifybtn">
                <IoIosNotifications />
              </div>
              <div className="profilebtn">
                <button>
                     <div className="img">
                  {/* <img src="..\src\assets\profile.png" alt="img" /> */}
                </div>
                <div className="scrollbtn">
                  <FaAngleDown />
                </div>

                </button>
               
                
              </div>
              <div className="etcbtn">
                <PiDotsNineBold />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

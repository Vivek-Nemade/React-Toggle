import React, { useContext } from "react";
import style from "./Rightbox.module.css";
import { Switch, Progress } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";

const Rightbox = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={style.box}>
      <div className={style.rightdiv}>
        <div className={style.dashboard}>
          <p>My Dashboard</p>
        </div>
        <div className={style.mode}>
          <p> {isLight ? "Dark Mode" : "Light Mode"}</p>
        </div>
        <div className={style.switch}>
          <Switch onChange={toggleTheme} size="lg" />
        </div>
      </div>
      <div className={style.middiv}>
        <div>
          <div>Active Users</div>
          <div>
            <p>For August 2020 </p>
            <IoMdArrowDropdown />
          </div>
        </div>

        <div className={style.component}>
          <div className={style.onediv}>
            <div className={style.avatar}>
              <img src="https://bit.ly/prosper-baba" alt="Prosper Otemuyiwa" />
            </div>
            <div className={style.namediv}>
              <h2>Nrupul Dev</h2>
              <p>Banglore,india</p>
            </div>
            <div>
              <h2>...</h2>
            </div>
          </div>
          <div className={style.progress}>
            <Progress
              colorScheme="green"
              size="sm"
              value={20}
              borderRadius="20px"
            />
          </div>
          <div className={style.points}>
            <p>Professional level 15</p>
            <h3>4723 Points</h3>
          </div>
        </div>
        <hr />
        <div className={style.component}>
          <div className={style.onediv}>
            <div className={style.avatar}>
              <img
                src="https://randomuser.me/api/portraits/women/66.jpg"
                alt="Prosper Otemuyiwa"
              />
            </div>
            <div className={style.namediv}>
              <h2>Sandhya</h2>
              <p>Banglore,india</p>
            </div>
            <div>
              <h2>...</h2>
            </div>
          </div>
          <div className={style.progress}>
            <Progress
              colorScheme="blue"
              size="sm"
              value={20}
              borderRadius="20px"
            />
          </div>
          <div className={style.points}>
            <p>Professional level 11</p>
            <h3>2339 Points</h3>
          </div>
        </div>
        <hr />
        <div className={style.component}>
          <div className={style.onediv}>
            <div className={style.avatar}>
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Prosper Otemuyiwa"
              />
            </div>
            <div className={style.namediv}>
              <h2>Elon Tusk</h2>
              <p>California,USA</p>
            </div>
            <div>
              <h2>...</h2>
            </div>
          </div>
          <div className={style.progress}>
            <Progress
              colorScheme="purple"
              size="sm"
              value={20}
              borderRadius="20px"
            />
          </div>
          <div className={style.points}>
            <p>Professional level 6</p>
            <h3>1884 Points</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbox;

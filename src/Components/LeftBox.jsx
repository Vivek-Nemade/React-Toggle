import React from "react";
import style from "./LeftBox.module.css";
import pic from "../images/download.png";
import add from "../images/add.png";
import { BsBarChartLine, BsPinMap, BsFiles } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";

const LeftBox = () => {
  return (
    <div className={style.leftbox}>
      <div>
        <img src={pic} alt="" />
      </div>
      <div className={style.leftmidbox}>
        <div>
          <BsBarChartLine
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              // paddingTop: "23px",
            }}
          />
        </div>
        <div>
          <BsPinMap
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              color: "gray",
            }}
          />
        </div>
        <div>
          <AiOutlineShoppingCart
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              color: "gray",
            }}
          />
        </div>
        <div>
          <BiMessageSquare
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              color: "gray",
            }}
          />
        </div>
        <div>
          <BsFiles
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              color: "gray",
            }}
          />
        </div>
        <div>
          <AiOutlineSetting
            style={{
              width: "23.51px",
              height: "24px",
              marginLeft: "34px",
              marginTop: "23px",
              color: "gray",
            }}
          />
        </div>
      </div>
      <div>
        <img className={style.add} src={add} alt="" />
      </div>
    </div>
  );
};

export default LeftBox;

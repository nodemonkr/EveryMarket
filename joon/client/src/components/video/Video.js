import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Vieos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/W4EcQV2J6ao/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr8eVNfvBs9q0PdF0IikLHsBLNTA"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">
        Create app in 5 minutes #made by Chintu
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Videos • <span>5 days ago</span>
        </span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Rainbow jw</p>
      </div>
    </div>
  );
};

export default Vieos;

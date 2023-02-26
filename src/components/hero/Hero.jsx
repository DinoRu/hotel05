import React from "react";
import "./hero.css";

const Hero = () => {
  const list_img = [
    {
      id: 1,
      url: "https://avatars.mds.yandex.net/get-altay/4663168/2a0000017aedf4d15021c8d69f5cb37a3a7e/L",
    },
    {
      id: 2,
      url: "https://avatars.mds.yandex.net/get-altay/4737312/2a0000017af6b34accb44159886a015626fb/L",
    },
    {
      id: 3,
      url: "https://avatars.mds.yandex.net/get-altay/4335161/2a0000017aedf4f8726259bd16ea726e286f/L",
    },
  ];
  return (
    <div className="hero">
      <ul>
        {list_img.map((item, index) => (
          <li key={index} className="img-item">
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;

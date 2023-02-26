import React from "react";
import "./rooms.css";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="wrapper">
        <h1>Our Rooms</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="item-img">
              <img
                src="https://avatars.mds.yandex.net/get-altay/4737312/2a0000017af6b34accb44159886a015626fb/L"
                alt=""
              />
            </div>
            <div className="item-text">
              <p>Classic Room</p>
              <a href="/">Book</a>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-img">
              <img
                src="https://avatars.mds.yandex.net/get-altay/4737312/2a0000017af6b34accb44159886a015626fb/L"
                alt=""
              />
            </div>
            <div className="item-text">
              <p>Classic Room</p>
              <a href="/">Book</a>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-img">
              <img
                src="https://avatars.mds.yandex.net/get-altay/4737312/2a0000017af6b34accb44159886a015626fb/L"
                alt=""
              />
            </div>
            <div className="item-text">
              <p>Classic Room</p>
              <a href="/">Book</a>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-img">
              <img
                src="https://avatars.mds.yandex.net/get-altay/4737312/2a0000017af6b34accb44159886a015626fb/L"
                alt=""
              />
            </div>
            <div className="item-text">
              <p>Classic Room</p>
              <a href="/">Book</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

import React from "react";

const PostComponent = ({ name, subtitle, image, time, description }) => {
  return (
    <div>
      <div style={style}>
        <div className="headOfPost" style={{ display: "flex" }}>
          <img
            src={image}
            alt="vite logo"
            style={{ margin: "0px 10px 0px 0px" }}
          />
          <div>
            <div style={{ fontWeight: 900 }}>{name}</div>
            <div>{subtitle}</div>
            {time && <div>{time}</div>}
          </div>
        </div>
        <div className="content" style={{ fontSize: 20 }}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const style = {
    width: 300,
    backgroundColor: "green",
    borderRadius: 10,
    borderColor:"black",
    borderWidth: 1,
    margin: "30px 0px 0px 0px",
    padding:"20px"
  };

export default PostComponent;

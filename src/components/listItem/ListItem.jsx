import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://v1.cdnpk.net/videvo_files/video/premium/video0121/large_watermarked/42%20Adventure_preview.mp4"

  return (
    <div
      className="listItem"
      style={{left: isHovered && index * 225 -30 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repellat fugit aut quae iste.
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  );
}

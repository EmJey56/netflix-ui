import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="doumentary">Documentary</option>
                    <option value="romance">Romance</option>
                </select>
            </div>
        )}
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="info">
        <img
          src="https://assets.stickpng.com/images/613790e74b96600004f676f1.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          provident iusto aspernatur laudantium consectetur natus. Voluptate,
          blanditiis quo. Necessitatibus doloremque nam veniam illo tempora
          beatae vero, deleniti eligendi fugit repellendus?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

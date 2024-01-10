import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://v2.cdnpk.net/videvo_files/video/premium/partners1014/large_watermarked/BB_8d1bcf32-7b57-4554-ab32-f1df86da21a5_preview.mp4"
      />
    </div>
  );
}

import snow from "../../assets/snow.mp4";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="title">
      <h1>Winter Corner Store</h1>
      <video
        className="snow-video"
        autoPlay
        loop
        muted
        id="snow.mp4"
        style={{ width: "250%", height: "100%" }}
      >
        <source src={snow} type="video/mp4" />
      </video>
      <Footer />
    </div>
  );
}

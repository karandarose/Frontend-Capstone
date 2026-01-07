import snow from "../../assets/snow.mp4";

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
        style={{ width: "100%", height: "80%" }}
      >
        <source src={snow} type="video/mp4" />
      </video>
    </div>
  );
}

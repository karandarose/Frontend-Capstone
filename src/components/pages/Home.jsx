import snow from "../../assets/snow.mp4";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          id="snow.mp4"
          style={{ width: "100%", height: "100%" }}
        >
          <source src={snow} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

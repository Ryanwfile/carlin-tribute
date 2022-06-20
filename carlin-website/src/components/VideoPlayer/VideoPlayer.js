import YouTube from "react-youtube";

export default function VideoPlayer(props) {
  const options = {
    height: "183",
    width: "325",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={props.videoId} opts={options} />;
}

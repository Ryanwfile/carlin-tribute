import YouTube from "react-youtube";

export default function VideoPlayer(props) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return <YouTube videoId={props.videoId} opts={opts} />;
}

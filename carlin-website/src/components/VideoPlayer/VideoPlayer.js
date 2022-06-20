import YouTube from "react-youtube";

export default function VideoPlayer(props) {
  const opts = {
    height: "183",
    width: "325",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return <YouTube videoId={props.videoId} opts={opts} />;
}

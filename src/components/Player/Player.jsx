import ReactPlayer from "react-player/youtube";

const Player = ({urlVideo}) => {
  return (
    <ReactPlayer
      width={"100%"}
      height={"100%"}
      controls={true}
      url={urlVideo}
      light={true}
    />
  );
};

export default Player;

import styled from "styled-components";
import Player from "../Player/Player";

const StyledVideoCard = styled.div`
  display: flex;
  border-radius: 4px;
  height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  border: 4px solid ${(props) => props.borderColor};
`;

const VideoCard = ({ width, height, borderColor, urlVideo }) => {
  return (
    <StyledVideoCard width={width} height={height} borderColor={borderColor}>
      <Player urlVideo={urlVideo} />
    </StyledVideoCard>
  );
};

export default VideoCard;

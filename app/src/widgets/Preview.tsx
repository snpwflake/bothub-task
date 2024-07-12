import styled from "styled-components";
import BgIcon from "../icons/Grid.svg";
import Chat from "../entities/chat/Chat";
const PreviewStyle = styled.div<{}>`
  width: 100%;
  height: 592px;
  position: relative;
`;

const Container = styled.div<{}>`
  max-width: 1290px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  gap: 24px;
`;

const Background = styled.img<{}>`
  position: absolute;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const Preview = () => {
  return (
    <PreviewStyle>
      <Container>1</Container>
      {/* <Background src={BgIcon} /> */}
      <Chat />
    </PreviewStyle>
  );
};

export default Preview;

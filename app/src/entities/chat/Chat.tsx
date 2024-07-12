import styled from "styled-components";

const ChatStyle = styled.div<{}>`
  width: 741px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 592px;
  border-radius: calc(var(--global-scale) * 24px);
  opacity: 0px;
  margin: 0 auto;
  border-image-slice: 1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(60deg, rgb(148, 28, 242), rgb(28, 178, 242), rgb(55, 65, 81), rgba(55, 65, 81, 0.6), rgb(148, 28, 242), rgba(55, 65, 81, 0.85), rgb(28, 178, 242), rgb(148, 28, 242)) 0% 0% / 300% 300%;
    opacity: 0.5;
    transition: background-position 0.5s ease-in-out;  
    animation: gradient 15s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  @media (max-width: 1060px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    height: 100%;
  }
`;

const ChatContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  background-color: #0E0C15;
  border-radius: calc(var(--global-scale) * 24px);
  height: calc(100% - 2px);
  width: calc(100% - 2px);
`;
const ChatHeader = styled.div<{}>`
  display: flex;
  align-items: center;
  padding: calc(var(--global-scale) * 16px) calc(var(--global-scale) * 24px);
  border-bottom: 1px solid #222B44;

`;

const ChatContent = styled.div<{}>``;

const ChatFooter = styled.div<{}>``;
const Chat = () => {
  return (<ChatStyle>
    <ChatContainer>
      <ChatHeader>Header</ChatHeader>
      <ChatContent>Content</ChatContent>
      <ChatFooter>Footer</ChatFooter>
    </ChatContainer>
  </ChatStyle>);
};

export default Chat;

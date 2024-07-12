import styled from "styled-components";

const ChatStyle = styled.div<{}>`
  width: 741px;
  height: 592px;
  top: 1px;
  gap: 0px;
  border-radius: 24px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background-color: #0e0c15;
`;
const Chat = () => {
  return <ChatStyle>Chat</ChatStyle>;
};

export default Chat;

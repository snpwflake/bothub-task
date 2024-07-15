import styled from "styled-components";
import newCompletion from "../../shared";
import { FormEvent, useEffect, useRef, useState } from "react";
import botIcon from "../../images/botIcon.webp";
import IconButton from "../../features/IconButton";
import SendIcon from "../../icons/SendIcon";
import Badges from "../../features/Badge";
import BgChat from "../../icons/BgGradientChat";
import BotMessageIcon from "../../icons/BotMessageIcon";
const ChatStyle = styled.div<{}>`
  max-width: calc(var(--global-scale) * 741px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(var(--global-scale) * 592px);
  width: 100%;
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
    background: linear-gradient(
        60deg,
        rgb(148, 28, 242),
        rgb(28, 178, 242),
        rgb(55, 65, 81),
        rgba(55, 65, 81, 0.6),
        rgb(148, 28, 242),
        rgba(55, 65, 81, 0.85),
        rgb(28, 178, 242),
        rgb(148, 28, 242)
      )
      0% 0% / 300% 300%;
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
`;

const ChatContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  background: #121825;
  position: relative;
  z-index: 2;
  border-radius: calc(var(--global-scale) * 24px);
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  & > #bg-chat {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: calc(var(--global-scale) * 24px);
    width: 100%;
  }
`;
const ChatHeader = styled.div<{}>`
  display: flex;
  align-items: center;
  padding: calc(var(--global-scale) * 16px) calc(var(--global-scale) * 24px);
  border-bottom: 1px solid #222b44;
`;
const IconContainer = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--global-scale) * 50px);
  height: calc(var(--global-scale) * 50px);
  margin-right: calc(var(--global-scale) * 16px);
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  & > p {
    margin: 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 14px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 18px);
    text-align: left;
    color: #616d8d;
  }
  & > h2 {
    margin: 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 22px);
  }
`;

const ChatContent = styled.div<{}>`
  padding: calc(var(--global-scale) * 16px) calc(var(--global-scale) * 24px);
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    color: #222b44;
  }
  -ms-overflow-style: none;
  scrollbar-width: 4px;
  @media (max-width: 540px) {
    padding: calc(var(--global-scale) * 16px);
  }
`;

const ChatFooter = styled.div<{}>`
  padding: calc(var(--global-scale) * 24px) calc(var(--global-scale) * 24px);
  padding-top: 0;
  position: relative;
  @media (max-width: 540px) {
    padding: calc(var(--global-scale) * 16px);
  }
`;

const MessageRow = styled.div<{ role: "assistant" | "user" }>`
  display: flex;
  align-items: end;
  margin: calc(var(--global-scale) * 8px) 0;
  margin-bottom: calc(var(--global-scale) * 22px);
  animation: fadeInChat 0.5s ease-in-out;
  @keyframes fadeInChat {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${({ role }) => role !== "assistant" && "justify-content: end;"};
  & > img {
    width: calc(var(--global-scale) * 40px);
    height: calc(var(--global-scale) * 40px);
    object-fit: contain;
    ${({ role }) => role !== "assistant" && "display: none"};
  }
  & > div {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin-left: calc(var(--global-scale) * 8px);
  }
  & > div > span {
    ${({ role }) => role !== "assistant" && "display: none"};
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 22px);
    text-align: left;
    color: white;
    margin-bottom: calc(var(--global-scale) * 8px);
  }
  & > div > p {
    margin: 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 14px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 18px);
    text-align: left;
    color: #616d8d;
    padding: calc(var(--global-scale) * 14px) calc(var(--global-scale) * 16px);
    color: white;
    border-radius: calc(var(--global-scale) * 10px);
    ${({ role }) =>
      role === "assistant"
        ? "background: #313E62; border-bottom-left-radius: 0;"
        : "background: #1C64F2; border-bottom-right-radius: 0;"};
  }
`;

const InputBox = styled.div<{}>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    padding: calc(var(--global-scale) * 24px) calc(var(--global-scale) * 20px);
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 14px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 18px);
    text-align: left;
    color: #616d8d;
    background: #121825;
    border-radius: calc(var(--global-scale) * 10px);
    border: 1px solid #313e62;
    outline: none;
    &::placeholder {
      color: #616d8d;
    }
    @media (max-width: 540px) {
      padding: calc(var(--global-scale) * 16px) calc(var(--global-scale) * 12px);
    }
    &:focus {
      border-color: #1c64f2;
      color: white;
    }
  }

  & > button {
    position: absolute;
    right: calc(var(--global-scale) * 24px);
    border: none;
    cursor: pointer;
    outline: none;
  }
`;
type Message = { role: "assistant" | "user"; content: string };
const Chat = () => {
  const [data, setData] = useState<Message[]>([
    {
      role: "user",
      content: "Hello, I am a bot. How can I help you today?",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const getData = async () => {
    setLoading(true);
    const newMessage = await newCompletion(data);
    if (!newMessage) {
      return;
    }
    setData((prev) => [...prev, { role: "assistant", content: newMessage }]);
    setLoading(false);
  };

  useEffect(() => {
    if (data[data.length - 1]?.role === "user") {
      getData();
    }
    if (ref.current) {
      ref.current.scrollTop = ref.current?.scrollHeight;
    }
  }, [data.length]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current?.scrollHeight;
    }
  }, [loading]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    const formChat = document.getElementById("form-chat") as HTMLFormElement;
    const form = new FormData(formChat);
    const message = form.get("message");
    if (!message) {
      return;
    }

    setData((prev) => [...prev, { role: "user", content: message as string }]);
    formChat.reset();
  };

  return (
    <ChatStyle>
      <ChatContainer>
        <BgChat id="bg-chat" />
        <ChatHeader>
          <IconContainer>
            <img src={botIcon} alt="bot" />
          </IconContainer>
          <TextContainer>
            <h2>BotHub: ChatGPT & Midjourney</h2>
            <p>bot</p>
          </TextContainer>
        </ChatHeader>
        <ChatContent ref={ref}>
          {data.map((message: any, index: number) => (
            <MessageRow role={message.role} key={index}>
              <BotMessageIcon />
              <div>
                <span>{message.role === "assistant" ? "Gemini" : ""}</span>
                <p>{message.content}</p>
              </div>
            </MessageRow>
          ))}
          {loading && (
            <MessageRow role="assistant">
              <BotMessageIcon />
              <div>
                <span>Gemini</span>
                <p>
                  <Badges
                    text={"ChatGPT генерирует..."}
                    loading={loading}
                    error={false}
                  />
                </p>
              </div>
            </MessageRow>
          )}
          {error && (
            <MessageRow role="assistant">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
                src={botIcon}
                alt="bot"
              />
              <div>
                <span>Gemini</span>
                <p>
                  <Badges
                    text={"Ошибка генерации"}
                    loading={false}
                    error={true}
                  />
                </p>
              </div>
            </MessageRow>
          )}
        </ChatContent>
        <ChatFooter>
          <form
            id="form-chat"
            onSubmit={handleSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            name="form"
          >
            <InputBox>
              <input
                type="text"
                name="message"
                placeholder="Спроси о чем нибудь..."
                required
                autoComplete="off"
              />
              <IconButton
                onClick={handleSubmit}
                type="button"
                aria-label="send"
              >
                <SendIcon />
              </IconButton>
            </InputBox>
          </form>
        </ChatFooter>
      </ChatContainer>
    </ChatStyle>
  );
};

export default Chat;

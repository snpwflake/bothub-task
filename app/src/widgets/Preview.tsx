import styled from "styled-components";
import BgIcon from "../icons/Grid.svg";
import Chat from "../entities/chat/Chat";
import Button from "../features/Button";
const PreviewStyle = styled.div<{}>`
  width: 100%;
  position: relative;
`;

const Container = styled.div<{}>`
  max-width: calc(var(--global-scale) * 1290px);
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  padding: calc(var(--global-scale) * 40px) 0;
  @media (max-width: 1060px) {
    flex-direction: column;
    gap: calc(var(--global-scale) * 40px);
  }
`;

const Background = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src});
`;

const BgGradient = styled.div<{}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(14, 12, 21);
  background: radial-gradient(
    circle,
    rgba(14, 12, 21, 0.6979166666666667) 0%,
    rgba(14, 12, 21, 0.6895133053221288) 70%,
    rgba(14, 12, 21, 1) 100%
  );
`;

const CardPreview = styled.div<{}>`
  max-width: calc(var(--global-scale) * 540px);
  width: 100%;
  position: relative;
  z-index: 1;
  & > h1 {
    margin: 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 46px);
    font-weight: 600;
    line-height: calc(var(--global-scale) * 60px);
  }
  & > p {
    margin: calc(var(--global-scale) * 20px) 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 22px);
  }

  @media (max-width: 1060px) {
    max-width: 100%;

    text-align: center;
    & > h1 {
      font-size: calc(var(--global-scale) * 32px);
      line-height: calc(var(--global-scale) * 40px);
    }
  }
`;
const Preview = () => {
  return (
    <PreviewStyle>
      <Background src={BgIcon}>
        <BgGradient></BgGradient>
        <Container>
          <CardPreview>
            <h1>ChatGPT: ваш умный помощник</h1>
            <p>
              Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
              Без VPN и абонентской платы. Создавайте контент, обрабатывайте
              данные и получайте ответы на вопросы через удобный интерфейс!
            </p>
            <Button size="md">Начать работу</Button>
          </CardPreview>
          <Chat />
        </Container>
      </Background>

      {/* <Background src={BgIcon} /> */}
    </PreviewStyle>
  );
};

export default Preview;

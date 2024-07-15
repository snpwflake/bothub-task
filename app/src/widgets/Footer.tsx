import styled from "styled-components";
import Logo from "../icons/Logo";

const FooterStyle = styled.footer`
  margin-top: calc(var(--global-scale) * 120px);
  padding: 0 calc(var(--global-scale) * 40px);
  background: linear-gradient(0deg, #121825, #121825),
    radial-gradient(
      51.67% 103.33% at 50% -3.33%,
      rgba(28, 100, 242, 0.5) 0%,
      rgba(8, 16, 39, 0) 70.32%
    );
  border-top: 1px solid #222b44;
  h1 {
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-family: IBM Plex Sans;
      font-size: calc(var(--global-scale) * 16px);
      font-weight: 400;
      line-height: calc(var(--global-scale) * 22px);
      color: white;
    }
  }
`;
const Container = styled.div`
  max-width: calc(var(--global-scale) * 1290px);
  margin: 0 auto;
  padding: calc(var(--global-scale) * 64px) 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1060px) {
    flex-direction: column;
    padding: calc(var(--global-scale) * 40px) 0;
  }
`;
const LeftContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-top: calc(var(--global-scale) * 20px);
    }
  }
`;
const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--global-scale) * 72px);

  h2 {
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 600;
    line-height: calc(var(--global-scale) * 22px);
    text-align: left;
    color: #616d8d;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-top: calc(var(--global-scale) * 20px);
    }
  }
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--global-scale) * 32px);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <LeftContainer>
          <ul>
            <li>
              <Logo />
            </li>
            <li>ООО «Ботхаб» ОГРН 1236300016259</li>
            <li>@BotHub 2023</li>
            <li>Пользовательское соглашение</li>
            <li></li>
          </ul>
        </LeftContainer>
        <RightContainer>
          <div>
            <h2>Информация</h2>
            <ul>
              <li>Главная страница</li>
              <li>Тарифы</li>
              <li>Контакты</li>
              <li>Наши возможности</li>
              <li>Модели нейросетей</li>
              <li>О Нас</li>
              <li>Для инвесторов</li>
            </ul>
          </div>
          <div>
            <h2>Наши продукты</h2>
            <ul>
              <li>ChatGPT для бизнеса</li>
              <li>Агрегатор нейросетей</li>
              <li>ChatGPT в Telegram</li>
            </ul>
          </div>
          <div>
            <h2>Ссылки</h2>
            <ul>
              <li>Сообщество в телеграм</li>
              <li>Телеграм бот</li>
              <li>email@bothub.chat</li>
            </ul>
          </div>
          <div>
            <h2>Блог</h2>
            <ul>
              <li>Наш блог</li>
              <li>Habr</li>
              <li>Телеграм</li>
            </ul>
          </div>
        </RightContainer>
      </Container>
    </FooterStyle>
  );
};

export default Footer;

import styled from "styled-components";
import Logo from "../icons/Logo";
import Nav from "../features/Nav";
import Button from "../features/Button";
import SelectLang from "../features/SelectLang";
const HeaderStyle = styled.header<{}>`
  border-bottom: 1px solid #222b44;
  background-color: #12182566;
`;

const LogoLink = styled.a<{}>`
  text-decoration: none;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

const Container = styled.div<{}>`
  height: calc(var(--global-scale) * 84px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc(var(--global-scale) * 1290px);
  margin: 0 auto;
  & > div {
    display: flex;
    align-items: center;
    gap: calc(var(--global-scale) * 24px);
  }
`;
const VerticalLine = styled.div<{}>`
  width: 1px;
  height: calc(var(--global-scale) * 32px);
  background-color: #222b44;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <div>
          <LogoLink href="/">
            <Logo />
          </LogoLink>
          <VerticalLine />
          <Nav />
        </div>
        <div>
          <SelectLang />
          <Button size="sm">Авторизация</Button>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;

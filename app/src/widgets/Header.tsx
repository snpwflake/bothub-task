import styled from "styled-components";
import Logo from "../icons/Logo";
import Nav from "../features/Nav";
import Button from "../features/Button";
import SelectLang from "../features/SelectLang";
import IconButton from "../features/IconButton";
import MenuIcon from "../icons/MenuIcon";
import DropMenu from "../features/DropMenu";
import AuthButton from "../features/AuthButton";
const HeaderStyle = styled.header<{}>`
  border-bottom: 1px solid #222b44;
  background-color: #12182566;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 calc(var(--global-scale) * 40px);
`;

const LogoLink = styled.a<{}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  & > svg {
    width: calc(var(--global-scale) * 90px);
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
  @media (max-width: 1060px) {
    max-width: 100%;
  }
`;
const VerticalLine = styled.div<{}>`
  width: 1px;
  height: calc(var(--global-scale) * 32px);
  background-color: #222b44;
  @media (max-width: 1060px) {
    display: none;
  }
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
          <AuthButton />
          <DropMenu />
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;

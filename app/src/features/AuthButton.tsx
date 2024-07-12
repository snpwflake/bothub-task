import styled from "styled-components";
import Button from "./Button";

const Container = styled.div<{}>`
  display: block;
  @media (max-width: 540px) {
    display: none;
  }
`;
const AuthButton = () => {
  return (
    <Container>
      <Button size="sm">Авторизация</Button>
    </Container>
  )
};
export default AuthButton;
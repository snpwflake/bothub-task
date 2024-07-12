import styled from "styled-components";

const Body = styled.main<{}>`
  padding: 0 calc(var(--global-scale) * 40px);
`;
const Main = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <Body>{children}</Body>;
};

export default Main;

import styled from "styled-components";
import Main from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

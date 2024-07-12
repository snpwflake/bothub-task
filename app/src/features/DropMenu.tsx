import IconButton from "./IconButton";
import MenuIcon from "../icons/MenuIcon";
import { useState } from "react";
import styled from "styled-components";

const Menu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: calc(var(--global-scale) * 85px);
  z-index: 998;
  background-color: #0E0C15;
  left: 0;
  width: 100%;
  height: calc(100vh - calc(var(--global-scale) * 85px));
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn {
    from {
      transform: translateY(-84px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Container = styled.div<{}>`
  display: none;
  @media (max-width: 1060px) {
    display: block;
  }
`;

const MenuLink = styled.ul<{}>`
  display: flex;
  padding: calc(var(--global-scale) * 34px);
  flex-direction: column;
  gap: calc(var(--global-scale) * 34px);
  list-style: none;
  align-items: left;

`;

const Link = styled.a<{}>`
  text-decoration: none;
  color: white;
  font-family: IBM Plex Sans;
  font-size: calc(var(--global-scale) * 16px);
  font-weight: 600;
  line-height: calc(var(--global-scale) * 22px);
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0b5ed7;
  }
  
`;
const LINKS = [
  {
    label: "Продукты",
    href: "/products",
  },
  {
    label: "Пакеты",
    href: "/packages",
  },
  {
    label: "API",
    href: "/api",
  },
  {
    label: "Блог",
    href: "/blog",
  },
];

const DropMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    document.body.style.overflow = open ? "auto" : "hidden";
    setOpen((prev) => !prev);
  }

  return (
    <Container>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={open}>
        <MenuLink>
          {LINKS.map((link) => (
            <Link href={link.href}>{link.label}</Link>
          ))}
        </MenuLink>
      </Menu>
    </Container>
  )
};

export default DropMenu;
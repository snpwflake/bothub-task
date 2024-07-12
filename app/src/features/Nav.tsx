import styled from "styled-components";

const MenuLink = styled.ul<{}>`
  display: flex;
  padding: 0;
  gap: calc(var(--global-scale) * 34px);
  list-style: none;
  align-items: center;
  @media (max-width: 1060px) {
    display: none;
  }
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
const Nav = () => {
  return (
    <MenuLink>
      {LINKS.map((link) => (
        <Link href={link.href}>{link.label}</Link>
      ))}
    </MenuLink>
  );
};

export default Nav;

import styled from "styled-components";

const IconButton = styled.button<{}>`
  width: calc(var(--global-scale) * 40px);
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: IBM Plex Sans;
  box-shadow: 0px 1px 1px 0px #ffffff66 inset;
  background-color: #1c64f2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  &:hover {
    background-color: #0b5ed7;
    color: white;
  }
  &:active {
    transform: translateY(1px);
    background-color: #0e3176;
    color: white;
  }
`;

export default IconButton;
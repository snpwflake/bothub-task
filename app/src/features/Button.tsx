import styled, { css } from "styled-components";

const Button = styled.button<{ size: "sm" | "md" }>`
  ${(props) => {
    if (props.size === "sm") {
      return css`
        font-size: max(calc(var(--global-scale, 1) * 15px), 12px);
        line-height: 20px;
        padding: max(calc(var(--global-scale, 1) * 10px), 8px)
          max(calc(var(--global-scale, 1) * 18px), 14px);
      `;
    } else if (props.size === "md") {
      return css`
        font-size: 18px;
        line-height: 24px;
        padding: 14px 24px;
      `;
    }
  }}
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

export default Button;

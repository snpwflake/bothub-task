import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import { TgIcon, AgregatorIcon, BussinessIcon } from "../icons/LinkIcons";

const SelectContainer = styled.div<{ open: boolean }>`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  & > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 600;
    line-height: calc(var(--global-scale) * 22px);
    text-align: left;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;

    &:hover {
      color: #0b5ed7;
      & > svg {
        stroke: #0b5ed7;
      }
    }
    ${({ open }) => {
      if (open) {
        return css`
          color: #0b5ed7;
          & > svg {
            stroke: #0b5ed7;
          }
        `;
      }
    }}
  }
  & > button > svg:last-child {
    transition: transform 0.2s;
    transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
  }
`;
const Select = styled.ul<{ open: boolean }>`
  position: absolute;
  z-index: 1;
  top: 100%;
  margin-top: 10px;
  left: 0;
  width: calc(var(--global-scale) * 700px);
  border: 1px solid #313e62;
  background-color: #222b44;
  border-radius: calc(var(--global-scale) * 8px);
  list-style: none;
  padding: 0;
  text-align: center;
  display: ${({ open }) => (open ? "block" : "none")};
  animation: ${({ open }) => open && "open 0.15s ease-in-out"};
  padding: calc(var(--global-scale) * 20px);
  @keyframes open {
    0% {
      overflow: hidden;
      left: 0;
      transform: translateY(-100%);
      transform: translateX(-100%);
      height: 0;
      scale: 0;
      transform-origin: top;
    }
    100% {
      overflow: visible;
      height: auto;
      scale: 1;
    }
  }
  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    border-radius: 8px;
    gap: calc(var(--global-scale) * 20px);
    & > a {
      font-family: IBM Plex Sans;
      color: white;
      text-decoration: none;
      padding: calc(var(--global-scale) * 14px);
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      &:hover {
        background-color: #313e62;
        opacity: 0.8;
      }
      h2 {
        padding: 0;
        margin: 0;
        font-size: calc(var(--global-scale) * 16px);
        font-weight: 600;
        line-height: calc(var(--global-scale) * 22px);
        text-align: left;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: calc(var(--global-scale) * 12px);
        font-weight: 400;
        line-height: calc(var(--global-scale) * 16px);
        text-align: left;
      }
    }
  }
`;

const LinkProduct = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (!target.closest("#product")) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <SelectContainer id="product" open={open}>
      <button onClick={handleClick}>
        Продукты {open ? <ArrowIcon /> : <ArrowIcon />}
      </button>
      <Select open={open}>
        <div>
          <a href="">
            <AgregatorIcon></AgregatorIcon>
            <div>
              <h2>Агрегатор нейросетей BotHub</h2>
              <p>ChatGPT на базе 3.5 и 4.0 версии OpenAI</p>
            </div>
          </a>
          <a href="">
            <BussinessIcon></BussinessIcon>
            <div>
              <h2>Telegram бот</h2>
              <p>Удобный бот в Telegram который всегда под рукой</p>
            </div>
          </a>
          <a href="">
            <TgIcon></TgIcon>
            <div>
              <h2>Бизнес бот</h2>
              <p>ChatGPT для эффективного решения бизнес задач</p>
            </div>
          </a>
        </div>
      </Select>
    </SelectContainer>
  );
};

export default LinkProduct;

import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import GlobysIcon from "../icons/GlobysIcon";

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
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
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
  left: 0;
  width: 100%;
  background-color: #222b44;
  border-radius: 8px;
  list-style: none;
  padding: 8px 0;
  text-align: center;
  display: ${({ open }) => (open ? "block" : "none")};
  animation: ${({ open }) => open && "open 0.15s ease-in-out"};

  @keyframes open {
    0% {
      overflow: hidden;
      height: 0;
      scale: 0;
      transform-origin: top;
    }
    100% {
      overflow: visible;
      height: 100px;
      scale: 1;
    }
  }
  & > li {
    padding: 10px;
    border-radius: 8px;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 600;
    background-color: inherit;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #0b5ed7;
    }
  }
`;

const langList = ["RU", "EN", "DE", "FR"];

const SelectLang = () => {
  const [select, setSelect] = useState("RU");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (!target.closest("#lang")) {
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
    <SelectContainer id="lang" open={open}>
      <button onClick={handleClick}>
        <GlobysIcon /> {select} {open ? <ArrowIcon /> : <ArrowIcon />}
      </button>
      <Select open={open}>
        {langList.map((item: string) => (
          <li
            onClick={() => {
              setSelect(item);
              handleClick();
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectLang;

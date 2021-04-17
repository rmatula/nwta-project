import styled from "styled-components";

interface WrapperProps {
  margin?: string;
  flex?: any;
}

export const Wrapper = styled.div<WrapperProps>`
  margin: ${({ margin }) => margin};
  display: ${({ flex }) => (flex ? "flex" : "block")};
  justify-content: ${({ flex }) => (flex ? "center" : "")};
`;

interface ButtonProps {
  disabled?: boolean;
  padding?: string;
  bColor?: string;
  bFlex?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  color: #fff;
  user-select: none;
  outline: none;
  border: none;
  padding: ${({ padding }) => (padding ? padding : "0.5em 3em")};
  border-radius: 1em;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: ${({ bColor }) => (bColor ? bColor : "transparent")};
  border: 3px solid #be6a15;
  text-shadow: 2px 1px 0 rgba(0, 0, 0, 0.3);

  cursor: pointer;
  opacity: 90%;
  &:disabled {
    cursor: not-allowed;
    opacity: 60%;
  }
  &:hover {
    opacity: 100%;
  }
  transition: all 0.2s;
`;

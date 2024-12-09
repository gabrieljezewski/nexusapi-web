import styled from "styled-components";
import { Button as AntdButton } from "antd";

interface StyledButtonProps {
  width?: string;
  buttonType?: "primary" | "secondary";
}

export const Button = styled(AntdButton)<StyledButtonProps>`
  width: ${(props) => props.width || "100%"} !important;
  height: 30px;
  font-size: 14px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.buttonType === "primary" ? "var(--purple-primary)" : "var(--white)"} !important;
  color: ${(props) =>
    props.buttonType === "primary" ? "var(--white)" : "var(--purple-primary)"} !important;
  border: ${(props) =>
    props.buttonType === "secondary" ? "1px solid var(--purple-primary)" : "none"} !important;

&:hover {
    background-color: ${(props) =>
      props.buttonType === "primary"
        ? "var(--purple-800)"
        : "var(--purple-secondary)"} !important;
    color: ${(props) =>
      props.buttonType === "primary" ? "var(--white)" : "var(--white)"} !important;
    border: ${(props) =>
      props.buttonType === "secondary" ? "1px solid var(--purple-primary)" : "none"} !important;
  }
`;

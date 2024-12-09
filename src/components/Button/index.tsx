import * as S from "./styles"

interface ButtonProps {
  width?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  htmlType?: "button" | "submit";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  width,
  type = "primary",
  onClick,
  htmlType = "button",
  loading = false,
  children,
}) => {
  return (
    <S.Button
      width={width}
      buttonType={type}
      type="default"
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
    >
      {children}
    </S.Button>
  );
};

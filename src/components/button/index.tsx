import {
  ButtonWrapper, 
} from './styles'

type ButtonProps = {
  border?: string;
  color: string;
  text?: string;
  cursor?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ border, color, text, cursor, width, height, disabled, children, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonWrapper 
        border={border}
        color={color}
        cursor={cursor}
        width={width}
        height={height}
        disabled={disabled}
        onClick={onClick}>
        {text}
        {children}
      </ButtonWrapper>
    </>
  )
}

export default Button;

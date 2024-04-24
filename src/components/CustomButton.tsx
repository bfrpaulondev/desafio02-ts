import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;

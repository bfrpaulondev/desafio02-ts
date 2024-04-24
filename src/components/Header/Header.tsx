import { Box, BoxProps } from '@chakra-ui/react';
import './Header.css';

interface HeaderProps extends BoxProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children, ...rest }) => {
  return (
    <Box as='header' className='header' {...rest}>
      {children}
    </Box>
  );
};

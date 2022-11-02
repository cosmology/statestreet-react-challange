import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactElement } from 'react';
import Header from '../sections/Header';
import Sidebar from '../sections/Sidebar';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Container>
  );
};

export default Layout;

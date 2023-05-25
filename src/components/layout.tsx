import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './header';
import { DarkModeSwitch } from './darkModeSwitch';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Flex direction="column" minHeight="100vh">
            <Header />
            <main>{children}</main>
        </Flex>
    );
};

export default Layout;

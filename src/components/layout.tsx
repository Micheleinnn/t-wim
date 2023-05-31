import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './header';
import { DarkModeSwitch } from './darkModeSwitch';
import { EventFormProvider } from './context';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Flex direction="column" minHeight="100vh">
            <Header />
            <main><EventFormProvider>{children}</EventFormProvider></main>
        </Flex>
    );
};

export default Layout;

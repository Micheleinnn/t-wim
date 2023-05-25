import React, { useState } from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleMenuClick}>
        <FiMenu size={24} /> 
      </Button>
      {isMenuOpen && (
        <ul>
          <li>
            <Link href="/uvod" onClick={handleLinkClick}>
              <a>Úvod</a>
            </Link>
          </li>
          <li>
            <Link href="/mapa" onClick={handleLinkClick}>
              <a>Dispečink</a>
            </Link>
          </li>
          <li>
            <Link href="/seznam" onClick={handleLinkClick}>
              <a>Seznam objektů</a>
            </Link>
          </li>
          <li>
            <Link href="/detail" onClick={handleLinkClick}>
              <a>Detail objektu</a>
            </Link>
          </li>
        </ul>
      )}
    </Box>
  );
};

export default HamburgerMenu;

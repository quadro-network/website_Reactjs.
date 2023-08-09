import React, { useState } from 'react';
import Navbar from './Navbar.js';
import About from './About.js';

const NavPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar onAboutClick={handleModalOpen} />
      <About isOpen={modalOpen} onClose={handleModalClose} />
      
    </>
  );
}

export default NavPanel;

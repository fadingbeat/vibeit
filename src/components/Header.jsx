import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import '../styles/Header.css';

function Header() {
  return (
    <div className="hero-section">
      <nav className="header-navigation">
        <Link href="#" underline="hover">
          {'O nama'}
        </Link>
        <Link href="#" underline="hover">
          {'Radovi'}
        </Link>
        <Link href="#" underline="hover">
          {'Usluge'}
        </Link>
        <Link href="#" underline="hover">
          {'Kontakt'}
        </Link>
      </nav>
      <img src="../../logo.svg" alt="logo" />
      <h1>Izrada i održavanje web stranica</h1>
      <Button variant="outlined">Usluge</Button>
      <Button variant="contained">Kontakt</Button>
    </div>
  );
}

export default Header;

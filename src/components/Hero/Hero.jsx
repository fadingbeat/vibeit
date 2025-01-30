import React from 'react';
import {
  HeroContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  Title,
  ButtonContainer,
  CustomButton,
} from './Hero.styles';

function Hero() {
  return (
    <HeroContainer>
      {/* 🟢 Navigation Bar */}
      <Nav>
        <Logo variant="h6">MyLogo</Logo>
        <NavLinks>
          <NavLink href="#">O nama</NavLink>
          <NavLink href="#">Radovi</NavLink>
          <NavLink href="#">Usluge</NavLink>
          <NavLink href="#">Kontakt</NavLink>
        </NavLinks>
      </Nav>

      {/* 🟢 Hero Content */}
      <Title variant="h1">Izrada i održavanje web stranica</Title>
      <ButtonContainer>
        <CustomButton primary="true">Usluge</CustomButton>
        <CustomButton>Kontakt</CustomButton>
      </ButtonContainer>
    </HeroContainer>
  );
}

export default Hero;

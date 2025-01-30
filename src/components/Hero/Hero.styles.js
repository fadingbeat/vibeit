import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { getOpacity } from '@mui/material/styles/createColorScheme';

// 🟢 Hero Container (Full Screen Responsive Section)
export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  minHeight: '100vh',
  // padding: '2rem',
  background:
    'linear-gradient(180deg, rgba(26,1,54,1) 0%, rgba(53,1,48,1) 56%, rgba(64,2,45,1) 70%, rgba(73,2,43,1) 81%, rgba(91,2,39,1) 95%, rgba(99,2,37,1) 99%)',
  color: 'white',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
  },
}));

// 🟢 Logo (Text-based, can be replaced with an image)
export const Logo = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export const Nav = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  padding: '1.5rem',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  flexWrap: 'wrap', // ✅ Ensures wrapping on smaller screens

  [theme.breakpoints.down('lg')]: {
    maxWidth: '90%', // ✅ Ensures content stays inside viewport
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    padding: '1rem',
  },
}));

export const NavLinks = styled(Box)(({ theme }) => ({
  display: 'none', // ✅ Hidden on mobile
  flexWrap: 'wrap', // ✅ Ensures items wrap instead of overflowing
  justifyContent: 'center', // ✅ Center links on smaller screens

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: '1.5rem', // ✅ Slightly reduced spacing to prevent overflow
    maxWidth: '80%', // ✅ Prevents items from getting cut off
  },
}));

export const NavLink = styled('a')({
  color: '#D9D9D9',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontFamily: '"Poppins", serif',
  fontWeight: 600,
  fontStyle: 'normal',
  transition: 'color 0.3s',

  '&:hover': {
    textDecoration: 'underline',
  },
});

// 🟢 Title
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: '"Audiowide", serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '4rem',
  marginBottom: '1.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

// 🟢 Button Container
export const ButtonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@media (min-width:768px)': {
    flexDirection: 'row',
  },
});

// 🟢 Buttons
export const CustomButton = styled(Button)(({ primary }) => ({
  padding: '0.8rem 2rem',
  fontSize: '1.5rem',
  fontFamily: '"Poppins", serif',
  fontWeight: 700,
  fontStyle: 'normal',
  borderRadius: '100px',
  textTransform: 'none',
  backgroundColor: primary ? '#1A0136' : '#D9D9D9', // ✅ Matches hero section
  color: primary ? '#D9D9D9' : '#1A0136', // ✅ High contrast

  '&:hover': {
    backgroundColor: primary ? '#49022B' : '#bfbfbf', // 🎨 Blends naturally with hero gradient
    // color: primary ? '#ffffff' : '#1A0136', // ✅ Keeps contrast readable
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
}));

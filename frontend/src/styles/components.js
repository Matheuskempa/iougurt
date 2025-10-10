// src/styles/components.js
import colors from "../styles/colors";

const buttonStyles = {
  base: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  primary: {
    backgroundColor: colors.PrimaryPink,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.SecondaryPink,
    color: colors.black,
  },
};

const cardStyles = {
  base: {
    backgroundColor: colors.white,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  small: {
    width: '90%',
    maxWidth: '400px',
  },
  large: {
    width: '100%',
    maxWidth: '800px',
  },
};

export { buttonStyles, cardStyles };
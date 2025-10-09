// src/styles/components.js

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
    backgroundColor: '#ff69b4',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#ffe4e1',
    color: '#333',
  },
};

const cardStyles = {
  base: {
    backgroundColor: '#fff',
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
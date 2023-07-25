import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>
        © {currentYear} Sabri Zaltni - My Portfolio
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#ff1aa4',
    padding: '10px',
    textAlign: 'center',
  },
  text: {
    margin: 0,
    color: '#272d72',
  },
};

export default Footer;

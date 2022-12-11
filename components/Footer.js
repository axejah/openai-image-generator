import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div>
            created with <span style={{ color: 'red' }}>♥️</span> by{' '}
            <a
              href="https://www.github.com/axejah"
              target="_blank"
              rel="noreferrer"
            >
              Kevin
            </a>
          </div>
          <div>
            built upon{' '}
            <a href="https://openai.com/" target="_blank" rel="noreferrer">
              openai.com
            </a>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer;

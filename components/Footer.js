import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div>
            created with <span style={{ color: 'red' }}>♥️</span> by{' '}
            <a href="https://www.github.com/axejah" target="_blank">
              Kevin
            </a>
          </div>
          <div>
            built upon{' '}
            <a href="https://openai.com/" target="_blank">
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

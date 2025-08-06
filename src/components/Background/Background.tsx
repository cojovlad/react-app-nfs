import styles from './Background.module.css';

const Background = () => {
  return (
    <>
      <div className={styles.bg}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>
    </>
  );
};

export default Background;
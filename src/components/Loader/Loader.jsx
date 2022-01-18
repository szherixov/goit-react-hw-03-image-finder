import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const loader = () => {
  return (
    <div className={styles.center}>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};
export default loader;

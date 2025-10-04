import { type FC } from 'react';
import bgImage from '@/assets/bg.jpg';
import styles from './Background.module.css';

export const Background: FC = () => {
  return (
    <div>
      <img className={styles.bgImage} src={bgImage} alt="background" />
    </div>
  );
};

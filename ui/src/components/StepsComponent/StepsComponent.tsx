import React, { FC } from 'react';
import styles from './StepsComponent.module.css';

interface StepsComponentProps {}

const StepsComponent: FC<StepsComponentProps> = () => (
  <div className={styles.StepsComponent}>
    StepsComponent Component
  </div>
);

export default StepsComponent;



import React from 'react';
import styles from '../../../styles/components/carreer-card.module.scss';

function CarreerCard(props) {
  const carreer = props.carreer;

  return (
    <div className={styles.carreerCard}>
      <div className={styles.carrerDetail}>
        <h3 className={styles.occupation}>{carreer.occupation}</h3>
        <h4 className={styles.companieName}>{carreer.name}</h4>
        <span className={styles.timeWork}>{carreer.timeWork}</span>
        <p className={styles.detailOccupation}>{carreer.description}</p>
      </div>
    </div>
  );
};

export default CarreerCard;




import React from 'react';
import styles from '../../../styles/Home.module.scss';

function SkillCard(props) {
  const skill = props.skill;

  function getSkillColor(percentage) {
    const color = percentage <= 49 ? styles.initial : percentage <= 74 ? styles.medium : styles.high;
    return color;
  }

  return (
    <div className={styles.skillContainer}>
      <span className={styles.nameSkill}>{skill.name}</span>

      <div className={`${styles.progressbarContainer} ${getSkillColor(skill.porcentage)}`}>
      <div className={styles.progressbarComplete} style={{width: `${skill.porcentage}%`}}>
          <div className={styles.progressbarLiquid}></div>
      </div>
      <span className={styles.progress}>{skill.porcentage}%</span>
      </div>
    </div>
  );
};

export default SkillCard;


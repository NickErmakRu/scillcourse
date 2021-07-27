import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={ styles.card }>
      <div className={ styles.textContent }>
        <div className={ styles.metaData }>
          <div className={ styles.userLink }>
            <img
              className={ styles.avatar }
              src="https://uifaces.co/our-content/donated/6f6p85he.jpg"
              alt="avatar"
            />
            <a href="#user-url" className={ styles.username }>Сергей Некрасов</a>
          </div>
          <span className={ styles.createdAt }>4 часа назад</span>
        </div>
        <h2 className={ styles.title }>
          <a href="#post-url" className={ styles.postLink }>
            Первая статья для блога
          </a>
        </h2>
      </div>

      <div className={ styles.preview } />
      <div className={ styles.menu } />
      <div className={ styles.controls } />
    </li>
  );
}

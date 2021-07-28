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
            Первая статья для блога            Первая статья для блога
            Первая статья для блога
            Первая статья для блога
            Первая статья для блога

          </a>
        </h2>
      </div>

      <div className={ styles.preview }>
        <img 
          className={ styles.previewImg }
          src="https://www.sunchemical.com/wp-content/uploads/2019/07/SunWave_banner-1200x400.jpg"
        />
      </div>
      <div className={ styles.menu }>
        <button className={ styles.menuButton }>
          <svg xmlns="http://www.w3.org/2000/svg"  width="20pt" height="20pt" viewBox="0 0 20 20" version="1.1">
            <g id="surface1">
              <path d="M 10 7.5 C 8.621094 7.5 7.5 8.621094 7.5 10 C 7.5 11.378906 8.621094 12.5 10 12.5 C 11.378906 12.5 12.5 11.378906 12.5 10 C 12.5 8.621094 11.378906 7.5 10 7.5 Z M 10 11.667969 C 9.082031 11.667969 8.332031 10.917969 8.332031 10 C 8.332031 9.082031 9.082031 8.332031 10 8.332031 C 10.917969 8.332031 11.667969 9.082031 11.667969 10 C 11.667969 10.917969 10.917969 11.667969 10 11.667969 Z M 10 11.667969 "/>
              <path d="M 10 15 C 8.621094 15 7.5 16.121094 7.5 17.5 C 7.5 18.878906 8.621094 20 10 20 C 11.378906 20 12.5 18.878906 12.5 17.5 C 12.5 16.121094 11.378906 15 10 15 Z M 10 19.167969 C 9.082031 19.167969 8.332031 18.417969 8.332031 17.5 C 8.332031 16.582031 9.082031 15.832031 10 15.832031 C 10.917969 15.832031 11.667969 16.582031 11.667969 17.5 C 11.667969 18.417969 10.917969 19.167969 10 19.167969 Z M 10 19.167969 "/>
              <path d="M 10 5 C 11.378906 5 12.5 3.878906 12.5 2.5 C 12.5 1.121094 11.378906 0 10 0 C 8.621094 0 7.5 1.121094 7.5 2.5 C 7.5 3.878906 8.621094 5 10 5 Z M 10 0.832031 C 10.917969 0.832031 11.667969 1.582031 11.667969 2.5 C 11.667969 3.417969 10.917969 4.167969 10 4.167969 C 9.082031 4.167969 8.332031 3.417969 8.332031 2.5 C 8.332031 1.582031 9.082031 0.832031 10 0.832031 Z M 10 0.832031 "/>
            </g>
          </svg>
        </button>
      </div>
      <div className={ styles.controls } />
    </li>
  );
}

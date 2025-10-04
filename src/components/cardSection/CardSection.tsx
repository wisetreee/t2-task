import { type FC } from 'react';
import styles from './CardSection.module.css';
import { Card } from './card/Card';
import catImage from '@/assets/cat.png';

const cards = [
  {
    title: 'Нямушка',
    subtitle: 'с фуа-гра',
    footer: 'Печень утки разварная с артишоками.',
    image: catImage,
    quantity: 10,
    quantityOfGifts: 1,
    weight: 0.5
  },
  {
    title: 'Нямушка',
    subtitle: 'с рыбой',
    footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    image: catImage,
    quantity: 40,
    quantityOfGifts: 1,
    weight: 2
  },
  {
    title: 'Нямушка',
    subtitle: 'с курой',
    footer: 'Филе из цыплят с трюфелями в бульоне.',
    image: catImage,
    quantity: 100,
    quantityOfGifts: 1,
    weight: 5,
    extraBonus: 'заказчик доволен'
  }
];

export const CardSection: FC = () => {
  return (
    <section className={`container ${styles.container}`}>
      <h1 className={styles.sectionHeader}>Ты сегодня покормил кота?</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

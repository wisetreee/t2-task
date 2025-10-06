import { type FC, type HTMLAttributes } from 'react';
import styles from './Card.module.css';
import { declension } from '@/lib';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  footer: string;
  image: string;
  quantity: number;
  quantityOfGifts: number;
  extraBonus?: string;
  weight: number;
  isDisabled?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({
  title,
  subtitle,
  footer,
  image,
  quantity,
  quantityOfGifts,
  extraBonus,
  weight,
  isDisabled,
  isSelected,
  isHovered,
  className,
  onClick,
  ...props
}) => {
  return (
    <div className={`${styles.cardWithFooter} ${className ?? ''}`} {...props}>
      <div
        className={`
  ${styles.cardBorder}
  ${isSelected ? styles.cardBorderSelected : ''}
  ${isDisabled ? styles.cardBorderDisabled : ''}
  ${isHovered ? styles.cardBorderHovered : ''}
  
`}
        onClick={onClick}
      >
        <div className={styles.cardContainer}>
          <div className={styles.textContainer}>
            <p>{isSelected && isHovered ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</p>
            <div className={styles.titleContainer}>
              <h2 className={styles.H2}>{title}</h2>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.descContainer}>
              <p>
                <b>{quantity}</b> {declension(quantity, ['порция', 'порции', 'порций'])}
              </p>
              <p>
                <b>{quantityOfGifts}</b>{' '}
                {declension(quantityOfGifts, ['мышь', 'мыши', 'мышей']) + ' в подарок'}
              </p>
              {extraBonus && <p>{extraBonus}</p>}
            </div>
          </div>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.roundedContainer}>
            <p className={styles.weightNumber}>
              {weight.toLocaleString('ru-RU', { maximumFractionDigits: 1 })}
            </p>
            <p className={styles.weightMeasure}>кг</p>
          </div>
        </div>
      </div>
      <p className={styles.footer}>
        {isDisabled ? (
          `Печалька, ${subtitle} закончился.`
        ) : isSelected ? (
          footer
        ) : (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <a className={styles.link} onClick={onClick}>
              купи
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
};

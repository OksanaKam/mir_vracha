import { FC } from 'react'
import { noto } from '@/app/fonts';
import styles from './styles.module.scss';
import Image from 'next/image';
import { IProps } from './interface';

const CardModalSecond: FC<IProps> = ({ card }) => {
    return (
        <li className={styles.card}>
            <Image className={styles.card__image} src={card.image} alt={`${card.title} ${card.text}`} />
            <span className={`${styles.card__title} ${noto.className}`}>{card.title}</span>
            <p className={`${styles.card__text} ${noto.className}`}>{card.text}
                <span className={`${styles.card__bold} ${noto.className}`}>{card.bold}</span>
                <cite className={`${styles.card__cite} ${noto.className}`}>{card.cite}</cite>
            </p>
            <span className={`${styles.card__span} ${noto.className}`}>{card.span1}</span>
            <span className={`${styles.card__span} ${noto.className}`}>{card.span2}</span>
        </li>
    );
}

export default CardModalSecond;
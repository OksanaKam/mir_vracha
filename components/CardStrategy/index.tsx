import { FC } from 'react'
import { noto } from '@/app/fonts';
import styles from './styles.module.scss';
import Image from 'next/image';
import { IProps } from './interface';

const CardStrategy: FC<IProps> = ({ card }) => {
    return (
        <li className={styles.card}>
            <Image className={styles.card__image} src={card.image} alt={`${card.title} ${card.span}`} />
            <h4 className={`${styles.card__title} ${noto.className}`}>{card.title}
                <br></br>
                <span className={`${styles.card__span} ${noto.className}`}>{card.span}</span>
                <span className={`${styles.card__title} ${noto.className}`}>{card.subtitle}</span>
            </h4>
            <p className={`${styles.card__text} ${noto.className}`}>{card.text}<cite className={`${styles.card__cite} ${noto.className}`}>{card.cite}</cite></p>
        </li>
    );
}

export default CardStrategy;
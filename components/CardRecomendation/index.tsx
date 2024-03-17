import { FC } from 'react'
import { noto } from '@/app/fonts';
import styles from './styles.module.scss';
import { IProps } from './interface';

const CardRecomendation: FC<IProps> = ({ item }) => {
    const isParagraph2 = item.paragraph2 !== '';
    return (
        <li className={styles.card}>
            <p className={`${styles.card__text} ${noto.className}`}>{item.paragraph1}
                {isParagraph2 && 
                    <>
                        <br></br>
                        <span className={`${styles.card__text} ${noto.className}`}>{item.paragraph2}</span>
                    </>
                }
                <cite className={`${styles.card__cite} ${noto.className}`}>{item.cite}</cite>
                <span className={`${styles.card__text} ${noto.className}`}>{item.paragraph3}</span>
            </p>
        </li>
    );
}

export default CardRecomendation;
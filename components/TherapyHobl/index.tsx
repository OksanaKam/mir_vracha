import { centuryGothic, noto } from '@/app/fonts';
import styles from './styles.module.scss';
import { initialCards, initialItems } from '@/utils/constants';
import CardStrategy from '../CardStrategy';
import CardRecomendation from '../CardRecomendation';

const TherapyHobl = () => {
    return (
        <section className={styles.therapy}>
            <h2 className={`${styles.therapy__title} ${centuryGothic.className}`}>Терапия ХОБЛ: что в фокусе?</h2>
            <p className={`${styles.therapy__text} ${noto.className}`}>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
            <h3 className={`${styles.therapy__subtitle} ${noto.className}`}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<cite className={`${styles.therapy__cite} ${noto.className}`}>1</cite>:</h3>
            <ul className={styles.therapy__cards}>
                {
                    initialCards.map((card) => {
                        return (
                            <CardStrategy key={card.id} card={card} />
                        )
                    })
                }
            </ul>
            <div className={styles.therapy__arrows}>
                <div className={styles.therapy__arrow1}></div>
                <div className={styles.therapy__arrow1}></div>
            </div>
            <ul className={styles.therapy__cards}>
                {
                    initialItems.map((item) => {
                        return (
                            <CardRecomendation key={item.id} item = {item} />
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default TherapyHobl;
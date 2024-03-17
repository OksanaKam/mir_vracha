import { centuryGothic } from '@/app/fonts';
import Exacerbation from '../Exacerbation';
import MostlyIll from '../MostlyIll';
import styles from './styles.module.scss';

const AboutHobl = () => {
    return (
        <section className={styles.about}>
            <h2 className={`${styles.about__title} ${centuryGothic.className}`}>ХОБЛ: мифы и реальность</h2>
            <MostlyIll />
            <Exacerbation />
        </section>
    );
}

export default AboutHobl;
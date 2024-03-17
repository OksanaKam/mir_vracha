import styles from './styles.module.scss';
import Image from 'next/image';
import chart from '../../assets/images/group_44.svg';
import { noto } from '@/app/fonts';
import { initialModalCards, modalSecond } from '../../utils/constants'
import { FC } from 'react';
import { IProps } from './interface';
import CardModalSecond from '../CardModalSecond';

const ModalExacerbation: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {

    const handleOverlay = () => {
        if (isModalOpen) {
            setIsModalOpen(false);
        }
    }
    const handleClick = () => {
        document.addEventListener("mousedown", handleOverlay);
    }

    return (
        <div className={styles.modal} onClick={handleClick}>
            <div className={styles.modal__container} >
                <span className={`${styles.modal__span} ${noto.className}`}>{modalSecond.paragraph1.text1}
                    <br></br>
                    <span className={`${styles.modal__span} ${noto.className}`}>{modalSecond.paragraph1.text2}</span>
                    <cite className={`${styles.modal__cite} ${noto.className}`}>{modalSecond.paragraph1.cite}</cite>
                    <span className={`${styles.modal__span} ${noto.className}`}>{modalSecond.paragraph1.text3}</span>
                </span>
                <p className={`${styles.modal__text} ${noto.className}`}>
                    {modalSecond.paragraph2.text1}
                    <cite className={`${styles.modal__cite} ${noto.className}`}>{modalSecond.paragraph2.cite}</cite>
                    <br></br>
                    {modalSecond.paragraph2.text2}
                </p>
                <h2 className={`${styles.modal__title} ${noto.className}`}>Пятилетняя выживаемость пациентов</h2>
                <ul className={styles.modal__cards}>
                    {
                        initialModalCards.map((card) => {
                            return (
                                <CardModalSecond key={card.id} card={card} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ModalExacerbation;
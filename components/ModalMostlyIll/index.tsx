import styles from './styles.module.scss';
import Image from 'next/image';
import chart from '../../assets/images/group_44.svg';
import { noto } from '@/app/fonts';
import { modalFirst } from '../../utils/constants'
import { FC } from 'react';
import { IProps } from './interface';

const ModalMostlyIll: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {

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
                <p className={`${styles.modal__text} ${noto.className}`}>
                    {modalFirst.paragraph1.text1}
                    <span className={`${styles.modal__span} ${noto.className}`}>{modalFirst.paragraph1.span1}</span>
                    {modalFirst.paragraph1.text2}
                    <br></br>
                    {modalFirst.paragraph1.text3}
                    <span className={`${styles.modal__span} ${noto.className}`}>{modalFirst.paragraph1.span2}</span>
                    <br></br>
                    {modalFirst.paragraph1.text4}
                </p>
                <p className={`${styles.modal__text} ${noto.className}`}>
                    {modalFirst.paragraph2.text1}
                    <span className={`${styles.modal__span} ${noto.className}`}>{modalFirst.paragraph2.span1}</span>
                    {modalFirst.paragraph2.text2}
                </p>
                <Image className={styles.modal__chart} src={chart} alt='chart' />
            </div>
        </div>
    );
}

export default ModalMostlyIll;
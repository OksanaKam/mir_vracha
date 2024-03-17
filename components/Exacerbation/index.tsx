'use client'
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../assets/images/rectangle_2.svg';
import arrow from '../../assets/images/arrow.svg';
import vector from '../../assets/images/vector_50.svg';
import border from '../../assets/images/vector_49.svg'
import { noto } from '@/app/fonts';
import { FC, useState } from 'react';
import ModalExacerbation from '../ModalExacerbation';


const Exacerbation: FC = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.ill}>
                <div className={styles.ill__logo}>
                    <Image className={styles.ill__round} src={logo} alt='logo person' />
                    <Image className={styles.ill__person} src={arrow} alt='logo person' />
                </div>
                <div className={styles.ill__about}>
                    <Image src={vector} alt='основа под текст' />
                    <Image className={styles.ill__border} src={border} alt='основа под текст' />
                    <p className={`${styles.ill__subtitle} ${noto.className}`}>Опасно <span className={`${styles.ill__bold} ${noto.className}`}>не наличие заболевания, а обострения?</span></p>
                </div>
                <p className={`${styles.ill__text} ${noto.className}`}>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
                <button className={styles.ill__button} onClick={() => setIsModalOpen(true)}></button>
            </div>
            {isModalOpen && (
                <ModalExacerbation isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            )}
        </>
    );
}

export default Exacerbation;
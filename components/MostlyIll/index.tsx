'use client'
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../assets/images/rectangle_2.svg';
import person from '../../assets/images/person.svg';
import vector from '../../assets/images/vector_50.svg';
import border from '../../assets/images/vector_49.svg';
import { noto } from '@/app/fonts';
import { FC, useState } from 'react';
import ModalMostlyIll from '../ModalMostlyIll';

const MostlyIll: FC = () => {

    const[isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.ill}>
                <div className={styles.ill__logo}>
                    <Image className={styles.ill__round} src={logo} alt='logo person' />
                    <Image className={styles.ill__person} src={person} alt='logo person' />
                </div>
                <div className={styles.ill__about}>
                    <Image src={vector} alt='основа под текст' />
                    <Image className={styles.ill__border} src={border} alt='основа под текст' />
                    <p className={`${styles.ill__subtitle} ${noto.className}`}>ХОБЛ болеют <span className={`${styles.ill__bold} ${noto.className}`}>преимущественно мужчины?</span></p>
                </div>
                <p className={`${styles.ill__text} ${noto.className}`}>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...</p>
                <button className={styles.ill__button} onClick={() => setIsModalOpen(true)}></button>
            </div>
            {isModalOpen && (
                <ModalMostlyIll isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            )}
        </>
    );
}

export default MostlyIll;
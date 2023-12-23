import React from 'react';
import styles from './banner.module.css';
import Image from "next/image";

const Banner = (props) => {
    const {title, subtitle, imgUrl} = props;


    const handleOnPlayClick = () => {
        console.log('Play clicked');
    };


    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <div className={styles.playBtnWrapper}>
                        <button className={styles.btnWithIcon} onClick={handleOnPlayClick}>
                            <Image src='/static/playArrow.svg' alt='play arrow' width='32' height='32'/>
                            <span className={styles.playText}>
                                Play
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%'
                }}
            />
        </div>
    );
};

export default Banner;
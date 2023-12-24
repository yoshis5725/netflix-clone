import React from 'react';
import styles from './card.module.css';
import { motion } from "framer-motion"
import cls from 'classnames';
import Image from "next/image";


const Card = (props) => {
    const {imgUrl='/static/defaultPic.jpg', size='medium'} = props;
    const [imgSrc, setImgSrc] = React.useState(imgUrl);


    const classMap = {
        small: styles.smItem,
        medium: styles.mdItem,
        large: styles.lgItem,
    }

    const handleImageError = () => {
        setImgSrc('/static/defaultPic.jpg')
    };



    return (
        <div className={styles.container}>
            <motion.div className={cls(styles.imgMotionWrapper, classMap[size])} whileHover={{ scale: 1.2 }}>
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt='card image'
                    fill={true}
                    onError={handleImageError}
                />
            </motion.div>
        </div>
    );
};

export default Card;
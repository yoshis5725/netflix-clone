import React from 'react';
import styles from './card.module.css';
import { motion } from "framer-motion"
import cls from 'classnames';
import Image from "next/image";


const Card = (props) => {
    const {imgUrl='/static/defaultPic.jpg', size='medium', id} = props;
    const [imgSrc, setImgSrc] = React.useState(imgUrl);


    const classMap = {
        small: styles.smItem,
        medium: styles.mdItem,
        large: styles.lgItem,
    }

    const handleImageError = () => {
        setImgSrc('/static/defaultPic.jpg')
    };


    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1};

    return (
        <div className={styles.container}>
            <motion.div className={cls(styles.imgMotionWrapper, classMap[size])} whileHover={{ ...scale }}>
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt='card image'
                    fill={true}
                    sizes={size}
                    onError={handleImageError}
                />
            </motion.div>
        </div>
    );
};

export default Card;
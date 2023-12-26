import React from 'react';
import styles from './card-section.module.css';
import Card from "@/components/card/Card";


const CardSection = (props) => {
    const {title, videos=[], size} = props;


    return (
        <section className={styles.container}>
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.cardWrapper}>
                {
                    videos.map(video => {
                        return (
                            <Card
                                key={video.id}
                                title={video.title}
                                imgUrl={video.imgUrl}
                                size={size}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default CardSection;
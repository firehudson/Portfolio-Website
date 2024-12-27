import React from 'react';
import styles from './Card.module.css';
import { Image } from 'components/Image';
import { media } from 'utils/style';
export default function Card({ title, role, brief, justify, imageUrl }) {

    return (
        <div className={styles.Card}>
            <Image reveal src={imageUrl} alt={title}
                placeholder={imageUrl}
                sizes={`(max-width: ${media.mobile}px) 100vw, 250px`} />
            <div className={styles.cardContent}>
                <h3>
                    <b>{title}</b>
                </h3>
                <p>
                    <b>Role:</b>
                    {role}
                </p>
                <p>
                    <b>Project Overview:</b>
                    {brief}
                </p>
                <p>{justify}</p>

                <a href={`/project/Projects/${title}`}>Know more</a>
            </div>
        </div>
    );
}
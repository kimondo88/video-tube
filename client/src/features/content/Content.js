import styles from './Content.module.css';
import { useState } from 'react';

export function Content(){
    //temporarily disable it for eslint, setContent will be used later
    // eslint-disable-next-line
    const [content, setContent] = useState([
        'first', 'two', 'three', 'four' , 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtheen'
    ]);
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
            {content.map( item => {
                return <div className={styles.contentItem}><span>{item}</span></div>
            })}
            </div>
            <div className={styles.content}>
            {content.map( item => {
                return <div className={styles.contentItem}><span>{item}</span></div>
            })}
            </div>
        </div>
    )
}

// map that have number of blocks that are rendered in div containers
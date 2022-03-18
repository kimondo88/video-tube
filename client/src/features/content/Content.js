import styles from './Content.module.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibility } from '../navbar/navbarSlice';

/** Main content component for the site, display fetched thumbnails videos and so on.
 * TODO display fetched thumbnails
 * @returns contentWrapper with mapped content
 */

export function Content(){
    //temporarily disable it for eslint, setContent will be used later
    // eslint-disable-next-line
    const [content, setContent] = useState([
        'first', 'two', 'three', 'four' , 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtheen'
    ]);
    const [counter, setCounter] = useState(0);
    const visible = useSelector(selectVisibility);
    useEffect(()=>{
        if(counter !== 0){
            return toggleMargin();
        }  
        setCounter(1);
    // eslint-disable-next-line
    }, [visible]);
    function toggleMargin(){
        let element = document.getElementById('contentWrapper');
        element.classList.toggle(styles.moveToLeft);
    }
    return (
        <div id="contentWrapper" className={styles.contentWrapper}>
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
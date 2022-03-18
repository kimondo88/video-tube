import styles from './Navbar.module.css'
import { selectVisibility } from './navbarSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCompass, faBolt} from '@fortawesome/free-solid-svg-icons';

/** Leftmenu Component for display that is toggled with button click( Navbar on top)
 *  
 * @returns LeftMenu component having LMenuShow and LMenuMin components
 */

export function LeftMenu(){
    return (
        <div>
            <LeftMenuShow/> 
            <LeftMenuMin/>
        </div>
    )
}

/** Full Menu component
 * 
 * @returns Full Menu Clickable divs
 */

function LeftMenuShow(){ 
    const [counter, setCounter] = useState(0);
    const visible = useSelector(selectVisibility);
    useEffect(()=>{
        if(counter !== 0){
            return toggleHidden();
        }  
        setCounter(1);
    // eslint-disable-next-line
    }, [visible]);
    function toggleHidden(){
        let element = document.getElementById('menu');
        element.classList.toggle(styles.none);
    }
    return (
        <div id='menu' className={styles.leftBar + ' ' + styles.duration}>
            <div className={styles.font}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faHouse}/>
                Home
            </div>
            <div className={styles.font}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faCompass} />
                Discover
                </div>
            <div className={styles.font}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faBolt} />
                Shorts
                </div>
        </div>
    )
}

/** Minimized Menu Component, Home, Discover, Shorts Anchor Clickable Divs with Font Awesome Icons
 * 
 * @returns Minimized Menu -> Clickable Divs with Font Awesome Icons
 */

function LeftMenuMin(){
    const [counter, setCounter] = useState(0);
    const visible = useSelector(selectVisibility);
    useEffect(()=>{
        if(visible === false){
            setCounter(1);
            return toggleHidden();
        }else if(counter !== 0){
            return toggleHidden();
        }
        // eslint-disable-next-line
    }, [visible])
    function toggleHidden(){
        let element = document.getElementById('min');
        element.classList.toggle(styles.none);
    }
    return (
        <div id="min" className={`${styles.leftBarMin} ${styles.duration} ${styles.none}`}>
            <div className={styles.fontMin + ' ' + styles.marginTop}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faHouse}/>
            </div>
            <div className={styles.fontMin}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faCompass} />
            </div>
            <div className={styles.fontMin}>
                <FontAwesomeIcon 
                className={styles.gridItem} 
                icon={faBolt} />
            </div>
        </div>
    )
}
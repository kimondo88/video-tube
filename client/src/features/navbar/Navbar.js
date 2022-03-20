import React from 'react';
import styles from './Navbar.module.css';
import { toggleVisible } from './navbarSlice';
import { useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
/** Top Navbar Position Fixed Component
 * 
 * @returns Navbar Fixed Component with Button, Searchbar and RightMenuComponent
 */

export function Navbar(){
    const dispatch = useDispatch();
    return (
    <div className={styles.navFixed}>
        <div className={styles.flex}>
            <div className={styles.flexTop}>
                <FontAwesomeIcon className={styles.button + ' fa-2xl'} 
                icon={faCaretDown}
                onClick={() => dispatch(toggleVisible())}/>
                <FontAwesomeIcon icon={faYoutubeSquare} 
                className={styles.home + ' fa-2xl'} 
                >
                </FontAwesomeIcon>
                <div className={styles.homeBehind}></div>
                <span>VideoTube</span>
            </div>
            <div className={styles.search}>
                <input className={styles.inputSearch} 
                type="text"
                aria-label='search input' 
                placeholder="Search"></input>
            </div>
            <div className={styles.rightBar}>Right-Menu</div>
        </div>
    </div>
    )
}
import React from 'react';
import styles from './Navbar.module.css';
import { toggleVisible } from './navbarSlice';
import { useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretDown, faBell, faUpload, faTableCells,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
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
                <div className={styles.searchBox}>
                    <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    />
                </div>
            </div>
            <div className={styles.rightBar}>
                <FontAwesomeIcon 
                icon={faUpload}
                className={'fa-lg'}
                />
                <FontAwesomeIcon 
                icon={faTableCells}
                className={'fa-lg'}
                />
                <FontAwesomeIcon 
                icon={faBell}
                className={'fa-lg'}
                />   
            </div>
        </div>
    </div>
    )
}
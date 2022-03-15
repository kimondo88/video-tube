import React from 'react';
import styles from './Navbar.module.css';
import { toggleVisible } from './navbarSlice';
import { useDispatch} from 'react-redux';

export function Navbar(){
    const dispatch = useDispatch();
    return (
    <div className={styles.navFixed}>
        <div className={styles.flex}>
            <button className={styles.home} onClick={() => dispatch(toggleVisible())}>Vid-Tube Button</button>
            <div className={styles.search}>
                <input className={styles.inputSearch} 
                type="test"
                aria-label='search input' 
                placeholder="Search"></input>
            </div>
            <div className={styles.rightBar}>Right-Menu</div>
        </div>
    </div>
    )
}
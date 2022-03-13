import React from 'react';
import styles from './Navbar.module.css';

export function Navbar(){
    return (
    <div className={styles.navFixed}>
        <div className={styles.flex}>
            <div className={styles.home}>Vid-Tube Button</div>
            <div className={styles.search}>
                <input className={styles.inputSearch} type="test" placeholder="Search"></input>
            </div>
            <div className={styles.rightBar}>Right-Menu</div>
        </div>
        
        
    </div>
    )
}
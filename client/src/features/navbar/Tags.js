import styles from './Navbar.module.css'
import { useState } from 'react';
export function Tags(){
    const [content, setContent] = useState([
        'first', 'two', 'three', 'four' , 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtheen'
    ]);
    return (
        <div id="tag" className={styles.tagFixed}>
            {content.map( item => {
            return <div key={item+1}className={styles.tagItem}>
                    <span>{item}</span>
                    </div>
            })}
        </div>
    )
}
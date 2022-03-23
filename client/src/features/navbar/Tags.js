import styles from './Navbar.module.css'
import { useState } from 'react';
export function Tags(){
    const [content] = useState([
        'all', 'games', 'music', 'talents' , 'politics', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtheen'
    ]);
    const [active, setActive] = useState("t0");
    function toggleActive(id){
        let element = document.getElementById(active);
        element.classList.toggle(styles.tagActive);
        setActive(id);
        element = document.getElementById(id);
        element.classList.toggle(styles.tagActive);
    }
    return (
        <div id="tag" className={styles.tagFixed}>
            <div className={styles.big}>
            { content.map( (item, index) => {
                let id = "t"+index, justOnceActive = " " + styles.tagActive;
                if(index !== 0 ){
                    justOnceActive = ""
                }
                return (<div 
                            id={id} 
                            key={item+1} 
                            className={styles.tagItem + justOnceActive}
                            onClick={()=> toggleActive(id)}
                        >
                            <span>{item}</span>
                        </div>)
            })}
            </div>
            
        </div>
    )
}
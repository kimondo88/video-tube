import styles from './Navbar.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';

/** Tags fixed bar, contains two buttons that scroll through content, they appear after clicking
 * 
 * @returns tag fixed bar below navbar, and scroll button for scrolling through tag bar
 */
export function Tags(){
    const [content] = useState([
        'All Content', 'games', 'music', 'talents' , 'politics', 'shocking', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtheen', 'fourthen', 
        '15ten', 'basketball', 'culinary programs', 'wrestling', 'tiktok',
        'swim', 'olympics'
    ]);
    const [active, setActive] = useState("t0");
    function toggleActive(id){
        let element = document.getElementById(active);
        element.classList.toggle(styles.tagActive);
        setActive(id);
        element = document.getElementById(id);
        element.classList.toggle(styles.tagActive);
    }
    /** Function for scrolling left, also it makes scrollRight button visible
     *  
     */
    function scrollLeft(){
        const element = document.getElementById('tag');
        element.scrollLeft += element.scrollWidth+1;
        const scrollRight= document.getElementById('scrollRight');
        if(!scrollRight.classList.contains(styles.scrollButtonRight)){
            scrollRight.classList.toggle(styles.scrollButtonRight)
        }
    }
    /** Function for scrolling right, it makes scroll right button dissapear
     *   if you can't scroll right anymore
     */
    function scrollRight(){
        const element = document.getElementById('tag');
        element.scrollLeft -= 500;
        const scrollRight= document.getElementById('scrollRight');
        if(element.scrollLeft < 501){
            scrollRight.classList.toggle(styles.scrollButtonRight)
        }
    }
    return (
        <div id="tag" className={styles.tagFixed}>
            <div className={styles.scrollBox}>
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
            <div id="scrollRight" onClick={()=> scrollRight()}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
            </div>
            <div id="scrollLeft" className={styles.scrollButtonLeft} onClick={()=> scrollLeft()}>
                <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </div>
        </div>
    )
}
import styles from './Content.module.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibility } from '../navbar/navbarSlice';
import { selectTag } from './contentSlice';
/** Main content component for the site, display fetched thumbnails videos and so on.
 * TODO display fetched thumbnails
 * @returns contentWrapper with mapped content
 */

export function Content(){
    //temporarily disable it for eslint, setContent will be used later
    // eslint-disable-next-line
    const [content, setContent] = useState([
        { name: 'Minecraft', tag: 'games'}, { name: 'Elden Ring', tag: 'games'}, { name: 'Dark Souls', tag: 'games'},
        { name: 'Ghost of Tsushima', tag: 'games'}, { name: 'BloodBorne', tag: 'games'}, { name: 'Dark Souls 2', tag: 'games'},
        { name: 'Champions League', tag: 'sport'}, { name: 'WTA 1000', tag: 'sport'}, { name: 'Running', tag: 'sport'}
    ]);
    const [counter, setCounter] = useState(0);
    const visible = useSelector(selectVisibility);
    const tag = useSelector(selectTag);
    useEffect(()=>{
        if(counter !== 0){
            return toggleMargin();
        }  
        setCounter(1);
    // eslint-disable-next-line
    }, [visible]);
    /**
     * Toggles Content and Tags to the left after clicking on nabvar button
     */
    function toggleMargin(){
        let element = document.getElementById('contentWrapper');
        element.classList.toggle(styles.moveToLeft);
        element = document.getElementById('tag');
        element.classList.toggle(styles.moveTag);
        element = document.getElementById('scrollRight');
        element.classList.toggle(styles.moveScroll);
    }
    return (
        <div id="contentWrapper" className={styles.contentWrapper}>
            <div className={styles.content}>
            {tag === 'all' ? 
                content.map( item => {
                    return <div key={item.name+1}className={styles.contentItem}><span>{item.name}</span></div>
                })
                : content.map( item => {
                    if(item.tag === tag ){
                        return <div key={item.name+1}className={styles.contentItem}><span>{item.name}</span></div>
                    }
                    return null
                })}
            </div>
            <div className={styles.content}>
            {content.map( item => {
                if(item.tag === 'sport' || tag === 'all'){
                    return <div key={item.name+2}className={styles.contentItem}><span>{item.name}</span></div>
                }
                return null
            })}
            </div>
            { !visible ? <div className={styles.contentStuffing}></div> : false}
        </div>
    )
}

// map that have number of blocks that are rendered in div containers
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
        { name: 'Minecraft', tag: 'games', title: "You won't believe it", author: 'Sleepy'}, 
        { name: 'Elden Ring', tag: 'games', title: "You won't believe it", author: 'Sleepy'}, 
        { name: 'Dark Souls', tag: 'games', title: "You won't believe it", author: 'Sleepy'},
        { name: 'Ghost of Tsushima', tag: 'games', title: "You won't believe it", author: 'Sleepy'}, 
        { name: 'BloodBorne', tag: 'games', title: "You won't believe it", author: 'Sleepy'}, 
        { name: 'Dark Souls 2', tag: 'games', title: "You won't believe it", author: 'Sleepy'},
        { name: 'Champions League', tag: 'sport', title: "You won't believe it", author: 'Sleepy'}, 
        { name: 'WTA 1000', tag: 'sport', title: "You won't believe it", author: 'Eurosport'}, 
        { name: 'Running', tag: 'sport', title: "You won't believe it", author: 'Eurosport'}
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
                    return <div>
                                <div key={item.name+1}className={styles.contentItem}>
                                    <span>{item.name}</span>
                                </div>
                                <div className={styles['flex-column']}>
                                    <span className={styles['content__title']}>{item.title}</span>
                                    <span className={styles['content__author']}>{item.author}</span>
                                </div>
                            </div>
                })
                : content.map( item => {
                    if(item.tag === tag ){
                        return <div>
                        <div key={item.name+1}className={styles.contentItem}>
                            <span>{item.name}</span>
                        </div>
                        <div className={styles['flex-column']}>
                            <span className={styles['content__title']}>{item.title}</span>
                            <span className={styles['content__author']}>{item.author}</span>
                        </div>
                    </div>
                    }
                    return null
                })}
            </div>
            <div className={styles.content}>
            {tag === 'all' ? 
                content.map( item => {
                    return <div>
                                <div key={item.name+1}className={styles.contentItem}>
                                    <span>{item.name}</span>
                                </div>
                                <div className={styles['flex-column']}>
                                    <span className={styles['content__title']}>{item.title}</span>
                                    <span className={styles['content__author']}>{item.author}</span>
                                </div>
                            </div>
                })
                : content.map( item => {
                    if(item.tag === tag ){
                        return <div>
                                    <div key={item.name+1}className={styles.contentItem}>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className={styles['flex-column']}>
                                        <span className={styles['content__title']}>{item.title}</span>
                                        <span className={styles['content__author']}>{item.author}</span>
                                    </div>
                                </div>
                    }
                    return null
                })}
            </div>
            { !visible ? <div className={styles.contentStuffing}></div> : false}
        </div>
    )
}

// map that have number of blocks that are rendered in div containers
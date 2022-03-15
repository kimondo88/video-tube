import styles from './Navbar.module.css'
import { selectVisibility } from './navbarSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export function LeftMenu(){
    return (
        <div>
            <LeftMenuShow/> 
        </div>
    )
}

function LeftMenuShow(){ 
    const [counter, setCounter] = useState(0);
    const visible = useSelector(selectVisibility);
    useEffect(()=>{
        if(visible === false){
            setCounter(1);
            return toggle();
        }else if(counter !== 0){
            return toggle();
        }  
    }, [visible]);
    function toggle(){
      let element = document.getElementById('menu');
      element.classList.toggle(styles.leftBarTrans);
    }
    return (
        <div id='menu' className={styles.leftBar + ' ' + styles.duration}>
            <div>T</div>
            <div>B</div>
            <div>C</div>
        </div>
    )
}

// function LeftMenuMin(){
//     return (
//         <div className={`${styles.leftBar} ${styles.duration} ${styles.leftBarTrans}`}>
//             <div>T</div>
//             <div>B</div>
//             <div>C</div>
//         </div>
//     )
// }
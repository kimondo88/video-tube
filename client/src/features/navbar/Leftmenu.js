import styles from './Navbar.module.css'
import { selectVisibility} from './navbarSlice';
import { useSelector } from 'react-redux';

export function LeftMenu(){
    const visible = useSelector(selectVisibility);
    return (
        <div>
            { visible ? <LeftMenuShow/> : <LeftMenuMin/>} 
        </div>
    )
}

function LeftMenuShow(){
    return (
        <div className={styles.leftBar}>
            <div>T</div>
            <div>B</div>
            <div>C</div>
        </div>
    )
}

function LeftMenuMin(){
    return (
        <div className={styles.leftBarMin}>
            <div>T</div>
            <div>B</div>
            <div>C</div>
        </div>
    )
}
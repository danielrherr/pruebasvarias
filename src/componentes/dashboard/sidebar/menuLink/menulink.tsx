import styles from './menulink.module.scss'
import { useLocation,Link } from 'react-router-dom';

export default function MenuLink({ item }: any) {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <Link to={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}            
        </Link>
    )
}

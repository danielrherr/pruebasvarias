import menuItems from '../../../data/itemsMenu';
import MenuLink from './menuLink/menulink';
import styles from './sidebar.module.scss';
import { MdLogout } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
    const navigate = useNavigate()
    // const auth = useAuth();
    const [itemsMenu, setItemsMenu] = useState<any[]>([]);
    const [profile, setProfile] = useState<string>("");

    useEffect(() => {
        const fetchMenuItems = async () => {
            // Simular una llamada a una API          
            setItemsMenu(menuItems);
        };
        fetchMenuItems();
    }, [profile]);  // Dependencia de auth.profile por si es necesario cambiar itemsMenu cuando profile cambia

    const renderMenuItems = (items: any) => {
        return (
            <ul >
                {items.map((item: any) => (
                    <li key={item.row}>
                        
                        <span className={styles.cat}>
                            <MenuLink key={`ML${item.row}`} item={item} />
                        </span>
                        {item.list && item.list.length > 0 && renderMenuItems(item.list)}
                    </li>
                ))}
            </ul>
        );
    };

    const logOut = () => {
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <img src='/noavatar.png' alt="" width='50' height='50' />
                </div>
                <div className={styles.userDetail}>
                    <span className={styles.username}>{"User"}</span>
                    <span className={styles.usertitle}>{"Admin"}</span>
                </div>
            </div>
            {renderMenuItems(itemsMenu)}
            <button className={styles.logout} onClick={() => logOut()}>
                <MdLogout />
                LogOut
            </button>
        </div>
    )
}

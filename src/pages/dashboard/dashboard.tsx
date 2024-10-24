import styles from '../../componentes/dashboard/dashboard.module.scss';
import { useTheme } from '../../componentes/themeProvider/themeProvider';
export default function Dashboard() {
    const { isDarkMode } = useTheme();
    console.log("paso por dashboard ")
    console.log("valor de isdarkmode en das",isDarkMode)
    return (       
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                   
                </div>              
            </div>
            <div className={styles.side}>               
            </div>
        </div>       
    )
}

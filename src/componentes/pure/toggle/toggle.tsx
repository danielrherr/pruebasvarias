import { useEffect, useState } from 'react';
import styles from './toggle.module.scss'; // Importa los estilos de SCSS
import { useTheme } from '../../themeProvider/themeProvider';

interface ToggleProps {
    onIcon: React.ReactNode;
    offIcon: React.ReactNode;
    //  onChange: (checked: boolean) => void;
}

const ToggleComponent: React.FC<ToggleProps> = ({ onIcon, offIcon, /*onChange */ }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    const [isChecked, setIsChecked] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        console.log("valor en local storage ", savedTheme)
        return savedTheme === 'ligth'; // Por defecto "dark" si es lo guardado
    });
   /* useEffect(() => {
        // Actualizar el tema cuando se cambia el estado
        if (isChecked) {
            console.log("ischeck  valor ",isChecked);
            //document.body.classList.add('dark');
            //document.body.className = 'dark';
            localStorage.setItem('theme', 'dark'); // Guardar el tema en localStorage
        } else {
            console.log("! ischeck valor ",isChecked);
            // console.log(" antes de remove ", document.body.classList);
            //document.body.classList.remove('dark');
            //  document.body.className = 'light';
            // console.log(" despues de remove ", document.body.classList);
            // document.body.classList.add('light');
            //localStorage.setItem('theme', 'light'); // Guardar el tema en localStorage
        }
    }, [isChecked]);*/
    return (
        <label className={styles.toggleContainer}>
            <input
                type="checkbox"
                className={styles.sronly}
                checked={isChecked}
                onChange={(e) => {
                    toggleTheme();
                    setIsChecked(e.target.checked);
                    //onChange(e.target.checked);
                }}
            />
            <div
                className={`${styles.toggleBackground} ${isChecked ? styles.checked : styles.unchecked}`}
            >
                <div
                    className={`${styles.toggleCircle} ${isChecked ? styles.checked : styles.unchecked}`}
                >
                    {isChecked ? onIcon : offIcon}
                </div>
            </div>
        </label>
    );
};

export default ToggleComponent;

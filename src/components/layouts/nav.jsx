import styles from '../../styles/Nav.module.css';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    const getNavItemClass = (path) => {
        if (location.pathname === path) {
            return `${styles.navCircle} ${styles.active}`;
        } else if (location.pathname.startsWith(path)) {
            return `${styles.navCircle} ${styles.completed}`;
        } else {
            return styles.navCircle;
        }
    };
   
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarItems}>
                <div className={styles.col}>
                    <a className={getNavItemClass('/api/event')} href="/api/event">1</a>
                    <h2 className={styles.navLabel}>Event</h2>
                </div>
                <div className={styles.col}>
                    <a className={getNavItemClass('/api/register')} href="/api/register">2</a>
                    <h2 className={styles.navLabel}>Registration</h2>
                </div>
                <div className={styles.col}>
                    <a className={getNavItemClass('/api/payment')} href="/api/payment">3</a>
                    <h2 className={styles.navLabel}>Payment</h2>
                </div>
                <div className={styles.col}>
                    <a className={getNavItemClass('/api/confirmation')} href="/api/confirmation">4</a>
                    <h2 className={styles.navLabel}>Confirmation</h2>
                </div>
            </div>
        </div>
    );
}
 
export default Nav;
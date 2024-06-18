import styles from '../../styles/Home.module.css';

const WelcomeBanner = () => {
    const title = 'Unlock the world of STEM adventures! Explore our upcoming events';
    const paragraph = 'Our events are carefully crafted to provide early and meaningful exposure to the digital space, helping children develop essential tech skills in a fun and supportive environment. Whether they\'re beginners or budding experts, there\'s something for every young mind eager to explore the wonders of coding, robotics, AI, and machine learning';

    return ( 
        <div className={styles.welcomeBanner}>
            <h3>{ title }</h3>
            <p>{ paragraph }</p>
            <button>View our past events</button>
        </div>
     );
}
 
export default WelcomeBanner;
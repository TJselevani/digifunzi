import styles from '../../styles/Home.module.css';
import { image3 } from '../util/config';

const WelcomeBanner = () => {
    const title = "UNLOCK THE WORLD OF STEM ADVENTURES! EXPLORE OUR UPCOMING EVENTS";
    const paragraph = "Our events are carefully crafted to provide early and meaningful exposure to the digital space, helping children develop essential tech skills in a fun and supportive environment. Whether they're beginners or budding experts, there's something for every young mind eager to explore the wonders of coding, robotics, AI, and machine learning.";
    return ( 
        <div style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover' }}>
        <div className={styles.welcomeBanner}>
            <div className='split-v' style={{alignItems: 'flex-start'}}>
                <div className={styles.container1}>
                    <div>
                        <h3 className={styles.bannerTitle}>{ title }</h3>
                    </div>
                    <div>
                        <p className={styles.bannerParagraph}>{ paragraph }</p>
                    </div>
                </div>
                
                <div className={styles.container2}>
                    <button className='primary-button'>View our past events</button>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WelcomeBanner;
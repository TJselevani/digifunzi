import React, { useState } from 'react';
// import EventsTemplate from '../../components/layouts/event';
// import useFetch from '../../components/util/useFetch';
import styles from '../../styles/Home.module.css';
import Banner from '../../components/layouts/welcome';
import Card from '../../components/layouts/card';
import { image6 } from '../../components/util/config';
import ProgressIndicator from '../../components/layouts/progress';
import CountdownTimer from '../../components/layouts/countDown';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(12); // Example current page
    const totalPages = 37; 
    const t = [1, 2, 3, 4,];
    const title  = "Explore Our Upcoming Events";
    const layoutHeading = "Summer Adventure: Woodcreek School Boot Camp!";
    const layoutParagraph = "Explore the Art of User Experience, Join Our Interactive UI/UX Course!";
    const PLaceholderTitle = 'Lorem Ipsum';
    const PLaceholderParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?';
    // const { error, isPending, data: events } = useFetch('http://localhost:8000/blogs');

    const plus = () => {setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    const minus = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
    const rs = { margin: '0rem', padding: '0rem'}

    return ( 
        <div>
        <section>
            <Banner/>
        </section>
        <div className={styles.container}>
            <div className={styles.content1}>
                <section>
                    <div className={styles.headingContainer}>
                        <h1 className={styles.headingText}>{ title } </h1>
                    </div>
                    
                    <div className={styles.test} style={{ backgroundImage: `url(${image6})`, backgroundSize: 'cover' }}>
                        <div className={styles.layout}>
                            <div className={styles.layoutTitleContainer}> <h2 className={styles.layoutTitle}> { layoutHeading } </h2> </div>
                            <div className={styles.layoutParagraphContainer}> <p className={styles.layoutParagraph}> { layoutParagraph } </p> </div>
                            <div className={styles.layoutButtonContainer}> <button className='primary-button'>Get Your Tickets Now</button></div>
                            <div className={styles.layoutTimerContainer}>                                
                                {/* <div className={styles.timerTitleContainer}><h1 className={styles.timerTitle}>Ticket Sales End In: </h1></div>
                                <div className='split'>
                                    <div className={styles.time}> { 24 } <p> HRS</p></div>
                                    <div className={styles.time}> { 24 } <p> Minutes</p></div>
                                    <div className={styles.time}> { 24 } <p> seconds</p></div>
                                </div> */}
                                <CountdownTimer styles={styles} endTime={'2025-12-31T23:59:59'}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <div className={styles.content2}>
                <section>
                    <div className={styles.heading2Container}>
                        <h1 className={styles.heading2Title}> Lorem Ipsum  </h1>
                    </div>
                    
                    <div className={styles.subheading2Container}>
                        <h1 className={styles.subheading2Title}> Lorem ipsum dolor sit amet </h1>
                    </div>

                    <div className="gridContainer" style={{marginTop: '47px'}}>
                        {t.map(t => {
                        return(
                            <div className={styles.gridItem} key={t}>
                                <Card/>
                            </div>
                        )})}
                    </div>
                    
                    <div className='split-v-center meta' style={{marginTop: '3rem', marginBottom: '4rem'}} >
                        <div className=''> You've viewed {currentPage} of {totalPages} events</div>
                        <div className='split-h' style={{minWidth: '400px', minHeight: '24px', rs}}>                           
                            <button style={rs} className='secondary-button' onClick={minus}> - </button>
                            <ProgressIndicator style={{width: '5rem'}}  currentPage={currentPage} totalPages={totalPages} />
                            <button style={rs}  className='secondary-button' onClick={plus}> + </button>
                        </div>
                        <button className='primary-button-v2'>Load More Events</button>
                    </div>

                </section>
                </div>
            </div>

        <section className={styles.preFooter}>
            <div className={styles.heading2Container}>
                <h3 className={styles.heading2Title}> { PLaceholderTitle } </h3>
            </div>
            <div className={styles.prefootTextContainer}>
                <div className={styles.subheading2Container}>
                    <h1 subheading2Title> { PLaceholderTitle  }? </h1>
                </div>

                <div className={styles.prefootText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className={styles.prefootSentence}>
                {t.map(t => ( 
                    <div className={styles.t} key={t}>
                            <p> {PLaceholderParagraph} <b> + </b></p>
                    </div>))}
                </div>
            </div>
            
        </section>
        </div>
     );
}
 
export default HomePage;
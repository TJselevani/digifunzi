import React from 'react';
// import EventsTemplate from '../../components/layouts/event';
// import useFetch from '../../components/util/useFetch';
import styles from '../../styles/Home.module.css';
import Banner from '../../components/layouts/welcome';
import Card from '../../components/layouts/card';


const HomePage = () => {
    const t = [1, 2, 3, 4,];
    const title = 'Summer Adventures: Woodcock School Boot Camp!';
    const paragraph = 'Explore the art of use Experience, \n join our interactive UI/UX course';
    const PLaceholderTitle = 'Lorem Ipsum';
    const PLaceholderParagraph = 'Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';
    // const { error, isPending, data: events } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div>
            <section className="home-announcement">
                <Banner/>
            </section>
            <div className={styles.container}>
                <section className="">
                    <h3 className={styles.title}>Explore Our Upcoming Events</h3>
                    <div className={styles.welcomeBanner}>
                        <h3>{ title }</h3>
                        <p>{ paragraph }</p>
                        <button> View our past events </button>
                    </div>
                </section>
                <section className="center">
                    <h1> { PLaceholderTitle } </h1>
                    {/* { error && <div>{ error }</div> } */}
                    {/* { isPending && <div>Loading...</div> } */}
                    {/* { events && <EventsTemplate events={events} /> } */}
                    <div className={styles.gridContainer}>
                    {t.map(t => {
                    return(
                        <div className={styles.gridItem} key={t}>
                            <Card/>
                        </div>
                    )
                })}</div>
                    <br />
                    <div className='center'>
                        You've viewed {15} of {37} events
                        <br/>
                        <button>Load More Events</button>
                    </div>

                </section>
            </div>
            <section className={styles.preFooter}>
                <h3 className={styles.title}> { PLaceholderTitle } </h3>
                <h1> { PLaceholderTitle } </h1>
                {t.map(t => {
                    return(
                        <div className={styles.t} key={t}>
                            <p> {PLaceholderParagraph}</p>
                        </div>
                    )
                })}
            </section>
        </div>
     );
}
 
export default HomePage;
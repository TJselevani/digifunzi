import React, { useState, useEffect } from 'react';
import styles from '../../styles/countdown.module.css';


const CountdownTimer = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <div className={styles.timerTitleContainer}>
                <h1 className={styles.timerTitle}>Ticket Sales End In: </h1>
            </div>
            <div className='split'>
                <div className={styles.time}>
                    {timeLeft.hours} <p>HRS</p>
                </div>
                <div className={styles.time}>
                    {timeLeft.minutes} <p>Minutes</p>
                </div>
                <div className={styles.time}>
                    {timeLeft.seconds} <p>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
